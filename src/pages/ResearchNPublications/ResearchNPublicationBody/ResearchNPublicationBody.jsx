import React, { useState } from "react";
import {
  AlignLeft,
  ExternalLink,
  Quote,
  BookOpen,
  Hourglass,
  FileText,
  Compass,
} from "lucide-react";

const publicationsData = [
  {
    id: 1,
    title:
      "Impact of Islamic Microfinance Institutions (MFIs) on Rural Development in Bangladesh: A Systematic Literature Review",
    authors: "Faruk, M. O., Rashid, M. M., Khan, S., Tusher, I. H. (2026).",
    journal: "Journal of Islamic Business and Management (JIBM)",
    type: "Journal: JIBM",
    year: "2026",
    tag: "Systematic Review",
    category: "Published Works",
    readLink: "#",
    doiLink: "#",
    citeLink: "#",
  },
  {
    id: 2,
    title:
      "Navigating Sustainability: Assessing the Modal Imbalance in the Transportation System of Bangladesh",
    authors:
      "Faruk, M. O., Rashid, M. M., Rahman, M. A., Ratry, M. (2025).",
    journal: "JAFR (Journal of Applied Finance & Research)",
    type: "Journal: JAFR",
    year: "2025",
    tag: "Sustainability & Infrastructure",
    category: "Published Works",
    readLink: "#",
    doiLink: "#",
    citeLink: "#",
  },
  {
    id: 3,
    title:
      "Ecological Cost of Tourism: Addressing Plastic Pollution for a Sustainable Future",
    authors:
      "Faruk, M. O., Kabir, F., Talukder, M. B., Rashid, M. M. (2025).",
    journal: "Bentham Science Publishers",
    type: "Publisher: Bentham Science",
    year: "2025",
    tag: "Environmental Economics",
    category: "Published Works",
    readLink: "#",
    doiLink: "#",
    citeLink: "#",
  },
  {
    id: 4,
    title:
      "An overview of the economic situation of Bangladesh during the pandemic caused by COVID-19",
    authors: "Hossain, M. S., & Rashid, M. M. (2022).",
    journal: "European Journal of Business and Management (EJBM)",
    type: "Journal: EJBM",
    year: "2022",
    tag: "Macroeconomics & Crisis Policy",
    category: "Published Works",
    readLink: "#",
    doiLink: "#",
    citeLink: "#",
  },
];

const inProgressData = [
  {
    id: 5,
    title:
      "Article on Sharia-Compliant Microfinance as a Driver of Inclusive Rural Transformation",
    description:
      "Investigating institutional frameworks, risk-sharing paradigms, and socioeconomic mobility among rural borrowers under Islamic microfinance models in South Asia.",
    statusBadge: "Draft Completed / Under Review",
    typeBadge: "Working Paper",
    tag: "# Rural Inclusion & Islamic Banking",
    stage: "Under Peer Review",
    category: "In-Progress",
  },
  {
    id: 6,
    title:
      "Article on Blue Economy Strategies for Economic Resilience and Sustainability in Bangladesh",
    description:
      "Analyzing maritime commercial viability, coastal aquaculture financing instruments, and environmental preservation frameworks within the Bay of Bengal economic zone.",
    statusBadge: "Empirical Analysis in Progress",
    typeBadge: "Empirical Study",
    tag: "# Maritime Economics & Coastal Growth",
    stage: "Dataset Analysis Phase",
    category: "In-Progress",
  },
];

const ResearchNPublicationBody = () => {
  const [activeTab, setActiveTab] = useState("All");

  const totalCount = publicationsData.length + inProgressData.length;
  const publishedCount = publicationsData.length;
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

        {/* Filter Tabs matching top right pill control */}
        <div className="bg-slate-200/60 p-1 rounded-xl flex items-center gap-1 self-start md:self-auto border border-slate-200 shrink-0">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "All"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All <span className="opacity-75">({totalCount})</span>
          </button>
          <button
            onClick={() => setActiveTab("Published Works")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "Published Works"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Published Works <span className="opacity-75">({publishedCount})</span>
          </button>
          <button
            onClick={() => setActiveTab("In-Progress")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "In-Progress"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            In-Progress <span className="opacity-75">({inProgressCount})</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: PUBLISHED ARTICLES & BOOK CHAPTERS */}
      {showPublished && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              Published Refereed Articles & Book Chapters
            </h3>
          </div>

          <div className="space-y-5">
            {publicationsData.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                {/* Left Blue-Gray Accent Bar */}
                <div className="w-1.5 h-full bg-slate-800 absolute left-0 top-0 rounded-l-2xl group-hover:bg-amber-600 transition-colors" />

                {/* Card Top Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    Year: {item.year}
                  </span>
                  <span className="bg-amber-50 text-amber-800 border border-amber-200/80 text-[11px] font-medium px-3 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Publication Title */}
                <h4 className="text-lg sm:text-xl font-bold font-serif text-slate-900 hover:text-amber-700 transition-colors cursor-pointer mb-2 leading-snug">
                  {item.title}
                </h4>

                {/* Authors & Journal Details */}
                <p className="text-xs sm:text-sm text-slate-500 font-sans mb-5 leading-relaxed">
                  <span className="text-slate-700 font-medium">{item.authors}</span>{" "}
                  <span className="italic">{item.journal}.</span>
                </p>

                {/* Action Links Bar */}
                <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-slate-100 text-xs font-bold text-slate-600">
                  <a
                    href={item.readLink}
                    className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                  >
                    <AlignLeft className="w-3.5 h-3.5 text-slate-400" />
                    <span>Read Abstract</span>
                  </a>
                  <a
                    href={item.doiLink}
                    className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Journal / DOI</span>
                  </a>
                  <a
                    href={item.citeLink}
                    className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                  >
                    <Quote className="w-3.5 h-3.5 text-slate-400" />
                    <span>Cite (APA / BibTeX)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
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
                  {/* Status Headers */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-amber-100/80 border border-amber-300/80 text-amber-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                      {project.statusBadge}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {project.typeBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{project.tag}</span>
                  <span className="text-amber-800 font-semibold">{project.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ResearchNPublicationBody;