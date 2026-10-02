import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  GraduationCap,
  Award,
  Sparkles,
  Building2,
  CheckCircle,
  Calendar,
  AlertCircle,
  ZoomIn,
  X,
} from "lucide-react";

const AcademicBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  // TanStack Query to fetch academic records from /academics
  const {
    data: academicData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["academics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/academics");
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
              <GraduationCap className="w-4 h-4 text-amber-700" />
            </span>
            <span>Educational Credentials & Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Academic Background
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Distinguished scholastic record spanning secondary, undergraduate, and post-graduate business degrees.
          </p>
        </div>

        <div className="bg-slate-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 self-start md:self-auto">
          Total Degrees: {academicData.length}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 animate-pulse space-y-4"
            >
              <div className="h-6 bg-slate-200 rounded w-1/2" />
              <div className="h-8 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-12 bg-slate-100 rounded w-full mt-6" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load academic background data. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && academicData.length === 0 && (
        <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto">
          No academic records available.
        </div>
      )}

      {/* Grid Container */}
      {!isLoading && !isError && academicData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {academicData.map((item) => {
            // Check if there is merit distinction in description
            const isMerit = item.description?.toLowerCase().includes("merit") || false;
            
            // Year Formatting
            const yearDisplay =
              item.passingYear ||
              (item.startYear && item.endYear
                ? `${item.startYear} - ${item.endYear}`
                : item.endYear || item.startYear || "");

            return (
              <div
                key={item._id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:bg-gradient-to-b hover:from-amber-500/10 hover:via-white hover:to-white hover:ring-8 hover:ring-amber-500/10 overflow-hidden"
              >
                {/* Top Glow Bar on Hover */}
                <div className="absolute inset-x-8 -top-[2px] h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Image/Certificate Thumbnail */}
                  {item.image && (
                    <div
                      onClick={() =>
                        setSelectedImage({ url: item.image, title: item.degree })
                      }
                      className="relative h-32 w-full mb-4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group/img"
                    >
                      <img
                        src={item.image}
                        alt={item.degree}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-1">
                        <ZoomIn className="w-4 h-4" /> View
                      </div>
                    </div>
                  )}

                  {/* Top Badges & Passing Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300 ${
                        isMerit
                          ? "bg-amber-100 text-amber-800 border border-amber-300/60 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-white group-hover:shadow-md group-hover:border-transparent inline-flex items-center gap-1.5"
                          : "bg-slate-100 border border-slate-200 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800 group-hover:border-amber-300/60"
                      }`}
                    >
                      {isMerit && (
                        <Sparkles className="w-3 h-3 text-amber-600 group-hover:text-white transition-colors" />
                      )}
                      <span>{isMerit ? item.description : "Academic Role"}</span>
                    </span>

                    {yearDisplay && (
                      <span className="text-xs font-bold font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 group-hover:bg-white group-hover:text-slate-600 inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {yearDisplay}
                      </span>
                    )}
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {item.degree}
                  </h3>

                  {/* Field of Study */}
                  {item.fieldOfStudy && (
                    <div className="inline-block bg-slate-100/80 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-4 group-hover:bg-white/80">
                      {item.fieldOfStudy}
                    </div>
                  )}

                  {/* Institution */}
                  <div className="space-y-1 text-xs text-slate-500 leading-relaxed mb-6">
                    <p className="font-semibold text-slate-700 flex items-start gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5 group-hover:text-amber-600 transition-colors" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Result/Grade Box */}
                <div className="pt-4 border-t border-slate-100 group-hover:border-amber-200/80 flex items-center justify-between transition-colors">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-800/80">
                      Result Grade
                    </span>
                    <div className="text-sm sm:text-base font-black font-sans text-slate-900 group-hover:text-amber-600 transition-colors mt-0.5">
                      {item.grade || "Completed"}
                    </div>
                  </div>

                  {/* Icon Badge */}
                  <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300">
                    {isMerit ? (
                      <Award className="w-5 h-5 text-amber-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Certificate Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[70vh] overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 my-2 flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[65vh] object-contain rounded-xl"
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

export default AcademicBody;