"use client";

import { useState, useEffect } from "react";

type ContactProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your quote request! We'll get back to you soon.");
    setFormData({ 
      name: "", 
      email: "", 
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "" 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger animation after a brief delay to allow DOM to render
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <section 
        id="contact" 
        className="relative w-full max-w-6xl bg-black border border-gray-700"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          fontFamily: 'Khand, sans-serif',
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'scale(1)' : 'scale(0.85)',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors z-10"
          style={{ fontSize: '1.5rem' }}
        >
          ×
        </button>

        <div className="px-8 md:px-12 lg:px-16 py-12">
          <div className="mb-8 max-w-7xl">
            <h2 className="font-bold text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 2.618vw, 3rem)' }}>Get a Quote</h2>
            <p className="text-gray-400" style={{ fontSize: 'clamp(0.618rem, 1.618vw, 0.875rem)' }}>Tell us about your project and we'll get back to you</p>
          </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
            
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email *"
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
            
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-gray-400"
                style={{ color: formData.projectType ? '#fff' : '#9ca3af' }}
              >
                <option value="" className="bg-black text-gray-400">Project Type</option>
                <option value="web" className="bg-black">Web Development</option>
                <option value="mobile" className="bg-black">Mobile Application</option>
                <option value="cloud" className="bg-black">Cloud Solutions</option>
                <option value="consulting" className="bg-black">Digital Consulting</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>
            
            <div>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-gray-400"
                style={{ color: formData.budget ? '#fff' : '#9ca3af' }}
              >
                <option value="" className="bg-black text-gray-400">Budget Range</option>
                <option value="250-1250" className="bg-black">$250 - $1,250</option>
                <option value="1250-2500" className="bg-black">$1,250 - $2,500</option>
                <option value="2500-6250" className="bg-black">$2,500 - $6,250</option>
                <option value="6250-12500" className="bg-black">$6,250 - $12,500</option>
                <option value="12500+" className="bg-black">$12,500+</option>
              </select>
            </div>
          </div>

          <div>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-gray-400"
              style={{ color: formData.timeline ? '#fff' : '#9ca3af' }}
            >
              <option value="" className="bg-black text-gray-400">Project Timeline</option>
              <option value="1-3" className="bg-black">1-3 months</option>
              <option value="3-6" className="bg-black">3-6 months</option>
              <option value="6-12" className="bg-black">6-12 months</option>
              <option value="12+" className="bg-black">12+ months</option>
            </select>
          </div>
          
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Tell us about your project *"
              className="w-full px-4 py-3 text-base border-b border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              style={{ fontSize: 'clamp(0.875rem, 1.618vw, 1rem)' }}
            >
              Request Quote
            </button>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
}
