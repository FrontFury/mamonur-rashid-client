import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  HeartHandshake,
  Building2,
  Calendar,
  ZoomIn,
  X,
  AlertCircle,
  Tag,
  UserCheck,
  Heart,
} from "lucide-react";

const VoluntaryWorkBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch volunteer works from /volunteerings API endpoint
  const {
    data: volunteerData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["volunteerings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/volunteerings");
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
              <HeartHandshake className="w-4 h-4 text-amber-700" />
            </span>
            <span>Civic Engagement & CSR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Voluntary Work & Community
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Translating leadership skills and personal commitment into grassroots community welfare programs, disaster relief operations, and social impact initiatives.
          </p>
        </div>

        {/* Dynamic Counter Badge */}
        <div className="bg-slate-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 self-start md:self-auto">
          Total Initiatives: {volunteerData.length}
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
              <div className="h-52 bg-slate-200 rounded-2xl w-full" />
              <div className="h-6 bg-slate-200 rounded w-3/4 mt-4" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="h-16 bg-slate-100 rounded w-full mt-6" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load volunteering data. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && volunteerData.length === 0 && (
        <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto">
          No volunteering activities found.
        </div>
      )}

      {/* 3-Column Responsive Grid */}
      {!isLoading && !isError && volunteerData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {volunteerData.map((item) => (
            <div
              key={item._id}
              className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:bg-gradient-to-b hover:from-amber-500/10 hover:via-white hover:to-white hover:ring-8 hover:ring-amber-500/10"
            >
              {/* Top Accent Ambient Glow */}
              <div className="absolute inset-x-8 -top-[2px] h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div>
                {/* Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 group/img">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-50/50 flex items-center justify-center text-amber-600">
                      <Heart className="w-12 h-12 opacity-30" />
                    </div>
                  )}

                  {/* Zoom Preview Overlay button */}
                  {item.image && (
                    <button
                      onClick={() =>
                        setSelectedImage({
                          url: item.image,
                          title: item.role,
                        })
                      }
                      className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-2 backdrop-blur-[2px] z-10"
                    >
                      <ZoomIn className="w-4.5 h-4.5" /> View Photo
                    </button>
                  )}

                  {/* Cause Badge Overlay at Bottom Right */}
                  {item.cause && (
                    <div className="absolute bottom-3.5 right-3.5 bg-slate-900/90 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider flex items-center gap-1.5 border border-slate-700/60 z-20 pointer-events-none">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{item.cause}</span>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-7">
                  {/* Role Title */}
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-800 transition-colors duration-300 mb-3 leading-snug">
                    {item.role}
                  </h3>

                  {/* Organization */}
                  {item.organization && (
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-2">
                      <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{item.organization}</span>
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Footer Section: Date */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 group-hover:border-amber-200/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-600 transition-colors">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  <span>{item.date || "N/A"}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 group-hover:bg-amber-100/80 px-2.5 py-1 rounded-md transition-colors">
                  <UserCheck className="w-3 h-3 text-amber-600" /> Volunteer
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Photo Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
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

export default VoluntaryWorkBody;