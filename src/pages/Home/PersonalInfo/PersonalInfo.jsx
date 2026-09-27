import React from "react";
import {
  User,
  Heart,
  Calendar,
  MapPin,
  Ruler,
  Flag,
  BookOpen,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 lg:mt-24  mx-auto font-sans">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 mb-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Background & Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-white">
              Personal Details
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Official personal background, parental information, and key statistics.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider">
                Status
              </span>
              <span className="text-sm font-semibold text-white">
                Verified Information
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          FEATURED PARENT CARDS (SEPARATED)
      ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Father's Name Card */}
        <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="w-2 h-full bg-teal-600 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <User className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                  Father's Name
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                Late Arosh Miah
              </h3>
            </div>
          </div>
        </div>

        {/* Mother's Name Card */}
        <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
          <div className="w-2 h-full bg-rose-500 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
              <Heart className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                  Mother's Name
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                Mafia Khaton
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* ==========================================
          OTHER DETAILS GRID
      ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Date of Birth */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          <div className="w-1.5 h-full bg-teal-600 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Date of Birth
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800">
                14th August 1994
              </span>
            </div>
          </div>
        </div>

        {/* Height */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          <div className="w-1.5 h-full bg-teal-600 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 transition-colors">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Height
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800">
                5' - 8"
              </span>
            </div>
          </div>
        </div>

        {/* Religion */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          <div className="w-1.5 h-full bg-teal-600 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Religion
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800">
                Islam
              </span>
            </div>
          </div>
        </div>

        {/* Permanent Address (Wide Card) */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          <div className="w-1.5 h-full bg-amber-500 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-amber-50 text-amber-700 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Permanent Address
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                Adarsha Road, Bahir Tengra, Sarulia, Demra, Dhaka-1361
              </span>
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          <div className="w-1.5 h-full bg-teal-600 absolute left-0 top-0 rounded-l-2xl" />
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 transition-colors">
              <Flag className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Nationality
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-800">
                Bangladeshi by Birth
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfo;