"use client";

import { useState, useEffect } from "react";

type ContactProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Contact({ isOpen, onClose }: ContactProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send quote request");
      }

      setSubmitStatus("success");
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

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting quote:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <section 
        id="contact" 
        className="relative w-full max-w-6xl bg-black border border-gray-700 max-h-[95vh] overflow-y-auto"
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
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-400 transition-colors z-10"
          style={{ fontSize: '1.5rem' }}
        >
          ×
        </button>

        <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12">
          <div className="mb-6 sm:mb-8 max-w-7xl">
            <h2 className="font-bold text-white mb-1 sm:mb-2" style={{ fontSize: 'clamp(1.5rem, 2.618vw, 3rem)' }}>Get a Quote</h2>
            <p className="text-gray-400 text-sm sm:text-base" style={{ fontSize: 'clamp(0.618rem, 1.618vw, 0.875rem)' }}>Tell us about your project and we&apos;ll get back to you</p>
          </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
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

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
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

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
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
                <option value="web-solutions" className="bg-black">Web Solutions</option>
                <option value="ai-solutions" className="bg-black">Tailored AI Solutions</option>
                <option value="whatsapp-bot" className="bg-black">WhatsApp Bot</option>
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

          {submitStatus === "success" && (
            <div className="pt-2 text-green-400 text-sm">
              ✓ Thank you for your quote request! We&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="pt-2 text-red-400 text-sm">
              ✗ Something went wrong. Please try again or contact us directly.
            </div>
          )}
          
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontSize: 'clamp(0.875rem, 1.618vw, 1rem)' }}
            >
              {isSubmitting ? "Sending..." : "Request Quote"}
            </button>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
}
