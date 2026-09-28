import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

const DevelopmentBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200/80 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            <Award className="w-3.5 h-3.5 text-slate-500" />
            <span>Continuous Pedagogical Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Professional Development
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
            Executive leadership credentials, higher education pedagogical workshops, and empirical research symposiums.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-400 shrink-0">
          Certified Executive Modules
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Featured Executive Program (7 Columns) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Top Badges */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="bg-amber-100/80 border border-amber-300/80 text-amber-900 text-[11px] font-bold px-3 py-1 rounded-md">
                Featured Executive Program
              </span>
              <span className="text-xs font-semibold text-slate-400">
                DCCI Certified
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-4 leading-snug">
              How to Become a Dynamic Leader – Organized by DCCI (2 Days)
            </h3>

            {/* Main Overview Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              Intensive 2-day executive leadership seminar organized by the Dhaka Chamber of Commerce & Industry (DCCI). Focused on transformative communication, agile strategic decision frameworks, negotiation under conflict, and team empowerment within high-stakes institutional environments.
            </p>

            {/* Sub-Info Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <span className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Host Authority
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  DCCI Training Institute
                </span>
              </div>

              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                <span className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Core Focus
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  Strategic Decision & Influence
                </span>
              </div>
            </div>
          </div>

          {/* Footer Status Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-amber-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Verified Institutional Certificate</span>
            </div>
            <span className="font-bold text-slate-900">
              Credential Completed
            </span>
          </div>
        </div>

        {/* Right Card: Academic Pedagogy Module (5 Columns) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Top Badge */}
            <div className="mb-4">
              <span className="bg-slate-100 border border-slate-200/80 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-md">
                Academic Pedagogy
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-4 leading-snug">
              Faculty Outcome-Based Education (OBE) & Curricular Design
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              Institutional workshops on modern grading rubrics, continuous quality improvement (CQI), and interactive postgraduate teaching methodologies at DIIT.
            </p>

            {/* Bullet List with Checkmarks */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Case Method Instruction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Interactive Classroom ERPs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Graduate Research Supervision</span>
              </div>
            </div>
          </div>

          {/* Footer Status Bar */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500">
              Continuous DIIT Faculty Series
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DevelopmentBody;