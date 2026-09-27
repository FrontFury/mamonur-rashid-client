import React from "react";
import { Sparkles } from "lucide-react";
import homeBgImage from "../../../assets/ResearchBanner.jpg";

const ResearchBanner = () => {
  return (
    <div className="w-full bg-[#F8FAFC] rounded-t-xl md:rounded-t-3xl text-zinc-800 font-['Playfair_Display',serif]">
      <section
        className="relative min-h-[360px] md:min-h-[580px] bg-cover bg-center bg-no-repeat rounded-t-xl md:rounded-t-3xl overflow-hidden shadow-sm flex flex-col items-center justify-center text-center px-4 sm:px-8"
        style={{
          backgroundImage: `url(${homeBgImage})`,
        }}
      >
        {/* Dark Overlay matching Home.jsx */}
        <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-[1px]" />

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto font-sans">
          
          {/* Frosted Glass Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Contributions & Research Focus</span>
          </div>

          {/* Golden Serif Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-amber-300 tracking-tight leading-tight mb-4 drop-shadow-sm">
            Research & Publications
          </h1>

          {/* Subtitle Tailored for Md. Mamonur Rashid */}
          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl opacity-90 font-sans">
            A scholar compilation by <strong className="text-white font-semibold">Md. Mamonur Rashid</strong> featuring peer-reviewed articles, financial research reviews, and insights into Islamic microfinance and banking methodologies.
          </p>

        </div>
      </section>
    </div>
  );
};

export default ResearchBanner;