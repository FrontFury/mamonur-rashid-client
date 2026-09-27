import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Award, GraduationCap } from "lucide-react";
import homeBgImage from "../../../assets/HomeBG.png";
import profileImg from "../../../assets/Profile01.png";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const Home = () => {
  return (
    <div className="w-full bg-[#F8FAFC] rounded-t-xl md:rounded-t-3xl text-zinc-800 font-['Playfair_Display',serif]">
      {/* ==========================================
          HERO / BANNER SECTION
      ========================================== */}
      <section
        className="relative min-h-[360px] md:min-h-[580px] bg-cover bg-center bg-no-repeat rounded-t-xl md:rounded-t-3xl overflow-hidden shadow-sm"
        style={{
          backgroundImage: `url(${homeBgImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-[1px]" />
      </section>

      {/* ==========================================
          BIOGRAPHY & PROFILE SECTION (EXTENDED WIDTH)
      ========================================== */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start font-sans">
            
            {/* Institution Affiliation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>Daffodil Institute of IT (Affiliated with National University)</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-2 font-serif">
              Md. Mamonur Rashid
            </h1>

            {/* Title / Role */}
            <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-600 mb-6 font-serif">
              Lecturer & Student Advisor (MBA Program), DIIT
            </p>

            {/* Professional Overview Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 w-full">
              Professional overview highlighting commitment to academic excellence, 
              advisory roles, and financial research. Dedicated to advancing finance, banking 
              methodologies, Islamic microfinance, and advising next-generation MBA 
              scholars.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <Link
                to="/research-publications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-slate-800 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors shadow-md"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download CV</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-700 hover:text-teal-700 font-medium text-xs sm:text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
              {/* Stat 1 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="block text-xl sm:text-2xl font-bold text-amber-600 mb-0.5">
                  1st
                </span>
                <span className="block text-xs text-slate-500 leading-snug">
                  National University Merit (MBA)
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="block text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
                  3.98
                </span>
                <span className="block text-xs text-slate-500 leading-snug">
                  CGPA / 4.00 (MBA Finance)
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="block text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
                  4+
                </span>
                <span className="block text-xs text-slate-500 leading-snug">
                  Peer-Reviewed Papers & Books
                </span>
              </div>

              {/* Stat 4 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="block text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
                  2021
                </span>
                <span className="block text-xs text-slate-500 leading-snug">
                  Lecturer & Advisor DIIT
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200/80">
              
              {/* Top Floating Merit Badge */}
              <div className="absolute -top-3 -right-2 z-20 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1 rounded-md text-xs font-semibold shadow-md flex items-center gap-1.5 font-sans">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>Merit 1st Position NU</span>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={profileImg}
                  alt="Md. Mamonur Rashid"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-top rounded-xl"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md text-white p-3.5 rounded-lg flex items-center justify-between border border-slate-700/50 shadow-md font-sans">
                  <div>
                    <h4 className="text-xs font-bold tracking-wide">
                      Md. Mamonur Rashid
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Faculty of Business Administration
                    </p>
                  </div>
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
              </div>

            </div>
          </div>

        </div>
        <PersonalInfo></PersonalInfo>
      </section>
    </div>
  );
};

export default Home;