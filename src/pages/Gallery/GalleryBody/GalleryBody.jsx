import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
} from "lucide-react";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

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
    const unique = new Set(
      galleryData.map((item) => item.category).filter(Boolean)
    );
    return ["All", ...Array.from(unique)];
  }, [galleryData]);

  // Filter items based on active category
  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [galleryData, selectedCategory]);

  return (
    <div className="w-full bg-slate-950/2 bg-gradient-to-b from-slate-50 via-amber-50/15 to-slate-50 py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800 relative overflow-hidden">
      
      {/* Decorative Ambient Background Orbs */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pb-10 border-b border-amber-200/40 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 mb-3 bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300/50 shadow-sm"
          >
            <Camera className="w-4 h-4 text-amber-700" />
            <span>Institutional Life & Moments</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-slate-900 via-amber-950 to-slate-800 bg-clip-text text-transparent tracking-tight">
            Campus Gallery & Events
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Photographic documentation of faculty seminars, academic defenses, civic engagements, and key institutional milestones.
          </p>
        </div>

        {/* Dynamic Items Counter */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-amber-900 border border-amber-200/80 shadow-sm self-start md:self-auto flex items-center gap-2"
        >
          <Grid className="w-3.5 h-3.5 text-amber-600" />
          <span>Total Archives: {galleryData.length}</span>
        </motion.div>
      </motion.div>

      {/* Interactive Category Filter Tabs with LayoutId Animation */}
      {!isLoading && !isError && categories.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-amber-600" /> Filter:
          </span>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-300 shrink-0 border ${
                  isActive
                    ? "text-amber-300 border-slate-900 shadow-md"
                    : "bg-white/80 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {/* Active Tab Sliding Pill Motion */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-slate-900 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {isActive && <Sparkles className="w-3 h-3 text-amber-400" />}
                  {category}
                </span>
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-72 sm:h-80 bg-slate-200/70 rounded-3xl animate-pulse shadow-sm border border-slate-200/60"
            />
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-red-50/90 backdrop-blur-md border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto shadow-sm"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load gallery items. {error?.message}</span>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && filteredData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-12 text-center bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto shadow-sm"
        >
          No gallery images available for this category.
        </motion.div>
      )}

      {/* Responsive Staggered Grid */}
      {!isLoading && !isError && filteredData.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item._id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                onClick={() =>
                  setSelectedImage({
                    url: item.image,
                    title: item.title,
                    date: item.date,
                    category: item.category,
                    description: item.description,
                  })
                }
                className="group relative h-72 sm:h-80 lg:h-88 rounded-3xl overflow-hidden shadow-md border border-slate-200/80 cursor-pointer bg-slate-950 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-400/80"
              >
                {/* Background Image with Scale Animation */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-600">
                    <Camera className="w-12 h-12 opacity-30" />
                  </div>
                )}

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Bar Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  {item.category && (
                    <span className="bg-slate-950/80 backdrop-blur-md text-amber-300 border border-slate-700/60 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{item.category}</span>
                    </span>
                  )}

                  {/* Zoom Preview Button */}
                  <span className="p-2 bg-slate-950/60 backdrop-blur-md text-white rounded-xl border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-400 hover:text-slate-950 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {item.date && (
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400/90 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white leading-snug drop-shadow-sm group-hover:text-amber-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-sans opacity-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox Photo Preview Modal with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white/95 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
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
                    <span className="text-xs font-mono font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {selectedImage.date}
                    </span>
                  )}
                </div>
                {selectedImage.description && (
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryBody;