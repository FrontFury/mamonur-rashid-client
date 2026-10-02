import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Compass,
  MapPin,
  Mail,
  Smartphone,
  Clock,
  Send,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ContactBody = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    purpose: "MBA Academic Advising & Roadmap",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.purpose.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    // Environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if ENV variables are loaded properly
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({
        type: "error",
        message: "EmailJS configuration missing in .env file! Please restart dev server.",
      });
      console.error("Missing ENV variables:", { serviceId, templateId, publicKey });
      return;
    }

    // Template params mapped with your EmailJS template fields
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: `[${formData.purpose}] ${formData.subject}`,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Your inquiry has been transmitted successfully! We will get back to you shortly.",
        });
        setFormData({
          fullName: "",
          email: "",
          purpose: "MBA Academic Advising & Roadmap",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("EmailJS Submission Error:", error);
      
      // Detailed error message if EmailJS returns text
      const errorMsg = error?.text || "Failed to send the message. Please check public key or service ID.";
      setStatus({
        type: "error",
        message: errorMsg,
      });
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          <Compass className="w-4 h-4 text-amber-600" />
          <span>Advising & Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          Contact & Advising Hours
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          Direct communication portal for current MBA students, prospective scholars, and empirical research collaborators.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column - Contact Details */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Address */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-amber-300/80 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-200/60 text-slate-600 shrink-0">
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
          </div>

          {/* Email */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-amber-300/80 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-200/60 text-slate-600 shrink-0">
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
                  className="font-mono text-sm font-bold text-slate-800 hover:text-amber-700 transition-colors"
                >
                  mamun.mba@diit.info
                </a>
              </div>
            </div>
          </div>

          {/* Hotline */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-amber-300/80 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-200/60 text-slate-600 shrink-0">
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
          </div>

          {/* Office Hours Banner */}
          <div className="bg-[#0F172A] text-white rounded-2xl p-6 shadow-md relative overflow-hidden mt-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  MBA Advising Office Hours
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 mb-1">
                  Saturday to Wednesday: 09:30 AM – 04:30 PM
                </p>
                <p className="text-xs text-slate-400">
                  Faculty Room, Department of Business Administration, DIIT.
                </p>
              </div>
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-1">
            Send an Academic Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Please indicate your purpose to route your message to the appropriate advisory or research schedule.
          </p>

          {/* Status Message Alerts */}
          {status.message && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-center gap-3 mb-6 transition-all ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Your Full Name <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Sarah Ahmed"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Email Address <span className="text-amber-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. s.ahmed@student.diit.info"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Inquiry Purpose <span className="text-amber-600">*</span>
              </label>
              <div className="relative">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all pr-10 cursor-pointer"
                >
                  <option value="MBA Academic Advising & Roadmap">
                    MBA Academic Advising & Roadmap
                  </option>
                  <option value="Research Collaboration & Empirical Inquiries">
                    Research Collaboration & Empirical Inquiries
                  </option>
                  <option value="Student Mentorship & Thesis Guidance">
                    Student Mentorship & Thesis Guidance
                  </option>
                  <option value="General Institutional Inquiry">
                    General Institutional Inquiry
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Subject <span className="text-amber-600">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Scheduling MBA 3rd Semester Course Advising"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Message <span className="text-amber-600">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Provide brief context regarding your academic inquiry, cohort ID, or research interest..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-500/10 transition-all resize-y"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`mt-2 w-full py-3.5 px-6 font-semibold text-sm rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group ${
                isFormValid && !loading
                  ? "bg-[#0F172A] hover:bg-slate-800 text-white cursor-pointer active:scale-[0.99]"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Transmitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Academic Inquiry</span>
                  <Send
                    className={`w-4 h-4 transition-transform ${
                      isFormValid
                        ? "text-amber-400 group-hover:translate-x-1"
                        : "text-slate-400"
                    }`}
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;