import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  Wrench,
  Award,
  Calendar,
  User,
  Building2,
  ExternalLink,
  ZoomIn,
  X,
  AlertCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const SkillsBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  // TanStack Query to fetch skills/certifications from /skills
  const {
    data: skillsData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axiosSecure.get("/skills");
      return res.data;
    },
  });

  return (
    <div className="w-full bg-[#F8FAFC] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="relative pb-10 border-b border-slate-200/80 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <span className="p-1.5 bg-amber-100 rounded-lg">
              <Wrench className="w-4 h-4 text-amber-700" />
            </span>
            <span>Professional Skills & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Verified course accomplishments, specialized skills, and continuous professional development credentials.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="bg-slate-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 self-start md:self-auto">
          Total Skills & Certificates: {skillsData.length}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 animate-pulse space-y-4"
            >
              <div className="h-44 bg-slate-200 rounded-2xl w-full" />
              <div className="h-6 bg-slate-200 rounded w-3/4 mt-4" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="h-12 bg-slate-100 rounded w-full mt-6" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load skills data. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && skillsData.length === 0 && (
        <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto">
          No skills or certification records found.
        </div>
      )}

      {/* Cards Grid */}
      {!isLoading && !isError && skillsData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {skillsData.map((item) => {
            const isDistinction = item.description?.toLowerCase().includes("distinction");

            return (
              <div
                key={item._id}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:bg-gradient-to-b hover:from-amber-500/10 hover:via-white hover:to-white hover:ring-8 hover:ring-amber-500/10 overflow-hidden"
              >
                {/* Top Ambient Glow */}
                <div className="absolute inset-x-8 -top-[2px] h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Image/Certificate Thumbnail */}
                  {item.image ? (
                    <div
                      onClick={() =>
                        setSelectedImage({
                          url: item.image,
                          title: item.skillName,
                        })
                      }
                      className="relative h-44 w-full mb-5 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group/img"
                    >
                      <img
                        src={item.image}
                        alt={item.skillName}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-[2px]">
                        <ZoomIn className="w-4 h-4" /> Preview Certificate
                      </div>
                    </div>
                  ) : (
                    <div className="h-28 w-full mb-5 rounded-2xl bg-amber-500/5 border border-amber-200/60 flex items-center justify-center text-amber-700">
                      <Award className="w-10 h-10 opacity-40" />
                    </div>
                  )}

                  {/* Top Badges (Organization & Distinction/Status) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {item.organization && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                        <Building2 className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.organization}</span>
                      </span>
                    )}

                    {isDistinction && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300/60 px-2.5 py-1 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-3 h-3 text-amber-600 group-hover:text-white" />
                        Distinction
                      </span>
                    )}
                  </div>

                  {/* Skill / Course Title */}
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {item.skillName}
                  </h3>

                  {/* Instructor Info */}
                  {item.instructor && (
                    <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-3">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Instructor: {item.instructor}</span>
                    </p>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 group-hover:border-amber-200/80 flex items-center justify-between transition-colors">
                  {/* Issue Date */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-slate-600">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.issueDate || "N/A"}</span>
                  </div>

                  {/* Verification URL Button */}
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-600 hover:text-white px-3 py-1.5 rounded-xl border border-amber-200/80 transition-all duration-200"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 my-2 flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>

            <h4 className="text-sm sm:text-base font-bold font-serif text-slate-900 text-center mt-2 px-6">
              {selectedImage.title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsBody;