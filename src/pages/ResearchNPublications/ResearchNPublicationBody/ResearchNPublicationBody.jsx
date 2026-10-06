import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import {
  AlignLeft,
  ExternalLink,
  BookOpen,
  Hourglass,
  Calendar,
  X,
  FileText,
  AlertCircle,
  ZoomIn,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// Static In-Progress Research Data
const inProgressData = [
  {
    id: "ip-1",
    title:
      "Article on Sharia-Compliant Microfinance as a Driver of Inclusive Rural Transformation",
    description:
      "Investigating institutional frameworks, risk-sharing paradigms, and socioeconomic mobility among rural borrowers under Islamic microfinance models in South Asia.",
    statusBadge: "Draft Completed / Under Review",
    typeBadge: "Working Paper",
    tag: "# Rural Inclusion & Islamic Banking",
    stage: "Under Peer Review",
  },
  {
    id: "ip-2",
    title:
      "Article on Blue Economy Strategies for Economic Resilience and Sustainability in Bangladesh",
    description:
      "Analyzing maritime commercial viability, coastal aquaculture financing instruments, and environmental preservation frameworks within the Bay of Bengal economic zone.",
    statusBadge: "Empirical Analysis in Progress",
    typeBadge: "Empirical Study",
    tag: "# Maritime Economics & Coastal Growth",
    stage: "Dataset Analysis Phase",
  },
];

const ResearchNPublicationBody = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedAbstract, setSelectedAbstract] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const axiosSecure = useAxiosSecure();

  // TanStack Query API Fetching
  const {
    data: publications = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["research-publications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/research");
      return res.data;
    },
  });

  const totalCount = publications.length + inProgressData.length;
  const publishedCount = publications.length;
  const inProgressCount = inProgressData.length;

  const showPublished = activeTab === "All" || activeTab === "Published Works";
  const showInProgress = activeTab === "All" || activeTab === "In-Progress";

  return (
    <div className="w-full bg-slate-50/50 py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1500px] mx-auto font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ==========================================
          HEADER SECTION (CLEAN & EYE-CATCHING)
      ========================================== */}
      <div className="relative bg-white rounded-3xl p-8 sm:p-10 mb-10 border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Peer-Reviewed Academic Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-slate-900">
              Research & Publications
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Exploring sustainable economics, Islamic finance, and policy transformations.
            </p>
          </div>

          {/* Interactive Pill Tabs */}
          <div className="bg-slate-100/80 p-1.5 rounded-2xl flex items-center gap-1 self-start md:self-auto border border-slate-200/60 shrink-0">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "All"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              All <span className="opacity-60 ml-1">({totalCount})</span>
            </button>
            <button
              onClick={() => setActiveTab("Published Works")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "Published Works"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              Published <span className="opacity-60 ml-1">({publishedCount})</span>
            </button>
            <button
              onClick={() => setActiveTab("In-Progress")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "In-Progress"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              In-Progress <span className="opacity-60 ml-1">({inProgressCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 1: PUBLISHED WORKS
      ========================================== */}
      {showPublished && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-emerald-100/80 text-emerald-800">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              Published Papers
            </h3>
          </div>

          {/* Skeleton Loader */}
          {isLoading && (
            <div className="space-y-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="bg-white p-6 rounded-2xl border border-slate-200 animate-pulse flex flex-col md:flex-row gap-6"
                >
                  <div className="w-full md:w-44 h-32 bg-slate-100 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-slate-100 rounded w-1/4" />
                    <div className="h-6 bg-slate-100 rounded w-3/4" />
                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>Failed to load publications. {error?.message}</span>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !isError && publications.length === 0 && (
            <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No published articles found.
            </div>
          )}

          {/* Publication List */}
          {!isLoading && !isError && publications.length > 0 && (
            <div className="space-y-5">
              {publications.map((paper) => {
                const year = paper.publicationDate
                  ? new Date(paper.publicationDate).getFullYear()
                  : "N/A";
                const authorsList = Array.isArray(paper.authors)
                  ? paper.authors.join(", ")
                  : paper.authors;

                return (
                  <div
                    key={paper._id}
                    className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start overflow-hidden"
                  >
                    {/* Visual Accent Line */}
                    <div className="w-1.5 h-full bg-emerald-600 absolute left-0 top-0 group-hover:bg-amber-500 transition-colors duration-300" />

                    {/* Image Preview Trigger */}
                    {paper.coverImage && (
                      <div
                        onClick={() =>
                          setSelectedImage({
                            url: paper.coverImage,
                            title: paper.title,
                          })
                        }
                        className="relative w-full md:w-44 h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 cursor-pointer group/img"
                      >
                        <img
                          src={paper.coverImage}
                          alt={paper.title}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white gap-1 text-xs font-bold backdrop-blur-[2px]">
                          <ZoomIn className="w-4 h-4 text-amber-300" />
                          <span>Preview</span>
                        </div>
                      </div>
                    )}

                    {/* Main Details */}
                    <div className="flex-1 w-full flex flex-col justify-between">
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-2.5">
                          <span className="bg-emerald-100 text-emerald-900 border border-emerald-200/80 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Journal Article
                          </span>
                          <span className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" /> {year}
                          </span>
                          {paper.journalName && (
                            <span className="text-xs font-semibold text-slate-500 italic">
                              {paper.journalName}
                            </span>
                          )}
                        </div>

                        {/* Article Title */}
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2">
                          {paper.title}
                        </h4>

                        {/* Authors */}
                        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                          <span className="font-semibold text-slate-800">Authors:</span>{" "}
                          {authorsList}
                        </p>
                      </div>

                      {/* Interactive Bottom Actions */}
                      <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs font-bold">
                        {paper.abstract && (
                          <button
                            onClick={() => setSelectedAbstract(paper)}
                            className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
                          >
                            <AlignLeft className="w-4 h-4 text-emerald-600" />
                            <span>Read Abstract</span>
                          </button>
                        )}

                        {paper.paperUrl && (
                          <a
                            href={paper.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-700 hover:text-amber-700 transition-colors ml-auto"
                          >
                            <span>View Full Paper</span>
                            <ArrowUpRight className="w-4 h-4 text-amber-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ==========================================
          SECTION 2: IN-PROGRESS PROJECTS
      ========================================== */}
      {showInProgress && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-amber-100/80 text-amber-800">
              <Hourglass className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              In-Progress Research
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inProgressData.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="w-1.5 h-full bg-amber-500 absolute left-0 top-0 group-hover:bg-emerald-600 transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {project.statusBadge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {project.typeBadge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{project.tag}</span>
                  <span className="text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/80">
                    {project.stage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==========================================
          ABSTRACT MODAL
      ========================================== */}
      {selectedAbstract && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-emerald-800">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Publication Abstract
                </span>
              </div>
              <button
                onClick={() => setSelectedAbstract(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto my-4 pr-1 space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                {selectedAbstract.title}
              </h3>
              <p className="text-xs text-slate-400">
                <span className="font-semibold text-slate-600">Journal:</span>{" "}
                {selectedAbstract.journalName || "N/A"}
              </p>
              <div className="pt-2 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                {selectedAbstract.abstract}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedAbstract(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
              {selectedAbstract.paperUrl && (
                <a
                  href={selectedAbstract.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>View Journal Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          IMAGE PREVIEW LIGHTBOX MODAL
      ========================================== */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl p-4 border border-slate-800 shadow-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black/40">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>

            {selectedImage.title && (
              <p className="mt-4 text-center text-xs sm:text-sm text-slate-300 font-serif max-w-xl px-4">
                {selectedImage.title}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchNPublicationBody;