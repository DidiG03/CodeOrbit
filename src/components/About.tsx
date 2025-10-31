'use client';

export default function About() {
  return (
    <section id="about" className="py-20 pb-40" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Headline */}
          <div className="relative">
            {/* OUR STORY label */}
            <div className="mb-6 relative">
              <div className="absolute left-0 top-[-6px] w-16 h-8 border-l-2 border-t-2 border-white/20"></div>
              <span className="text-l uppercase tracking-widest text-white/60 ml-6">About US</span>
            </div>
            
            {/* Blue Gradient Accent Bar */}
            <div className="absolute left-0 top-8 w-2 h-24 md:h-32 bg-gradient-to-b from-[#6366F1] to-transparent"></div>
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight relative z-10 ml-6 md:ml-10 lg:ml-12">
              Your Vision<br/>
              <span className="text-[#6366F1]">Our Expertise</span><br/>
              Your Success
            </h2>
          </div>

          {/* Right Side - Image Cards */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
            {/* First Card */}
            <div className="relative rounded-lg overflow-hidden group w-48 h-48 md:w-56 md:h-56">
              <img 
                src="/images/frame2.jpg" 
                alt="Tech Blog" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 right-3 flex gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full">Tech Blog</span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full">Trends</span>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative rounded-lg overflow-hidden group w-48 h-48 md:w-56 md:h-56">
              <img 
                src="/images/frame3.jpg" 
                alt="Trends" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 right-3 flex gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full">Tech Blog</span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-medium rounded-full">Trends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Large Team Image */}
          <div className="relative">
            <img 
              src="/images/frame4.jpg" 
              alt="Our Team" 
              className="w-full h-full rounded-2xl object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-lg text-white/70 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth. With years 
              of experience in software development and a commitment to excellence, we help 
              businesses transform their ideas into reality through cutting-edge technology 
              and innovative solutions.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX</div>
                <div className="text-sm md:text-base text-white/60">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Years Of Mastery</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Worldwide Honors</div>
              </div>
            </div>

            {/* Watch Intro Section */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {/* Profile pictures placeholder - using colored circles */}
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-purple-500 to-[#6366F1]"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              </div>
              <button className="flex items-center gap-2 md:gap-3 text-white text-sm md:text-lg font-medium hover:text-[#6366F1] transition-colors">
                <span>WATCH INTRO</span>
              </button>
              {/* Play Button */}
              <button 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#6366F1] flex items-center justify-center hover:bg-[#6366F1] transition-colors group"
                aria-label="Watch intro video"
                title="Watch intro video"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6 text-[#6366F1] group-hover:text-white transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* New Section - Timeline and Interactive Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-32">
          {/* Left Column - Story and Timeline */}
          <div className="space-y-8">
            {/* OUR STORY label */}
            <div className="relative">
              <div className="absolute left-0 top-[-6px] w-12 h-6 border-l-2 border-t-2 border-white/20"></div>
              <span className="text-l uppercase tracking-widest text-white/60 ml-4">Our Story</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ml-4 md:ml-8">
              Your Gateway To{' '}
              <span className="text-[#6366F1]">Online Excellence</span>{' '}
              Dream Big In Pixels.
            </h2>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth. With years 
              of experience in software development and a commitment to excellence, we help 
              businesses transform their ideas into reality through cutting-edge technology.
            </p>

            {/* Know More Button */}
            <div className="btn-wrapper">
              <button className="btn">
                <svg
                  className="btn-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
                </svg>
                <div className="txt-wrapper">
                  <span className="txt-1">
                    {Array.from("Know More").map((char, index) => (
                      <span key={index} className="btn-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-6 pt-12 pb-8 md:pb-12">
              {/* Timeline Line and Markers */}
              <div className="relative h-32">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-12 h-0.5 bg-white/20"></div>
                
                {/* Markers */}
                <div className="flex justify-between h-full">
                  <div className="flex flex-col items-center relative ml-4 pb-20 md:pb-24">
                    <div className="absolute top-8 md:top-12 w-16 h-16 -translate-y-1/2">
                        <img src="/images/frame5.jpg" alt="2000" className="w-16 h-16 rounded-full object-fill" />
                    </div>
                    <div className="absolute top-28 md:top-32">
                      <div className="text-white text-sm mb-1 ml-4">2019</div>
                      <div className="text-white/60 text-xs">Establishment & Foundation</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2020</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2022</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2023</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Image */}
          <div className="relative group">
            <div className="relative w-full h-full">
              {/* Main Image */}
              <img 
                src="/images/frame6.jpg" 
                alt="Team Collaboration" 
                className="w-full h-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{ minHeight: '400px' }}
              />
              
              {/* Interactive Button with Rotating Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg 
                  className="w-32 h-32 md:w-48 md:h-48 pointer-events-none"
                  viewBox="0 0 192 192"
                  style={{ 
                    animation: 'spin 20s linear infinite',
                    transformOrigin: '96px 96px'
                  }}
                >
                  <defs>
                    <path id="circle" d="M 96,96 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                  </defs>
                  <text fontSize="11" fill="white" opacity="0.8">
                    <textPath href="#circle" startOffset="0%">
                      Get In Touch · Get In Touch · Get In Touch · 
                    </textPath>
                  </text>
                </svg>
                <button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#6366F1] rounded-full flex items-center justify-center hover:bg-[#4F46E5] transition-colors shadow-lg pointer-events-auto"
                  aria-label="Get in touch"
                  title="Get in touch"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 12L8 6.5v11L17.5 12z" />
                  </svg>
                </button>
              </div>
export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Code Orbit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in software development and a commitment to excellence, 
              we help businesses transform their ideas into reality through cutting-edge technology 
              and innovative solutions.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 absolute inset-0 blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Innovation & Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Client-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Continuous Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

