import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  UserCheck,
  Tag,
  ZoomIn,
  X,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const DevelopmentBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  // TanStack Query to fetch development training data from /developments
  const {
    data: developments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["developments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/developments");
      return res.data;
    },
  });

  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200/80 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Continuous Pedagogical & Executive Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Professional Development
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
            Executive leadership credentials, higher education pedagogical workshops, and empirical research certifications.
          </p>
        </div>

        <div className="bg-slate-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 self-start sm:self-auto">
          Certified Credentials: {developments.length}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 animate-pulse space-y-4"
            >
              <div className="h-44 bg-slate-200 rounded-xl" />
              <div className="h-4 bg-slate-200 rounded w-1/3" />
              <div className="h-6 bg-slate-200 rounded w-3/4" />
              <div className="h-16 bg-slate-100 rounded w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load professional development data. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && developments.length === 0 && (
        <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto">
          No training certifications found.
        </div>
      )}

      {/* Cards Grid Container */}
      {!isLoading && !isError && developments.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {developments.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Certificate/Training Banner Image */}
                {item.image ? (
                  <div
                    onClick={() =>
                      setSelectedImage({
                        url: item.image,
                        title: item.title,
                      })
                    }
                    className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden cursor-pointer group/img border-b border-slate-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 font-semibold text-xs">
                      <ZoomIn className="w-4 h-4" /> View Certificate
                    </div>
                  </div>
                ) : (
                  <div className="h-28 bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex items-center justify-between text-white">
                    <Award className="w-10 h-10 text-amber-400 opacity-80" />
                    <Sparkles className="w-5 h-5 text-amber-400/60" />
                  </div>
                )}

                <div className="p-6">
                  {/* Category & Date Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {item.category && (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                        <Tag className="w-3 h-3 text-amber-600" />
                        {item.category}
                      </span>
                    )}

                    {item.date && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-serif text-slate-900 mb-3 leading-snug group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Organization & Participant */}
                  <div className="space-y-1.5 mb-4 text-xs font-medium text-slate-600">
                    {item.organization && (
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-800">{item.organization}</span>
                      </div>
                    )}
                    {item.participantName && (
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Awarded to: <strong className="text-slate-900">{item.participantName}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 p-3.5 rounded-xl border border-slate-100 line-clamp-4">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Verified Credential</span>
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal for Certificate Preview */}
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

export default DevelopmentBody;