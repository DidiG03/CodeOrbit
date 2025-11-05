import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  dpr?: number;
  verticalBeamOffset?: number;
  verticalSizing?: number;
  flowSpeed?: number;
  flowStrength?: number;
  color?: string;
};

const VERT = `
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform float uBeamYFrac;
uniform float uVLenFactor;
uniform float uFlowTime;
uniform float uFlowSpeed;
uniform float uFlowStrength;
uniform vec3 uColor;
uniform float uFade;

#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define EPS 1e-6
#define DT_LOCAL 0.0038
#define TAP_RADIUS 6
#define R_V 150.0
#define TOP_FADE_START 0.1
#define TOP_FADE_EXP 1.0
#define FLOW_PERIOD 0.5
#define FLOW_SHARPNESS 1.5

float g(float x){return x<=0.00031308?12.92*x:1.055*pow(x,1.0/2.4)-0.055;}
float tri01(float x){float f=fract(x);return 1.0-abs(f*2.0-1.0);}
float bs(vec2 p,vec2 q,float powr){
    float d=distance(p,q),f=powr*1.2,r=(f*f)/(d*d+EPS);
    return powr*min(1.0,r);
}
float tauWf(float t,float tmin,float tmax){
    float a=smoothstep(tmin,tmin+DT_LOCAL*4.0,t);
    float b=1.0-smoothstep(tmax-DT_LOCAL*4.0,tmax,t);
    return max(0.0,a*b);
}

void mainImage(out vec4 fc,in vec2 frag){
    vec2 C=iResolution.xy*.5;
    float sc=512.0/iResolution.x*.4;
    vec2 uv=(frag-C)*sc;
    vec2 off=vec2(0.0,uBeamYFrac*iResolution.y*sc);
    vec2 uvc = uv - off;
    
    // Calculate line length based on screen height - ensure it covers full screen
    // Use scaled coordinates to match uvc.y coordinate space
    float screenHeight = iResolution.y * sc;
    float lineLength = screenHeight * uVLenFactor;
    
    float b=0.0;
    float basePhase=1.5*PI+1.1*.5;
    float tauMin=basePhase-1.1;
    float tauMax=basePhase;
    
    // Only vertical beam - no horizontal spread
    float yPix=uvc.y;
    float cy=clamp(-yPix/lineLength,-1.0,1.0);
    float tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
    
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tV+float(k)*DT_LOCAL;
        float wt=tauWf(tu,tauMin,tauMax);
        if(wt<=0.0) continue;
        
        float yb=(-lineLength)*cos(tu);
        float s=clamp(yb/lineLength,0.0,1.0);
        float spd=max(abs(sin(tu)),0.02);
        float env=pow(1.0-s,0.6)*spd;
        
        float cap=1.0-smoothstep(TOP_FADE_START,1.0,s);
        cap=pow(cap,TOP_FADE_EXP);
        env*=cap;
        
        // Flow animation
        float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
        float fl=pow(tri01(ph),FLOW_SHARPNESS);
        env*=mix(1.0-uFlowStrength,1.0,fl);
        
        float yp=(-lineLength)*cos(tu);
        // No spread - fixed thin width
        vec2 sig=vec2(1.0,1.0);
        vec2 p=vec2(0.0,yp);
        float mask=step(0.0,yp);
        b+=wt*bs(uvc,p,mask*env);
    }
    
    float sPix=clamp(yPix/lineLength,0.0,1.0);
    float topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
    float L=b*topA;
    
    float dith=(fract(fract(frag.x*123.34)*fract(frag.y*456.21)+34.123)-0.5)*(1.0/255.0);
    float tone=g(L);
    vec3 col=tone*uColor+dith;
    float alpha=clamp(g(L*0.6)+dith*0.6,0.0,1.0);
    
    col*=uFade;
    alpha*=uFade;
    fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`;

export const LaserLine: React.FC<Props> = React.memo(({
  className,
  style,
  dpr,
  verticalBeamOffset = 0.0,
  verticalSizing = 2.5,
  flowSpeed = 0.35,
  flowStrength = 0.25,
  color = '#6366F1'
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const uniformsRef = useRef<any>(null);
  const hasFadedRef = useRef(false);
  const rectRef = useRef<DOMRect | null>(null);
  const currentDprRef = useRef<number>(1);
  const pausedRef = useRef<boolean>(false);
  const inViewRef = useRef<boolean>(true);
  const animationIdRef = useRef<number | null>(null);

  const hexToRGB = (hex: string) => {
    let c = hex.trim();
    if (c[0] === '#') c = c.slice(1);
    if (c.length === 3)
      c = c
        .split('')
        .map(x => x + x)
        .join('');
    const n = parseInt(c, 16) || 0xffffff;
    return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
  };

  useEffect(() => {
    const mount = mountRef.current!;
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: 'default',
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: false,
      logarithmicDepthBuffer: false
    });
    rendererRef.current = renderer;

    const deviceDpr = dpr ?? (window.devicePixelRatio || 1);
    const fixedDpr = Math.min(deviceDpr, 1.0);
    currentDprRef.current = fixedDpr;

    renderer.setPixelRatio(currentDprRef.current);
    renderer.shadowMap.enabled = false;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 1);
    const canvas = renderer.domElement;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(1, 1, 1) },
      uBeamYFrac: { value: verticalBeamOffset },
      uVLenFactor: { value: verticalSizing },
      uFlowTime: { value: 0 },
      uFlowSpeed: { value: flowSpeed },
      uFlowStrength: { value: flowStrength },
      uColor: { value: new THREE.Vector3(1, 1, 1) },
      uFade: { value: hasFadedRef.current ? 1 : 0 }
    };
    uniformsRef.current = uniforms;

    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: false,
      depthTest: false,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    scene.add(mesh);

    const clock = new THREE.Clock();
    clock.start();
    let prevTime = clock.getElapsedTime();
    let fade = 0;

    const setSizeNow = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      const pr = currentDprRef.current;
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      uniforms.iResolution.value.set(w * pr, h * pr, pr);
      rectRef.current = canvas.getBoundingClientRect();
    };

    let resizeRaf = 0;
    const scheduleResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(setSizeNow);
    };

    setSizeNow();
    const ro = new ResizeObserver(scheduleResize);
    ro.observe(mount);

    const io = new IntersectionObserver(
      entries => {
        inViewRef.current = entries[0]?.isIntersecting ?? true;
      },
      { root: null, threshold: 0 }
    );
    io.observe(mount);

    const onVis = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener('visibilitychange', onVis, { passive: true });

    const onCtxLost = (e: Event) => {
      e.preventDefault();
      pausedRef.current = true;
    };
    const onCtxRestored = () => {
      pausedRef.current = false;
      scheduleResize();
    };
    canvas.addEventListener('webglcontextlost', onCtxLost, false);
    canvas.addEventListener('webglcontextrestored', onCtxRestored, false);

    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      
      if (pausedRef.current || !inViewRef.current) return;

      const t = clock.getElapsedTime();
      const dt = Math.max(0, t - prevTime);
      prevTime = t;

      uniforms.iTime.value = t;

      const cdt = Math.min(0.033, Math.max(0.001, dt));
      (uniforms.uFlowTime.value as number) += cdt;

      if (!hasFadedRef.current) {
        const fadeDur = 1.5;
        fade = Math.min(1, fade + dt / fadeDur);
        uniforms.uFade.value = fade;
        if (fade >= 1) {
          hasFadedRef.current = true;
          uniforms.uFade.value = 1;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      canvas.removeEventListener('webglcontextlost', onCtxLost);
      canvas.removeEventListener('webglcontextrestored', onCtxRestored);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, [dpr]);

  useEffect(() => {
    const uniforms = uniformsRef.current;
    if (!uniforms) return;

    uniforms.uBeamYFrac.value = verticalBeamOffset;
    uniforms.uVLenFactor.value = verticalSizing;
    uniforms.uFlowSpeed.value = flowSpeed;
    uniforms.uFlowStrength.value = flowStrength;

    const { r, g, b } = hexToRGB(color || '#FFFFFF');
    uniforms.uColor.value.set(r, g, b);
  }, [verticalBeamOffset, verticalSizing, flowSpeed, flowStrength, color]);

  return <div ref={mountRef} className={`w-full h-full relative ${className || ''}`} style={style} />;
});

LaserLine.displayName = 'LaserLine';

export default LaserLine;

