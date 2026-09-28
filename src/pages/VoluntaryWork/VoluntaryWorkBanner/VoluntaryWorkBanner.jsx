import React from "react";
import { Sparkles } from "lucide-react";
// Change dis path to match am wit yu actual background image location
import voluntaryBgImage from "../../../assets/VoluntaryWorkBanner.jpg";

const VoluntaryWorkBanner = () => {
  return (
    <div className="w-full bg-[#F8FAFC] rounded-t-xl md:rounded-t-3xl text-zinc-800 font-['Playfair_Display',serif]">
      {/* ==========================================
          HERO / BANNER SECTION
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[580px] bg-cover bg-center bg-no-repeat rounded-t-xl md:rounded-t-3xl overflow-hidden shadow-sm flex flex-col items-center justify-center text-center px-4 sm:px-8"
        style={{
          backgroundImage: `url(${voluntaryBgImage})`,
        }}
      >
        {/* Dark Overlay we match di oda page-dem */}
        <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-[1px]" />

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto font-sans">
          
          {/* Frosted Glass Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/20 text-[11px] sm:text-xs font-bold text-[#Facc15] uppercase tracking-wider mb-5 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#Facc15]" />
            <span>Community Service & Social Leadership</span>
          </div>

          {/* Golden Serif Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Voluntary Work & Engagement
          </h1>

          {/* Subtitle for Md. Mamonur Rashid */}
          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl opacity-90 font-sans">
            A showcase of social initiatives, student mentorship, community development, and voluntary contributions led by <strong className="text-white font-semibold">Md. Mamonur Rashid</strong>.
          </p>

        </div>
      </section>
    </div>
  );
};

export default VoluntaryWorkBanner;