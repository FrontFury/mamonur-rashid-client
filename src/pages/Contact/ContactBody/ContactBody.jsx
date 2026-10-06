import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Mail,
  Smartphone,
  Clock,
  Send,
  MessageSquare,
  Check,
  Loader2,
} from "lucide-react";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800 relative overflow-hidden"
    >
      {/* Ambient Background Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="pb-8 border-b border-slate-200/80 mb-10"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/40">
          <Compass className="w-4 h-4 text-amber-600" />
          <span>Advising & Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight mt-1">
          Contact & Advising Hours
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
          Direct communication portal for current MBA students, prospective scholars, and empirical research collaborators.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column - Contact Details */}
        <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Address Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-50/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:bg-white hover:border-amber-300/80 hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100/60 text-amber-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Mailing & Residence Address
                </div>
                <div className="text-xs font-semibold text-amber-700 mb-2">
                  Dhaka Division
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  18/67 Adarsha Road, Bahir Tengra, Sarulla, Demra, Dhaka-1361, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-50/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:bg-white hover:border-amber-300/80 hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100/60 text-amber-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Institutional Inquiries
                </div>
                <div className="text-xs font-semibold text-slate-400 mb-3">
                  Official MBA Advising Email
                </div>
                <a
                  href="mailto:mamun.mba@diit.info"
                  className="font-mono text-sm font-bold text-slate-800 hover:text-amber-700 transition-colors inline-block"
                >
                  mamun.mba@diit.info
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hotline Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-slate-50/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:bg-white hover:border-amber-300/80 hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100/60 text-amber-700 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Direct Contact Numbers
                </div>
                <div className="text-xs font-semibold text-slate-400 mb-3">
                  Advising Hotline
                </div>
                <div className="flex flex-col gap-1 font-mono text-xs sm:text-sm font-bold text-slate-700">
                  <a
                    href="tel:+8801858107075"
                    className="hover:text-amber-700 transition-colors"
                  >
                    +8801858107075
                  </a>
                  <a
                    href="tel:+8801758141322"
                    className="hover:text-amber-700 transition-colors"
                  >
                    +8801758141322
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Hours Banner */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#0F172A] text-white rounded-2xl p-6 shadow-md relative overflow-hidden mt-1 border border-slate-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  MBA Advising Office Hours
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 mb-1">
                  Sunday to Thursday: 09:30 AM – 04:30 PM
                </p>
                <p className="text-xs text-slate-400">
                  MBA Faculty Room, Department of Business Administration, DIIT
                </p>
              </div>
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Quick Message Form */}
        <motion.div variants={itemVariants} className="lg:col-span-6">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" /> Direct Message
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                Send a Message
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                  </motion.div>
                  <h4 className="font-bold text-emerald-900 text-base">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                    Thank you for getting in touch. Your message has been routed and I will respond as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tanvir Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tanvir.ahmed@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Research Collaboration / Query"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none text-xs sm:text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Form Submission Button with Framer Motion Animation */}
                  <AnimatePresence>
                    {isFormValid && (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-6 rounded-xl bg-[#163A2D] text-amber-300 font-bold text-xs sm:text-sm hover:bg-[#0C2219] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactBody;