import React from "react";
import { Award, Trophy, Medal, Scroll } from "lucide-react";

const awardsData = [
  {
    id: 1,
    title: "National University Merit 1st Position",
    description:
      "Secured the premier 1st Merit Position across all participating affiliated colleges and institutes of the National University of Bangladesh in the Professional MBA examination cohort.",
    badge: "National Recognition",
    period: "Postgraduate",
    icon: Medal,
  },
  {
    id: 2,
    title: "Student of the Year - 2021",
    description:
      "Conferred by Daffodil Institute of IT (DIIT) in recognition of academic excellence, student leadership, and meritorious institutional engagement.",
    badge: "Institutional Award",
    period: "2021",
    icon: Trophy,
  },
  {
    id: 3,
    title: "GPA 4.00 / 4.00 Achievement",
    description:
      "Attained an impeccable 4.00 / 4.00 GPA in the 2nd Semester MBA Final Examination, demonstrating uncompromised consistency across all financial disciplines.",
    badge: "Academic Distinction",
    period: "Final Semester",
    icon: Medal,
  },
  {
    id: 4,
    title: "DCCI President Congratulation Letter",
    description:
      "Official Presidential Commendation Letter presented by the President of Dhaka Chamber of Commerce & Industry (DCCI) for exceptional academic and co-curricular performance in BBA.",
    badge: "Chamber Commendation",
    period: "Undergraduate",
    icon: Scroll,
  },
];

const HonorsNAwardsBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Section Header */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Academic Distinctions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          Honors & Awards
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          National and institutional commendations recognizing superior academic performance and pedagogical contribution.
        </p>
      </div>

      {/* 2x2 Responsive Grid with Dynamic Card Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {awardsData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:ring-4 hover:ring-amber-500/10 overflow-hidden"
            >
              {/* Top Row: Badge & Period */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-amber-100/90 group-hover:text-amber-900 group-hover:border-amber-300 transition-colors duration-300">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-500 transition-colors">
                    {item.period}
                  </span>
                </div>

                {/* Content Row with Left Icon Box */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Left Award Icon Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl shrink-0 flex items-center justify-center bg-slate-100 text-slate-500 group-hover:bg-amber-100/90 group-hover:text-amber-700 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-amber-800 transition-colors duration-300 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default HonorsNAwardsBody;