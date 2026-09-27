import React from "react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const academicTeaching = [
  {
    id: 1,
    title: "Lecturer",
    institution: "Daffodil Institute of IT, Dhaka",
    period: "Jan 2021 – Present",
    tag: "Faculty",
    tagColor: "bg-slate-100 text-slate-600 border-slate-200",
    dotColor: "bg-amber-600",
    description:
      "Teaching graduate & undergraduate courses in Finance, Portfolio Management, and Research Methodology. Designing outcome-based curricula, facilitating case study seminars, and supervising final semester research papers.",
  },
  {
    id: 2,
    title: "Academic Apprentice",
    institution: "Daffodil Institute of IT, Dhaka",
    period: "Jul 2020 – Dec 2020",
    tag: "Teaching Assistance",
    tagColor: "bg-slate-100 text-slate-600 border-slate-200",
    dotColor: "bg-slate-800",
    description:
      "Academic curriculum assistance, tutorial delivery, examination evaluation support, and direct mentoring for undergraduate foundational business cohorts.",
  },
];

const advisoryGovernance = [
  {
    id: 1,
    title: "Student Advisor, MBA Program",
    institution: "Department of Business Administration, DIIT",
    period: "Jul 2023 – Present",
    tag: "Appointed Advisor",
    tagColor: "bg-amber-100/80 text-amber-900 border-amber-300/80",
    dotColor: "bg-amber-600",
    description:
      "Mentoring postgraduate cohorts, academic roadmap planning, thesis guidance, resolution of student grievances, and liaison with the National University academic committee.",
  },
  {
    id: 2,
    title: "Junior Executive (Training & Development)",
    institution: "Dhaka Chamber of Commerce & Industry (DCCI)",
    period: "Nov 2017 – Mar 2018",
    tag: "Corporate Affairs",
    tagColor: "bg-slate-100 text-slate-600 border-slate-200",
    dotColor: "bg-slate-800",
    description:
      "Coordinating corporate management workshops, executive training program logistics, industry speaker liaison, and executive credentialing reporting.",
  },
];

const TeachingNExperience = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
          <Briefcase className="w-3.5 h-3.5 text-slate-500" />
          <span>Career Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          Continuous trajectory bridging tertiary academic instruction, university student advising, and corporate chamber administration.
        </p>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        
        {/* Column 1: Academic Appointments & Teaching */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-slate-900 text-white rounded-lg shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Academic Appointments & Teaching
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-200/80 ml-3.5 pl-6 space-y-8">
            {academicTeaching.map((item) => (
              <div key={item.id} className="relative">
                {/* Timeline Circle Dot */}
                <span
                  className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ring-1 ring-slate-200 ${item.dotColor}`}
                />

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  {/* Card Header Tag & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-amber-700">
                      {item.period}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-3 py-0.5 rounded-md border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h4 className="text-xl font-bold font-serif text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Advisory & Institutional Governance */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-slate-900 text-white rounded-lg shadow-sm">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Advisory & Institutional Governance
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-200/80 ml-3.5 pl-6 space-y-8">
            {advisoryGovernance.map((item) => (
              <div key={item.id} className="relative">
                {/* Timeline Circle Dot */}
                <span
                  className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ring-1 ring-slate-200 ${item.dotColor}`}
                />

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  {/* Card Header Tag & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-amber-700">
                      {item.period}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-3 py-0.5 rounded-md border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h4 className="text-xl font-bold font-serif text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeachingNExperience;