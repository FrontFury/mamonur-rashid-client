import React from "react";
import { GraduationCap, Award, Sparkles, Building2, CheckCircle } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Master of Business Administration (MBA)",
    major: "Major in Finance & Banking",
    institution: "Daffodil Institute of IT",
    affiliation: "Affiliated with National University",
    year: "2017",
    badge: "Merit 1st in Bangladesh",
    scoreLabel: "Graduation CGPA",
    scoreValue: "3.98",
    maxScore: "4.00",
    isMerit: true,
  },
  {
    id: 2,
    degree: "Bachelor of Business Administration (BBA)",
    major: "Major in Finance & Banking",
    institution: "DCCI Business Institute",
    affiliation: "National University",
    year: "2016",
    badge: "Undergraduate",
    scoreLabel: "Graduation CGPA",
    scoreValue: "3.63",
    maxScore: "4.00",
    isMerit: false,
  },
  {
    id: 3,
    degree: "Higher Secondary Certificate (HSC)",
    major: "Business Studies",
    institution: "Dania University College",
    affiliation: "Dhaka Board",
    year: "2012",
    badge: "Higher Secondary",
    scoreLabel: "Exam GPA",
    scoreValue: "4.30",
    maxScore: "5.00",
    isMerit: false,
  },
  {
    id: 4,
    degree: "Secondary School Certificate (SSC)",
    major: "Business Studies",
    institution: "H.K Asmatunnessa High School",
    affiliation: "Cumilla Board",
    year: "2010",
    badge: "Secondary School",
    scoreLabel: "Exam GPA",
    scoreValue: "3.75",
    maxScore: "5.00",
    isMerit: false,
  },
];

const AcademicBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Dynamic Header Section */}
      <div className="relative pb-10 border-b border-slate-200/80 mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
          <span className="p-1.5 bg-amber-100 rounded-lg">
            <GraduationCap className="w-4 h-4 text-amber-700" />
          </span>
          <span>Educational Credentials & Distinction</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
          Academic Background
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
          Distinguished scholastic record spanning secondary, undergraduate, and post-graduate business administration degrees.
        </p>
      </div>

      {/* Responsive Card Grid with Dynamic Hover Glow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-2xl hover:bg-gradient-to-b hover:from-amber-500/10 hover:via-white hover:to-white hover:ring-8 hover:ring-amber-500/10 overflow-hidden"
          >
            {/* Top Glow Bar (Appears on Hover) */}
            <div className="absolute inset-x-8 -top-[2px] h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Top Header & Badges */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span
                  className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300 ${
                    item.isMerit
                      ? "bg-amber-100 text-amber-800 border border-amber-300/60 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-yellow-500 group-hover:text-white group-hover:shadow-md group-hover:border-transparent inline-flex items-center gap-1.5"
                      : "bg-slate-100 border border-slate-200 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800 group-hover:border-amber-300/60"
                  }`}
                >
                  {item.isMerit && <Sparkles className="w-3 h-3 text-amber-600 group-hover:text-white transition-colors" />}
                  <span>{item.badge}</span>
                </span>

                <span className="text-xs font-bold font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 group-hover:bg-white group-hover:text-slate-600">
                  {item.year}
                </span>
              </div>

              {/* Title & Major */}
              <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                {item.degree}
              </h3>
              
              <div className="inline-block bg-slate-100/80 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-4 group-hover:bg-white/80">
                {item.major}
              </div>

              {/* Institution Details */}
              <div className="space-y-1 text-xs text-slate-500 leading-relaxed mb-6">
                <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 group-hover:text-amber-600 transition-colors" />
                  {item.institution}
                </p>
                <p className="pl-5 text-slate-400 italic">
                  {item.affiliation}
                </p>
              </div>
            </div>

            {/* Bottom Result Box */}
            <div className="pt-4 border-t border-slate-100 group-hover:border-amber-200/80 flex items-center justify-between transition-colors">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-800/80">
                  {item.scoreLabel}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black font-sans text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.scoreValue}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    / {item.maxScore}
                  </span>
                </div>
              </div>

              {/* Right Icon Badge (Turns Gold on Hover) */}
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-700 transition-all duration-300">
                {item.isMerit ? (
                  <Award className="w-5 h-5" />
                ) : (
                  <CheckCircle className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AcademicBody;