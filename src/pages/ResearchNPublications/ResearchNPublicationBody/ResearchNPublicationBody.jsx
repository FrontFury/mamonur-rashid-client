import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  AlignLeft,
  ExternalLink,
  BookOpen,
  Hourglass,
  Compass,
  Calendar,
  X,
  FileText,
  AlertCircle,
  ZoomIn,
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
  const [selectedImage, setSelectedImage] = useState(null); // ইমেজ মোডালের স্টেট
  const axiosSecure = useAxiosSecure();

  // TanStack Query দিয়ে API থেকে ডাটা ফেচ
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
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      {/* Top Header & Filter Tab Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Peer-Reviewed Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Research & Publications
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
            Empirical and systematic inquiries in Islamic microfinance, transport sustainability, and macroeconomic crisis response.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-slate-200/60 p-1 rounded-xl flex items-center gap-1 self-start md:self-auto border border-slate-200 shrink-0">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "All"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All <span className="opacity-75">({totalCount})</span>
          </button>
          <button
            onClick={() => setActiveTab("Published Works")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "Published Works"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Published Works <span className="opacity-75">({publishedCount})</span>
          </button>
          <button
            onClick={() => setActiveTab("In-Progress")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "In-Progress"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            In-Progress <span className="opacity-75">({inProgressCount})</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: PUBLISHED ARTICLES (API Data) */}
      {showPublished && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              Published Refereed Articles & Book Chapters
            </h3>
          </div>

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="space-y-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="bg-white p-6 rounded-2xl border border-slate-200 animate-pulse flex flex-col md:flex-row gap-6"
                >
                  <div className="w-full md:w-48 h-32 bg-slate-200 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-1/4" />
                    <div className="h-6 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>Failed to load publications. {error?.message}</span>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !isError && publications.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No published articles found.
            </div>
          )}

          {/* Publications List */}
          {!isLoading && !isError && publications.length > 0 && (
            <div className="space-y-6">
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
                    className="relative bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col md:flex-row gap-6 items-start"
                  >
                    {/* Left Accent Bar */}
                    <div className="w-1.5 h-full bg-slate-800 absolute left-0 top-0 rounded-l-2xl group-hover:bg-amber-600 transition-colors" />

                    {/* Cover Image (Clickable for Modal) */}
                    {paper.coverImage && (
                      <div
                        onClick={() =>
                          setSelectedImage({
                            url: paper.coverImage,
                            title: paper.title,
                          })
                        }
                        className="relative w-full md:w-44 h-36 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 self-center md:self-start cursor-pointer group/img"
                      >
                        <img
                          src={paper.coverImage}
                          alt={paper.title}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                        />
                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-1.5 text-xs font-semibold">
                          <ZoomIn className="w-4 h-4" />
                          <span>View Image</span>
                        </div>
                      </div>
                    )}

                    {/* Paper Content */}
                    <div className="flex-1 w-full flex flex-col justify-between">
                      <div>
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Journal
                          </span>
                          <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {year}
                          </span>
                          {paper.journalName && (
                            <span className="bg-amber-50 text-amber-800 border border-amber-200/80 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                              {paper.journalName}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-slate-900 hover:text-amber-700 transition-colors leading-snug mb-2">
                          {paper.title}
                        </h4>

                        {/* Authors */}
                        <p className="text-xs sm:text-sm text-slate-600 font-sans mb-4 leading-relaxed">
                          <span className="font-semibold text-slate-700">Authors:</span>{" "}
                          {authorsList}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-600">
                        {paper.abstract && (
                          <button
                            onClick={() => setSelectedAbstract(paper)}
                            className="inline-flex items-center gap-1.5 hover:text-amber-700 transition-colors cursor-pointer"
                          >
                            <AlignLeft className="w-3.5 h-3.5 text-slate-400" />
                            <span>Read Abstract</span>
                          </button>
                        )}

                        {paper.paperUrl && (
                          <a
                            href={paper.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-amber-700 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                            <span>View Journal / DOI</span>
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

      {/* SECTION 2: CURRENT IN-PROGRESS RESEARCH PROJECTS */}
      {showInProgress && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Hourglass className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              Current In-Progress Research Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-amber-100/80 border border-amber-300/80 text-amber-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                      {project.statusBadge}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {project.typeBadge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{project.tag}</span>
                  <span className="text-amber-800 font-semibold">{project.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1. ABSTRACT MODAL */}
      {selectedAbstract && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-amber-700">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Abstract Overview
                </span>
              </div>
              <button
                onClick={() => setSelectedAbstract(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto my-4 pr-1 space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                {selectedAbstract.title}
              </h3>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Journal:</span>{" "}
                {selectedAbstract.journalName} |{" "}
                <span className="font-semibold text-slate-700">Published:</span>{" "}
                {selectedAbstract.publicationDate}
              </p>
              <div className="pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedAbstract.abstract}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedAbstract(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
              {selectedAbstract.paperUrl && (
                <a
                  href={selectedAbstract.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Full Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. IMAGE PREVIEW LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()} // মোডালের ভেতর ক্লিক করলে যাতে বন্ধ না হয়ে যায়
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl p-3 sm:p-4 border border-slate-800 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Preview */}
            <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black/40">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>

            {/* Caption */}
            {selectedImage.title && (
              <p className="mt-3 text-center text-xs sm:text-sm text-slate-300 font-serif max-w-xl px-4">
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