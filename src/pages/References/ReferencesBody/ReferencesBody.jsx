import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure"; 
import {
  UserCheck,
  PhoneCall,
  Mail,
  Building2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const ReferencesBody = () => {
  const axiosSecure = useAxiosSecure();
  const [copiedId, setCopiedId] = useState(null);

  const {
    data: referencesData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["references"],
    queryFn: async () => {
      const res = await axiosSecure.get("/references");
      return res.data;
    },
  });

  // Helper to generate initials from name if image is absent
  const getInitials = (name) => {
    if (!name) return "REF";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[parts.length - 2][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Copy email handler
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full bg-[#FAFAFC] py-16 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="relative pb-10 border-b border-slate-200/80 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Academic Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Academic References
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Distinguished academicians and institutional leaders available for credential validation and official scholarly inquiries.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="bg-white px-4 py-2 rounded-2xl text-xs font-mono font-bold text-slate-700 border border-slate-200/90 shadow-sm self-start md:self-auto flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-amber-600" />
          <span>Active References: {referencesData.length}</span>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm animate-pulse space-y-4"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl shrink-0" />
                <div className="space-y-3 flex-1">
                  <div className="h-6 bg-slate-100 rounded w-2/3" />
                  <div className="h-4 bg-slate-100 rounded w-1/2" />
                  <div className="h-4 bg-slate-100 rounded w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 text-sm max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>Failed to load references. {error?.message}</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && referencesData.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm max-w-3xl mx-auto shadow-sm">
          No reference records found.
        </div>
      )}

      {/* 2-Column Clean Cards Grid */}
      {!isLoading && !isError && referencesData.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {referencesData.map((ref) => (
            <div
              key={ref._id}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/5 overflow-hidden"
            >
              {/* Top Golden Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main Info Area */}
              <div>
                <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                  
                  {/* Avatar / Profile Photo */}
                  {ref.image ? (
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-slate-50 border-2 border-slate-200 group-hover:border-amber-400 transition-colors shrink-0 shadow-md">
                      <img
                        src={ref.image}
                        alt={ref.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-slate-900 text-amber-300 font-bold font-serif text-2xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      {getInitials(ref.name)}
                    </div>
                  )}

                  {/* Info Details */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-100/70 text-amber-900 border border-amber-200 uppercase tracking-wider mb-2">
                      Verified Reference
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 group-hover:text-amber-800 transition-colors duration-300 leading-snug">
                      {ref.name}
                    </h3>

                    {ref.designation && (
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                        {ref.designation}
                      </p>
                    )}

                    {ref.organization && (
                      <p className="text-xs sm:text-sm text-slate-500 mt-1.5 flex items-start gap-1.5 leading-relaxed">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{ref.organization}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Contact Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                
                {/* Direct Phone Call Button */}
                {ref.phone ? (
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-400 hover:text-slate-950 text-slate-700 border border-slate-200/80 hover:border-amber-400 font-mono font-semibold transition-all duration-300 group/phone"
                  >
                    <div className="p-1 rounded-md bg-white text-slate-500 group-hover/phone:text-slate-950 transition-colors">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                    <span>{ref.phone}</span>
                  </a>
                ) : (
                  <span className="text-slate-400 text-center py-2">No Phone</span>
                )}

                {/* Email Direct & Copy Button */}
                {ref.email ? (
                  <div className="flex-1 flex items-center gap-2">
                    <a
                      href={`mailto:${ref.email}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-400 hover:text-slate-950 text-slate-700 border border-slate-200/80 hover:border-amber-400 font-mono font-semibold truncate transition-all duration-300 group/email"
                      title={ref.email}
                    >
                      <div className="p-1 rounded-md bg-white text-slate-500 group-hover/email:text-slate-950 transition-colors shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{ref.email}</span>
                      <ExternalLink className="w-3 h-3 opacity-50 shrink-0" />
                    </a>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(ref.email, ref._id)}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-200 text-slate-600 border border-slate-200/80 transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copiedId === ref._id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ) : (
                  <span className="text-slate-400 text-center py-2">No Email</span>
                )}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReferencesBody;