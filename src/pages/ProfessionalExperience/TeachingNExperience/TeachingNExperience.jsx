import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  X,
  ZoomIn,
  AlertCircle,
  Sparkles,
} from "lucide-react";

// Helper function to format date cleanly
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.toLowerCase() === "present") return "Present";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const TeachingNExperience = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedLogo, setSelectedLogo] = useState(null);

  // TanStack Query to fetch experience data from /experiences
  const {
    data: experiences = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const res = await axiosSecure.get("/experiences");
      return res.data;
    },
  });

  return (
    <div className="w-full bg-slate-50/50 py-8 sm:py-12 px-3 sm:px-8 lg:px-16 xl:px-24 max-w-[1500px] mx-auto font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ==========================================
          HEADER BANNER (MOBILE & DESKTOP OPTIMIZED)
      ========================================== */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 mb-8 sm:mb-10 border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[10px] sm:text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2.5 sm:mb-3">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
              <span>Career Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-slate-900">
              Professional Experience
            </h2>
            <p className="text-slate-500 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-2xl font-normal leading-relaxed">
              Continuous trajectory bridging tertiary academic instruction, academic advising, and institutional governance.
            </p>
          </div>

          <div className="bg-slate-100/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold text-slate-700 border border-slate-200/60 self-start sm:self-auto shrink-0 shadow-sm">
            Total Roles: <span className="text-emerald-800 ml-1">{experiences.length}</span>
          </div>
        </div>
      </div>

      {/* ==========================================
          LOADING SKELETON
      ========================================== */}
      {isLoading && (
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 animate-pulse flex flex-row gap-4 sm:gap-5"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-100 rounded-xl sm:rounded-2xl shrink-0" />
              <div className="flex-1 space-y-2.5 sm:space-y-3">
                <div className="h-3.5 sm:h-4 bg-slate-100 rounded w-1/3" />
                <div className="h-5 sm:h-6 bg-slate-100 rounded w-2/3" />
                <div className="h-3.5 sm:h-4 bg-slate-100 rounded w-1/2" />
                <div className="h-10 sm:h-12 bg-slate-50 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ==========================================
          ERROR STATE
      ========================================== */}
      {isError && (
        <div className="p-4 sm:p-6 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-800 text-xs sm:text-sm max-w-5xl mx-auto">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-rose-600" />
          <span>Failed to load experience records. {error?.message}</span>
        </div>
      )}

      {/* ==========================================
          EMPTY STATE
      ========================================== */}
      {!isLoading && !isError && experiences.length === 0 && (
        <div className="p-8 sm:p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs sm:text-sm max-w-5xl mx-auto">
          No experience records found.
        </div>
      )}

      {/* ==========================================
          MOBILE-FRIENDLY TIMELINE LIST
      ========================================== */}
      {!isLoading && !isError && experiences.length > 0 && (
        <div className="relative border-l-2 border-slate-200/80 ml-2 sm:ml-6 pl-4 sm:pl-10 space-y-5 sm:space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp) => {
            const startFormatted = formatDate(exp.startDate);
            const endFormatted = exp.isCurrent ? "Present" : formatDate(exp.endDate);

            return (
              <div key={exp._id} className="relative group">
                {/* Responsive Timeline Dot Marker */}
                <span
                  className={`absolute -left-[23px] sm:-left-[47px] top-5 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white ring-2 transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-emerald-600 ring-emerald-200 animate-pulse"
                      : "bg-slate-800 ring-slate-200 group-hover:bg-amber-500 group-hover:ring-amber-200"
                  }`}
                />

                {/* Mobile Friendly Adaptive Experience Card */}
                <div className="bg-white rounded-2xl p-4 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  
                  {/* Left Highlight Bar */}
                  <div
                    className={`w-1.5 h-full absolute left-0 top-0 rounded-l-2xl transition-colors duration-300 ${
                      exp.isCurrent ? "bg-emerald-600" : "bg-slate-800 group-hover:bg-amber-500"
                    }`}
                  />

                  {/* Top Mobile Row: Logo + Status Badges */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                    {/* Logo Image */}
                    {exp.companyLogo ? (
                      <div
                        onClick={() =>
                          setSelectedLogo({
                            url: exp.companyLogo,
                            title: exp.company,
                          })
                        }
                        className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 p-1.5 sm:p-2 shrink-0 overflow-hidden cursor-pointer group/logo flex items-center justify-center"
                      >
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="w-full h-full object-contain group-hover/logo:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white backdrop-blur-[2px]">
                          <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-400">
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                    )}

                    {/* Status Badge Visible on Mobile Right Corner */}
                    <div className="sm:hidden block">
                      {exp.isCurrent ? (
                        <span className="bg-emerald-100 text-emerald-900 border border-emerald-200/80 text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Current Role
                        </span>
                      ) : (
                        <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 w-full">
                    {/* Desktop & Tablet Top Badge Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200/60">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                        <span>
                          {startFormatted} – {endFormatted}
                        </span>
                      </div>

                      {/* Desktop Only Status Indicator */}
                      <div className="hidden sm:block">
                        {exp.isCurrent ? (
                          <span className="bg-emerald-100 text-emerald-900 border border-emerald-200/80 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                            Current Role
                          </span>
                        ) : (
                          <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors mb-1 leading-snug">
                      {exp.role}
                    </h3>

                    {/* Company & Location Info */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700 mb-2.5 sm:mb-3">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1 text-slate-500 font-normal">
                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Role Description Card */}
                    {exp.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ==========================================
          RESPONSIVE LIGHTBOX MODAL
      ========================================== */}
      {selectedLogo && (
        <div
          onClick={() => setSelectedLogo(null)}
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xs sm:max-w-md w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-xl sm:rounded-2xl flex items-center justify-center p-3 sm:p-4 bg-slate-50 border border-slate-100 my-3 sm:my-4">
              <img
                src={selectedLogo.url}
                alt={selectedLogo.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h4 className="text-sm sm:text-base font-bold font-serif text-slate-900 text-center">
              {selectedLogo.title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachingNExperience;