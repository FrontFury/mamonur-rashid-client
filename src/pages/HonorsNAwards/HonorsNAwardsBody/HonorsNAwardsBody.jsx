import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import {
  Award,
  Trophy,
  Calendar,
  Building2,
  ExternalLink,
  ZoomIn,
  X,
  AlertCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const HonorsNAwardsBody = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch honors & awards from /honors API endpoint
  const {
    data: honorsData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["honors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/honors");
      return res.data;
    },
  });

  return (
    <div className="w-full bg-slate-950/2 bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-50 py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800 relative overflow-hidden">
      
      {/* Background Decorator Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none" />

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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-3 bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300/50 shadow-sm"
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>Academic & Professional Distinctions</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-slate-900 via-amber-950 to-slate-800 bg-clip-text text-transparent tracking-tight">
            Honors & Awards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            National and institutional commendations recognizing superior academic performance, highest CGPA achievements, and scholarly excellence.
          </p>
        </div>

        {/* Dynamic Count Badge */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-amber-900 border border-amber-200 shadow-sm self-start md:self-auto flex items-center gap-2"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-500" />
          <span>Total Honors: {honorsData.length}</span>
        </motion.div>
      </motion.div>

      {/* Loading Skeleton State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 animate-pulse space-y-4 shadow-sm"
            >
              <div className="h-48 bg-slate-200/70 rounded-2xl w-full" />
              <div className="h-6 bg-slate-200/70 rounded w-3/4 mt-4" />
              <div className="h-4 bg-slate-200/70 rounded w-1/2" />
              <div className="h-12 bg-slate-100/70 rounded w-full mt-6" />
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
          <span>Failed to load honors & awards data. {error?.message}</span>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && honorsData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-12 text-center bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto shadow-sm"
        >
          No honor or award records available at the moment.
        </motion.div>
      )}

      {/* 2-Column Responsive Grid with Stagger Motion */}
      {!isLoading && !isError && honorsData.length > 0 && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {honorsData.map((item) => {
            const isHighestCGPA = item.title?.toLowerCase().includes("cgpa") || item.description?.toLowerCase().includes("highest");

            return (
              <motion.div
                key={item._id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between transition-all duration-300 overflow-hidden"
              >
                {/* Dynamic Top Ambient Light Effect */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors duration-500 pointer-events-none" />

                <div>
                  {/* Image Banner / Certificate Thumbnail */}
                  {item.image ? (
                    <div
                      onClick={() =>
                        setSelectedImage({
                          url: item.image,
                          title: item.title,
                        })
                      }
                      className="relative h-48 sm:h-56 w-full mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer group/img"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold gap-2 backdrop-blur-[2px]">
                        <ZoomIn className="w-4 h-4" /> View Recognition Award
                      </div>
                    </div>
                  ) : (
                    <div className="h-28 w-full mb-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/60 flex items-center justify-center text-amber-700/60 group-hover:text-amber-700 transition-colors duration-300">
                      <Trophy className="w-12 h-12" />
                    </div>
                  )}

                  {/* Top Metadata Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    {item.associatedWith && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{item.associatedWith}</span>
                      </span>
                    )}

                    {isHighestCGPA && (
                      <motion.span 
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 px-3 py-1 rounded-full shadow-sm"
                      >
                        <Sparkles className="w-3 h-3 text-slate-900" /> Record CGPA
                      </motion.span>
                    )}
                  </div>

                  {/* Award Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 group-hover:text-amber-900 transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Issuer Info */}
                  {item.issuer && (
                    <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 mb-3">
                      <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Issued by: <strong className="text-slate-800">{item.issuer}</strong></span>
                    </p>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Footer Bar: Issue Date & Verification Link */}
                <div className="pt-4 border-t border-slate-100 group-hover:border-amber-200/80 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600/80" />
                    <span>{item.issueDate || "N/A"}</span>
                  </div>

                  {item.verificationUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-600 hover:text-white px-3.5 py-1.5 rounded-xl border border-amber-200/80 transition-all duration-200 shadow-sm"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Certificate Lightbox Modal with Smooth Framer Motion */}
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

export default HonorsNAwardsBody;