import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
} from "lucide-react";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

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
    <div className="w-full bg-slate-950/2 bg-gradient-to-b from-slate-50 via-amber-50/15 to-slate-50 py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800 relative overflow-hidden">
      
      {/* Decorative Ambient Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pb-10 border-b border-amber-200/40 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 mb-3 bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300/50 shadow-sm"
          >
            <HeartHandshake className="w-4 h-4 text-amber-600" />
            <span>Civic Engagement & CSR</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-slate-900 via-amber-950 to-slate-800 bg-clip-text text-transparent tracking-tight">
            Voluntary Work & Community
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Translating leadership skills and personal commitment into grassroots community welfare programs, disaster relief operations, and social impact initiatives.
          </p>
        </div>

        {/* Dynamic Counter Badge */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-amber-900 border border-amber-200/80 shadow-sm self-start md:self-auto flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Total Initiatives: {volunteerData.length}</span>
        </motion.div>
      </motion.div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/80 animate-pulse space-y-4 shadow-sm"
            >
              <div className="h-52 bg-slate-200/70 rounded-2xl w-full" />
              <div className="h-6 bg-slate-200/70 rounded w-3/4 mt-4" />
              <div className="h-4 bg-slate-200/70 rounded w-1/2" />
              <div className="h-16 bg-slate-100/70 rounded w-full mt-6" />
            </div>
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
          <span>Failed to load volunteering data. {error?.message}</span>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && volunteerData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-12 text-center bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto shadow-sm"
        >
          No volunteering activities found.
        </motion.div>
      )}

      {/* 3-Column Responsive Grid with Framer Motion Stagger */}
      {!isLoading && !isError && volunteerData.length > 0 && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {volunteerData.map((item) => (
            <motion.div
              key={item._id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Top Accent Ambient Glow Line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div>
                {/* Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 group/img">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100/50 flex items-center justify-center text-amber-600/60 group-hover:text-amber-600 transition-colors duration-300">
                      <Heart className="w-12 h-12" />
                    </div>
                  )}

                  {/* Zoom Preview Overlay Button */}
                  {item.image && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() =>
                        setSelectedImage({
                          url: item.image,
                          title: item.role,
                        })
                      }
                      className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-2 backdrop-blur-[2px] z-10 cursor-pointer"
                    >
                      <ZoomIn className="w-4 h-4" /> View Photo
                    </motion.button>
                  )}

                  {/* Cause Badge Overlay */}
                  {item.cause && (
                    <div className="absolute bottom-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider flex items-center gap-1.5 border border-slate-700/60 z-20 pointer-events-none">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{item.cause}</span>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-7">
                  {/* Role Title */}
                  <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-900 transition-colors duration-300 mb-3 leading-snug">
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
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3 font-sans">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Footer Section */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100/80 group-hover:border-amber-200/80 flex items-center justify-between text-xs font-mono text-slate-500 transition-colors">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600/80" />
                  <span>{item.date || "N/A"}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 group-hover:bg-amber-100/80 px-2.5 py-1 rounded-md transition-colors border border-amber-200/50">
                  <UserCheck className="w-3 h-3 text-amber-600" /> Volunteer
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Photo Preview Lightbox Modal with Animated Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white/95 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-2xl overflow-hidden flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl bg-slate-900/5 border border-slate-100 my-2 flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <h4 className="text-sm sm:text-base font-bold font-serif text-slate-900 text-center mt-2 px-6">
                {selectedImage.title}
              </h4>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoluntaryWorkBody;