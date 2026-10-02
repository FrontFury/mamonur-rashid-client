import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  Briefcase,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  X,
  ZoomIn,
  AlertCircle,
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
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            <Briefcase className="w-4 h-4 text-amber-600" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
            Continuous trajectory bridging tertiary academic instruction, academic advising, and institutional governance.
          </p>
        </div>
        <div className="bg-slate-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 self-start sm:self-auto">
          Total Roles: {experiences.length}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="space-y-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 animate-pulse flex flex-col sm:flex-row gap-5"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-2xl shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-slate-200 rounded w-1/4" />
                <div className="h-6 bg-slate-200 rounded w-1/2" />
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="h-12 bg-slate-100 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load experience records. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && experiences.length === 0 && (
        <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm max-w-4xl mx-auto">
          No experience records found.
        </div>
      )}

      {/* Timeline List View */}
      {!isLoading && !isError && experiences.length > 0 && (
        <div className="relative border-l-2 border-slate-200/90 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp) => {
            const startFormatted = formatDate(exp.startDate);
            const endFormatted = exp.isCurrent ? "Present" : formatDate(exp.endDate);

            return (
              <div key={exp._id} className="relative group">
                {/* Timeline Circle Dot */}
                <span
                  className={`absolute -left-[31px] sm:-left-[47px] top-4 w-4 h-4 rounded-full border-2 border-white ring-2 ${
                    exp.isCurrent
                      ? "bg-amber-600 ring-amber-200 animate-pulse"
                      : "bg-slate-800 ring-slate-200"
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start">
                  {/* Left Accent Highlight Bar */}
                  <div
                    className={`w-1.5 h-full absolute left-0 top-0 rounded-l-2xl transition-colors ${
                      exp.isCurrent ? "bg-amber-600" : "bg-slate-800 group-hover:bg-amber-600"
                    }`}
                  />

                  {/* Company Logo with Lightbox Trigger */}
                  {exp.companyLogo ? (
                    <div
                      onClick={() =>
                        setSelectedLogo({
                          url: exp.companyLogo,
                          title: exp.company,
                        })
                      }
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 shrink-0 overflow-hidden cursor-pointer group/logo flex items-center justify-center"
                    >
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                      <Building2 className="w-8 h-8" />
                    </div>
                  )}

                  {/* Content Container */}
                  <div className="flex-1 w-full">
                    {/* Top Row Badges & Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {startFormatted} – {endFormatted}
                        </span>
                      </div>

                      {exp.isCurrent ? (
                        <span className="bg-amber-100 text-amber-900 border border-amber-300/80 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                          Current Role
                        </span>
                      ) : (
                        <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Role Title & Company */}
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-1 leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="inline-flex items-center gap-1 text-slate-500 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
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

      {/* Logo Modal Lightbox */}
      {selectedLogo && (
        <div
          onClick={() => setSelectedLogo(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-48 h-48 rounded-2xl flex items-center justify-center p-4 bg-slate-50 border border-slate-100 my-4">
              <img
                src={selectedLogo.url}
                alt={selectedLogo.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h4 className="text-base font-bold font-serif text-slate-900 text-center">
              {selectedLogo.title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachingNExperience;