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

  const [toastMessage, setToastMessage] = useState({ title: '', desc: '', isError: false });

  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmittedStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: "table"
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        setSubmittedStatus({
          type: 'success',
          message: data.message || "Message sent successfully!"
        });
        setToastMessage({
          title: "Message Submitted!",
          desc: `Check ${personalInfo.email} (and Spam folder) for the email or one-time FormSubmit activation link.`,
          isError: false
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      // Direct mailto fallback
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setToastMessage({
        title: "Redirecting to Mail Client...",
        desc: `Opening your email app to send directly to ${personalInfo.email}.`,
        isError: false
      });
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 9000);
    }
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message ? `From: ${formData.name || 'Visitor'} (${formData.email || ''})\n\n${formData.message}` : '')}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">

      {/* Toast Notification Container */}
      <div className="fixed top-24 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`pointer-events-auto flex items-center space-x-3 p-4 rounded-2xl shadow-[0_10px_30px_rgba(255,94,77,0.35)] border max-w-md ${
                toastMessage.isError
                  ? 'bg-rose-900/90 text-white border-rose-500'
                  : 'bg-white dark:bg-navy-900 text-slate-900 dark:text-white border-coral-500'
              }`}
            >
              <div className="p-2 rounded-xl bg-coral-500/20 text-coral-500">
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs">{toastMessage.title}</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">{toastMessage.desc}</p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors ml-auto cursor-pointer"
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
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get In Touch
            </h2>
            <div className="w-8 h-[3px] bg-coral-500 rounded-full" />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Have a project in mind, an internship opportunity, or want to discuss full-stack & mobile engineering? Let's talk.
          </p>
        </div>

        {/* 2-Column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Hand: Social cards & general info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Contact Information
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Reach out directly by email or connect with me on GitHub and LinkedIn.
            </p>

            {/* Direct Details Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-5 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 hover:border-coral-500/40 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl border border-coral-500/20 group-hover:scale-110 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Email Directly</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-coral-500 dark:group-hover:text-coral-400 transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-md">
                <div className="p-3 bg-coral-500/10 text-coral-500 rounded-2xl border border-coral-500/20">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Location</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location} (Open to Remote / Relocate)</p>
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 mt-6 shadow-md">
              <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Connect Socially</h5>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 hover:border-coral-500/40 rounded-2xl hover:text-coral-500 dark:hover:text-coral-400 hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-300"
                  aria-label="GitHub profile"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 hover:border-coral-500/40 rounded-2xl hover:text-coral-500 dark:hover:text-coral-400 hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-300"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hand: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white/90 dark:bg-navy-900/60 border border-slate-200/80 dark:border-navy-800 shadow-xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              {/* Name field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all ${
                    errors.name
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-200 dark:border-navy-800 focus:border-coral-500 focus:ring-1 focus:ring-coral-500/30'
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all ${
                    errors.email
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-200 dark:border-navy-800 focus:border-coral-500 focus:ring-1 focus:ring-coral-500/30'
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.email}
                  </span>
                )}
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g. Project Collaboration / Job Opportunity"
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all ${
                    errors.subject
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-200 dark:border-navy-800 focus:border-coral-500 focus:ring-1 focus:ring-coral-500/30'
                  }`}
                />
                {errors.subject && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold font-mono text-slate-600 dark:text-slate-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows="4"
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border outline-none text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-slate-200 dark:border-navy-800 focus:border-coral-500 focus:ring-1 focus:ring-coral-500/30'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1 font-semibold">
                    <FiAlertCircle /> {errors.message}
                  </span>
                )}
              </div>

              {/* Status Alert Banner */}
              {submittedStatus && (
                <div className="p-4 rounded-2xl bg-coral-500/10 dark:bg-coral-500/15 border border-coral-500/30 text-slate-800 dark:text-slate-100 text-xs leading-relaxed space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-coral-600 dark:text-coral-400">
                    <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Submission Processed!</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    If this is your first test submission, <strong>FormSubmit</strong> sends an email with the subject <em>"Action Required: Activate FormSubmit"</em> to <strong>{personalInfo.email}</strong>. 
                  </p>
                  <p className="text-[11px] text-coral-600 dark:text-coral-400 font-medium">
                    👉 Please check your <strong>Gmail Inbox & Spam/Junk folder</strong> and click <strong>"Activate Form"</strong> to enable instant email delivery for all future messages!
                  </p>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-xs font-bold bg-coral-500 hover:bg-coral-600 text-white shadow-lg shadow-coral-500/30 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Send Message <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="w-full py-3 rounded-full text-xs font-semibold bg-slate-100 dark:bg-navy-950 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiMail className="w-4 h-4 text-coral-500" />
                  Open in Gmail Web / Compose
                </button>
              </div>

              {/* Quick helper note */}
              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                You can also reach out directly anytime at{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-coral-500 hover:underline font-medium"
                >
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
