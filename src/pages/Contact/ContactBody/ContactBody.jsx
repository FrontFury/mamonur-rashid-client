import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Compass,
  MapPin,
  Mail,
  Smartphone,
  Clock,
  Send,
  MessageSquare,
  Check,
} from "lucide-react";

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
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

        {/* RIGHT COLUMN: QUICK MESSAGE FORM (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" /> Direct Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#163A2D] font-['Playfair_Display',serif]">
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-[#163A2D]">Message Sent!</h4>
                  <p className="text-xs text-gray-600">
                    Thank you for getting in touch. I will respond as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tanvir Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tanvir.ahmed@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Research Collaboration / Query"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-xs sm:text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Condition: Show button ONLY if all fields are valid */}
                  {isFormValid && (
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#163A2D] text-amber-300 font-bold text-xs sm:text-sm hover:bg-[#0C2219] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactBody;