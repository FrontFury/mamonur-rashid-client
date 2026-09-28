import React from "react";
import { Camera } from "lucide-react";

const galleryData = [
  {
    id: 1,
    title: "MBA Financial Management Lecture Series",
    category: "Pedagogy",
    description: "Interactive classroom discussions on corporate finance and valuation models.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Research Paper Defense & Faculty Review",
    category: "Academic Defense",
    description: "Colloquium with advisory board evaluating postgraduate financial research.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "DIIT Convocation & Graduation Ceremony",
    category: "Institutional",
    description: "Honoring top-ranking graduates and national merit award recipients.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "International Financial Inclusion Symposium",
    category: "Symposium",
    description: "Panel discussion on Islamic microfinance methodologies and economic empowerment.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Strategic Decision-Making Workshop",
    category: "Leadership",
    description: "Executive training session on managerial economics and risk framework analysis.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Central Academic Library Research Session",
    category: "Scholarship",
    description: "Guiding postgraduate students through empirical data collection and archives.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
  },
];

const GalleryBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200/80 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            <Camera className="w-3.5 h-3.5 text-slate-500" />
            <span>Institutional Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Campus Gallery & Events
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
            Photographic documentation of MBA advising sessions, faculty convocations, seminar defenses, and campus ceremonies.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-400 shrink-0">
          Curated Archives
        </div>
      </div>

      {/* 6-Card Image Grid (3 Columns x 2 Rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 cursor-pointer"
          >
            {/* Background Image with Zoom Effect on Hover */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Permanent Subtle Bottom Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/60 group-hover:to-black/30" />

            {/* Hover Text Container (Slides up and reveals content smoothly) */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 transition-transform duration-500 transform translate-y-3 group-hover:translate-y-0">
              
              {/* Category Pill Badge */}
              <div className="mb-2">
                <span className="inline-block bg-white/20 backdrop-blur-md text-amber-300 border border-white/30 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white leading-snug drop-shadow-sm">
                {item.title}
              </h3>

              {/* Description (Fades in smoothly on Hover) */}
              <p className="text-xs sm:text-sm text-slate-200 mt-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GalleryBody;