import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Mail,
  Award,
  GraduationCap,
  BookOpen,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";
import homeBgImage from "../../../assets/HomeBG.png";
import profileImg from "../../../assets/Profile01.png";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Home = () => {
  return (
    <div className="w-full bg-[#FDFBF7] rounded-t-xl md:rounded-t-3xl text-stone-800 font-['Playfair_Display',serif] selection:bg-emerald-200 selection:text-emerald-900">
      {/* ==========================================
          HERO / BANNER SECTION
      ========================================== */}
      <section
        className="relative h-[220px] sm:h-[320px] md:h-[400px] bg-cover bg-center bg-no-repeat rounded-t-xl md:rounded-t-3xl overflow-hidden shadow-sm"
        style={{
          backgroundImage: `url(${homeBgImage})`,
        }}
      >
        {/* Natural Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-emerald-950/20 to-stone-900/40 backdrop-blur-[0.5px]" />
      </section>

      {/* ==========================================
          BIOGRAPHY & PROFILE SECTION (NO NEGATIVE MARGIN OVERLAP)
      ========================================== */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start font-sans">
            {/* Institution Affiliation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] sm:text-xs font-semibold text-emerald-900 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
              <span className="truncate max-w-[280px] sm:max-w-none">
                Daffodil Institute of IT (Affiliated with National University)
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-2 font-serif">
              Md. Mamonur Rashid
            </h1>

            {/* Title / Role */}
            <p className="text-base sm:text-xl lg:text-2xl font-medium text-emerald-800 mb-4 font-serif">
              Lecturer & Student Advisor (MBA Program), DIIT
            </p>

            {/* Professional Overview Paragraph */}
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 w-full font-light">
              Passionate about bridging research and practice in business
              finance and sustainability reporting. Committed to generating and
              disseminating new knowledge, while guiding emerging business
              graduates and scholars toward academic and professional success.
            </p>

            {/* Social Media Bar */}
            <div className="w-full mb-6 p-2.5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5 px-1">
                <span className="text-xs font-bold text-amber-800/70 uppercase tracking-wider mr-1 hidden sm:inline-block shrink-0">
                  Connect:
                </span>

                <a
                  href="https://www.facebook.com/share/1J2VGWEGte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-[#1877F2] hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/md-mamonur-rashid-153972200?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-[#0A66C2] hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <IoLogoLinkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://scholar.google.com/citations?hl=en&user=x8nlXxcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google Scholar"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-amber-600 hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <BookOpen className="w-4 h-4" />
                </a>

                <a
                  href="https://www.researchgate.net/profile/Md-Mamonur-Rashid-4?ev=hdr_xprf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ResearchGate"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-emerald-600 hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <Share2 className="w-4 h-4" />
                </a>

                <a
                  href="https://orcid.org/0009-0003-5843-8785"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ORCID"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-lime-600 hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <Globe className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/8801858107075"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-emerald-500 hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="https://x.com/md_mamonurashid"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X (Twitter)"
                  className="p-2.5 rounded-xl bg-stone-100/80 text-stone-700 hover:bg-stone-900 hover:text-white active:scale-95 transition-all duration-300 shadow-sm shrink-0"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 mb-8">
              <Link
                to="/research-publications"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-emerald-900 hover:bg-emerald-800 text-amber-50 font-medium text-sm rounded-xl active:scale-[0.98] transition-all shadow-md"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
                <a
                  href="/Md_Mamonur_Rashid.pdf"
                  download
                  className="justify-center inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 font-medium text-xs sm:text-sm rounded-xl active:scale-[0.98] transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-emerald-700" />
                  <span>Download CV</span>
                </a>

                <Link
                  to="/contact"
                  className="justify-center inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-900 font-medium text-xs sm:text-sm rounded-xl active:scale-[0.98] transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-700" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
              <div className="bg-white p-3.5 rounded-xl border border-amber-200/60 shadow-sm">
                <span className="block text-lg sm:text-2xl font-bold text-amber-600 mb-0.5">
                  1st Merit
                </span>
                <span className="block text-[11px] sm:text-xs text-stone-500 leading-snug">
                  MBA Class of 2021, National University Bangladesh
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <span className="block text-lg sm:text-2xl font-bold text-emerald-900 mb-0.5">
                  3.98
                </span>
                <span className="block text-[11px] sm:text-xs text-stone-500 leading-snug">
                  CGPA / 4.00 (MBA Finance)
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <span className="block text-lg sm:text-2xl font-bold text-emerald-900 mb-0.5">
                  5+
                </span>
                <span className="block text-[11px] sm:text-xs text-stone-500 leading-snug">
                  Peer-Reviewed Papers & Books
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <span className="block text-lg sm:text-2xl font-bold text-emerald-900 mb-0.5">
                  2021 to till
                </span>
                <span className="block text-[11px] sm:text-xs text-stone-500 leading-snug">
                  Lecturer & Advisor DIIT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white p-3 rounded-2xl shadow-lg border border-stone-200">
              {/* Badge placed inside card container flow (no cut-off) */}
              <div className="flex justify-end mb-2">
                <div className="inline-flex items-center gap-1.5 bg-amber-500 border border-amber-300 text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm font-sans">
                  <Award className="w-3.5 h-3.5 text-amber-100" />
                  <span>Merit 1st Position NU</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={profileImg}
                  alt="Md. Mamonur Rashid"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-top rounded-xl"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 bg-emerald-950/90 backdrop-blur-md text-white p-3 rounded-xl flex items-center justify-between border border-emerald-700/40 shadow-md font-sans">
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-amber-200">
                      Md. Mamonur Rashid
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-emerald-100/80">
                      Faculty of Business Administration
                    </p>
                  </div>
                  <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PersonalInfo />
      </section>
    </div>
  );
};

export default Home;