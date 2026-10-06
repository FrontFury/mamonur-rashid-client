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
    <div className="w-full bg-[#FDFBF7] py-10 lg:mt-12 mx-auto font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* ==========================================
          HEADER SECTION (CLEAN & EMBEDDED)
      ========================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-stone-200/80">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[11px] font-bold text-emerald-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Background & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-stone-900">
            Personal Details
          </h2>
          <p className="text-stone-500 text-sm mt-1 font-light">
            Official background, parental information, and key statistics.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-stone-200 shadow-sm text-xs text-stone-600 font-medium self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Verified Profile</span>
        </div>
      </div>

      {/* ==========================================
          FEATURED PARENT CARDS
      ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Father's Name Card */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3.5 rounded-xl bg-stone-50 text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300 shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
              Father's Name
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              Late Arosh Miah
            </h3>
          </div>
        </div>

        {/* Mother's Name Card */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-rose-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3.5 rounded-xl bg-stone-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shrink-0">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-rose-700 mb-0.5">
              Mother's Name
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              Mafia Khaton
            </h3>
          </div>
        </div>
      </div>

      {/* ==========================================
          DETAILS GRID
      ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Date of Birth */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-stone-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
              Date of Birth
            </span>
            <span className="text-base font-bold text-stone-800">
              14th August 1994
            </span>
          </div>
        </div>

        {/* Height */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-stone-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shrink-0">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
              Height
            </span>
            <span className="text-base font-bold text-stone-800">
              5' - 8"
            </span>
          </div>
        </div>

        {/* Religion */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-stone-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
              Religion
            </span>
            <span className="text-base font-bold text-stone-800">
              Islam
            </span>
          </div>
        </div>

        {/* Permanent Address */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
          <div className="p-3 rounded-xl bg-stone-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
              Permanent Address
            </span>
            <span className="text-base font-bold text-stone-800 leading-snug">
              Adarsha Road, Bahir Tengra, Sarulia, Demra, Dhaka-1361
            </span>
          </div>
        </div>

        {/* Nationality */}
        <div className="bg-white rounded-2xl p-5 border border-stone-200/70 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-stone-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shrink-0">
            <Flag className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
              Nationality
            </span>
            <span className="text-base font-bold text-stone-800">
              Bangladeshi by Birth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;