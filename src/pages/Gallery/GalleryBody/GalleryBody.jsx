import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  Camera,
  Calendar,
  ZoomIn,
  X,
  AlertCircle,
  Tag,
  Grid,
  Filter,
} from "lucide-react";

const GalleryBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch gallery items from /gallery API endpoint
  const {
    data: galleryData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosSecure.get("/gallery");
      return res.data;
    },
  });

  // Extract unique categories for filter tabs
  const categories = useMemo(() => {
    const unique = new Set(galleryData.map((item) => item.category).filter(Boolean));
    return ["All", ...Array.from(unique)];
  }, [galleryData]);

  // Filter items based on active category
  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [galleryData, selectedCategory]);

  return (
    <div className="w-full bg-[#F8FAFC] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="relative pb-10 border-b border-slate-200/80 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <span className="p-1.5 bg-amber-100 rounded-lg">
              <Camera className="w-4 h-4 text-amber-700" />
            </span>
            <span>Institutional Life & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Campus Gallery & Events
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Photographic documentation of faculty seminars, academic defenses, civic engagements, and key institutional milestones.
          </p>
        </div>

        {/* Dynamic Items Counter */}
        <div className="bg-slate-200/60 px-4 py-2 rounded-full text-xs font-bold text-slate-700 border border-slate-200/80 self-start md:self-auto flex items-center gap-2">
          <Grid className="w-3.5 h-3.5 text-amber-600" />
          <span>Total Archives: {galleryData.length}</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      {!isLoading && !isError && categories.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 shrink-0 border ${
                selectedCategory === category
                  ? "bg-slate-900 text-amber-400 border-slate-900 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-72 sm:h-80 bg-slate-200 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load gallery items. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && filteredData.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto">
          No gallery images available for this category.
        </div>
      )}

      {/* 6-Card Responsive Grid (3 Columns) */}
      {!isLoading && !isError && filteredData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredData.map((item) => (
            <div
              key={item._id}
              onClick={() =>
                setSelectedImage({
                  url: item.image,
                  title: item.title,
                  date: item.date,
                  category: item.category,
                  description: item.description,
                })
              }
              className="group relative h-72 sm:h-80 lg:h-88 rounded-3xl overflow-hidden shadow-md border border-slate-200/90 cursor-pointer bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400"
            >
              {/* Background Image with Dynamic Scale */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                  <Camera className="w-12 h-12 opacity-30" />
                </div>
              )}

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Bar Badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                {/* Category Badge */}
                {item.category && (
                  <span className="bg-slate-900/80 backdrop-blur-md text-amber-300 border border-slate-700/60 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Tag className="w-3 h-3 text-amber-400" />
                    <span>{item.category}</span>
                  </span>
                )}

                {/* Zoom Icon Button */}
                <span className="p-2 bg-slate-900/60 backdrop-blur-md text-white rounded-xl border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-500 hover:text-slate-950">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Content Area (Slides up slightly on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                
                {/* Date Tag */}
                {item.date && (
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400/90 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white leading-snug drop-shadow-sm group-hover:text-amber-300 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description (Smooth Fade-in on Hover) */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-sans opacity-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Photo Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Container */}
            <div className="w-full max-h-[70vh] overflow-hidden rounded-2xl bg-slate-900 border border-slate-100 my-2 flex items-center justify-center relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[68vh] object-contain rounded-xl"
              />
            </div>

            {/* Modal Description Footer */}
            <div className="w-full mt-3 px-2 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900">
                  {selectedImage.title}
                </h4>
                {selectedImage.date && (
                  <span className="text-xs font-mono font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {selectedImage.date}
                  </span>
                )}
              </div>
              {selectedImage.description && (
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryBody;