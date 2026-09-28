import React from "react";
import { HeartHandshake, MapPin } from "lucide-react";

const voluntaryData = [
  {
    id: 1,
    title: "Youth Financial Literacy & Basic Accounting Workshop",
    organization: "DIIT Social Action Cell",
    period: "2023 - Present",
    category: "Community Outreach",
    description:
      "Organizing pro-bono basic bookkeeping and micro-savings planning clinics for undergraduate youth and neighborhood micro-entrepreneurs.",
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", // Replace with your image asset
  },
  {
    id: 2,
    title: "Post-Flood Educational Aid & Textbook Distribution",
    organization: "Voluntary Academic Forum",
    period: "2022",
    category: "Relief & Welfare",
    description:
      "Mobilized student volunteers to supply curriculum books, stationery, and emergency stipend funds to flood-affected students in eastern regional districts.",
    location: "Sylhet & Cumilla Districts",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800", // Replace with your image asset
  },
  {
    id: 3,
    title: "Campus Voluntary Blood Donation & Health Camp",
    organization: "Red Crescent & DIIT Club",
    period: "Annual",
    category: "Health Drive",
    description:
      "Serving as institutional faculty coordinator facilitating campus blood donation drives, health awareness seminars, and emergency donor databases.",
    location: "DIIT Campus, Dhaka",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", // Replace with your image asset
  },
];

const VoluntaryWorkBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
          <HeartHandshake className="w-4 h-4 text-slate-500" />
          <span>Civic Engagement</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          CSR & Voluntary Work
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          Translating institutional resources and financial literacy into grassroots community welfare programs and youth mentorship.
        </p>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {voluntaryData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl hover:ring-4 hover:ring-amber-500/10"
          >
            <div>
              {/* Card Image Container with Overlay Category Badge */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Badge overlay at Top Left */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6">
                {/* Organization & Period */}
                <div className="text-xs font-bold text-amber-700 mb-2">
                  <span>{item.organization}</span>
                  <span className="mx-1 text-slate-300">|</span>
                  <span className="text-slate-400 font-medium">{item.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-amber-800 transition-colors duration-300 mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans mb-6">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Location Marker Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default VoluntaryWorkBody;