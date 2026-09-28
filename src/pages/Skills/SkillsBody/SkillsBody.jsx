import React from "react";
import { Wrench, Laptop, Landmark, Star, Zap, Clock, Lightbulb, Users } from "lucide-react";

const technicalSoftware = [
  {
    name: "Microsoft Office Suite (Word, Excel, PowerPoint)",
    level: "Expert",
    percentage: 95,
  },
  {
    name: "Smart Edu (SaaS Education ERP Platform)",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "Google Workspace & Digital Classroom",
    level: "Advanced",
    percentage: 85,
  },
];

const specializations = [
  "Advanced Research Methodology",
  "Financial Derivatives",
  "Project Management",
  "Working Capital Management",
  "Portfolio Management",
  "Cost Accounting",
];

const personalBehavioral = [
  {
    title: "Dynamic Leadership",
    icon: Zap,
  },
  {
    title: "Punctuality & Integrity",
    icon: Clock,
  },
  {
    title: "Creativity & Curricular Innovation",
    icon: Lightbulb,
  },
  {
    title: "Organizational Behavior & Empathy",
    icon: Users,
  },
];

const SkillsBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
          <Wrench className="w-3.5 h-3.5 text-slate-500" />
          <span>Domain Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          Skills 
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          Specialized finance frameworks, digital academic toolsets, and interpersonal leadership faculties.
        </p>
      </div>

      {/* 3-Column Equal Height Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Column 1: Technical & Software */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-700">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900 leading-tight">
                  Technical & Software
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Productivity & ERP Solutions
                </p>
              </div>
            </div>

            {/* Skills Progress List */}
            <div className="space-y-6">
              {technicalSoftware.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-semibold text-slate-800 leading-snug">
                      {item.name}
                    </span>
                    <span className="text-slate-400 font-medium shrink-0">
                      {item.level}
                    </span>
                  </div>
                  {/* Progress Bar Track */}
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-slate-900 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Specializations */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-700">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900 leading-tight">
                  Specializations
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Finance & Banking Disciplines
                </p>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-2.5">
              {specializations.map((tag, index) => (
                <span
                  key={index}
                  className="bg-slate-50 border border-slate-200/80 text-slate-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Personal & Behavioral */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            {/* Column Header */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 bg-amber-100/80 border border-amber-200 rounded-xl text-amber-800">
                <Star className="w-5 h-5 fill-amber-600/20" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900 leading-tight">
                  Personal & Behavioral
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Academic Leadership Qualities
                </p>
              </div>
            </div>

            {/* Light Box Cards List */}
            <div className="space-y-3">
              {personalBehavioral.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50/80 border border-slate-100 p-3.5 rounded-xl text-slate-800"
                  >
                    <IconComponent className="w-4 h-4 text-slate-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsBody;