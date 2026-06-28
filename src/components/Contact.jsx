import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Hide toast automatically after 4 seconds
        setTimeout(() => setShowToast(false), 4000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 relative">

      {/* Toast Notification Container */}
      <div className="fixed top-24 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="pointer-events-auto flex items-center space-x-3 p-4 rounded-2xl bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)] border border-emerald-400/20 max-w-sm"
            >
              <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-xs">Message Sent!</p>
                <p className="text-[10px] opacity-90 mt-0.5">Thank you, Riya will get back to you shortly.</p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="p-1 hover:bg-emerald-600 rounded transition-colors ml-auto cursor-pointer"
                aria-label="Dismiss toast"
              >
                <FiX className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-sans"
          >
            Let's Collaborate On Your Next Project
          </motion.h3>
        </div>

        {/* 2-Column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Hand: Social cards & general info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Contact Information
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Have a project in mind or want to discuss full-time/internship opportunities? Fill out the form or reach out directly on any social channel.
            </p>

            {/* Direct Details Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl glassmorphism-card border border-slate-200/50 dark:border-slate-800/50 hover:shadow-lg"
              >
                <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Email Directly</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-2xl glassmorphism-card border border-slate-200/50 dark:border-slate-800/50">
                <div className="p-3 bg-violet-500/10 text-violet-500 rounded-xl">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Location</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Ludhiana, Punjab, India (Open to Remote / Relocate)</p>
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-2xl glassmorphism border border-slate-200/50 dark:border-slate-800/80 mt-6">
              <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Connect Socially</h5>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 rounded-xl hover:text-sky-505 hover:scale-105 active:scale-95 transition-all text-slate-600 dark:text-slate-300"
                  aria-label="GitHub profile"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 rounded-xl hover:text-sky-505 hover:scale-105 active:scale-95 transition-all text-slate-600 dark:text-slate-300"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hand: Validated Glassmorphic Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl glassmorphism border border-slate-200/50 dark:border-slate-800/50 shadow-xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border outline-none text-sm transition-all focus:bg-white dark:focus:bg-slate-900 ${errors.name
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20'
                      : 'border-slate-200/80 dark:border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
                    }`}
                 
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border outline-none text-sm transition-all focus:bg-white dark:focus:bg-slate-900 ${errors.email
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20'
                      : 'border-slate-200/80 dark:border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
                    }`}
                
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.email}
                  </span>
                )}
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border outline-none text-sm transition-all focus:bg-white dark:focus:bg-slate-900 ${errors.subject
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20'
                      : 'border-slate-200/80 dark:border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
                    }`}
                 
                />
                {errors.subject && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border outline-none text-sm transition-all resize-none focus:bg-white dark:focus:bg-slate-900 ${errors.message
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20'
                      : 'border-slate-200/80 dark:border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20'
                    }`}
                 
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg hover:shadow-sky-500/10 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    Send Message <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
