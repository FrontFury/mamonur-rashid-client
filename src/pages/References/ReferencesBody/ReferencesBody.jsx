import React from "react";
import { UserCheck, Phone, Mail } from "lucide-react";

const referencesData = [
  {
    id: 1,
    initials: "SH",
    name: "Prof. Dr. Mohammed Shakhawat Hossain",
    designation: "Principal & Executive Director",
    institution: "Daffodil Group / Daffodil Institute of IT (DIIT)",
    tag: "Institutional Leadership",
    phone: "01713493160",
    email: "nup.principal@diit.info",
  },
  {
    id: 2,
    initials: "OF",
    name: "Dr. Mohammad Omar Faruq",
    designation: "Professor",
    institution: "Dept. of Accounting & Information Systems, Jagannath University",
    tag: "Research Collaborator & Faculty",
    phone: "01913883113",
    email: "omardu@ais.jnu.ac.bd",
  },
];

const ReferencesBody = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="pb-8 border-b border-slate-200/80 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
          <UserCheck className="w-4 h-4 text-slate-500" />
          <span>Scholarly Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
          Academic References
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5 max-w-2xl">
          Formal institutional and professorial endorsements available for academic verification and credential inquiries.
        </p>
      </div>

      {/* 2-Column Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {referencesData.map((ref) => (
          <div
            key={ref.id}
            className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl hover:ring-4 hover:ring-amber-500/10 overflow-hidden"
          >
            {/* Top Content Area */}
            <div>
              <div className="flex items-start gap-4 sm:gap-5 mb-6">
                
                {/* Glowing Avatar Box with Initials */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900 text-amber-300 font-bold font-serif text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-amber-400 group-hover:text-slate-900 group-hover:shadow-amber-500/20 transition-all duration-300">
                  {ref.initials}
                </div>

                {/* Name, Tag & Designation */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-amber-100/80 group-hover:text-amber-900 group-hover:border-amber-300 transition-colors duration-300 mb-1.5">
                    {ref.tag}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-amber-800 transition-colors duration-300 leading-snug">
                    {ref.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                    {ref.designation}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">
                    {ref.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Contact Section */}
            <div className="pt-5 border-t border-slate-100 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 font-mono">
              {/* Phone */}
              <a
                href={`tel:${ref.phone}`}
                className="inline-flex items-center gap-3 hover:text-amber-700 transition-colors w-fit group/link"
              >
                <div className="p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover/link:bg-amber-100 group-hover/link:text-amber-800 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{ref.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${ref.email}`}
                className="inline-flex items-center gap-3 hover:text-amber-700 transition-colors w-fit group/link"
              >
                <div className="p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover/link:bg-amber-100 group-hover/link:text-amber-800 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{ref.email}</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ReferencesBody;