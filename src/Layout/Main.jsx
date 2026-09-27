import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Briefcase, 
  Library, 
  Landmark 
} from "lucide-react";
import Navbar from "../pages/Shared/Navbar/Navbar";

// =====================================================
// FLOATING ACADEMIC & RESEARCH ICONS CONFIGURATION
// =====================================================
const floatingAcademicIcons = [
  // Left Side Floating Stack
  { Icon: GraduationCap, top: "15%", left: "3%", size: 32, color: "#2563EB", delay: 0 },   // Blue Accent
  { Icon: BookOpen, top: "45%", left: "2%", size: 34, color: "#0D9488", delay: 1 },        // Teal Accent
  { Icon: TrendingUp, top: "75%", left: "3%", size: 32, color: "#059669", delay: 2 },      // Emerald Accent

  // Right Side Floating Stack
  { Icon: Award, top: "18%", right: "3%", size: 32, color: "#D97706", delay: 1.5 },       // Amber Gold
  { Icon: Briefcase, top: "50%", right: "2%", size: 32, color: "#4F46E5", delay: 0.8 },     // Indigo Accent
  { Icon: Library, top: "80%", right: "4%", size: 34, color: "#0284C7", delay: 1.8 },       // Sky Blue
];

const Main = () => {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-zinc-800 flex flex-col justify-between selection:bg-slate-800 selection:text-white font-['Playfair_Display',serif] overflow-hidden">
      
      {/* 1. Subtle Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* 2. Soft Academic Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-teal-100/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/30 rounded-full blur-[160px]" />
      </div>

      {/* 3. Floating Academic & Research Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingAcademicIcons.map((item, idx) => {
          const AcademicIcon = item.Icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0.3 }}
              animate={{
                y: [-12, 12, -12],
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 6 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              className="hidden lg:flex p-3.5 rounded-2xl bg-white/85 border border-slate-200/80 shadow-lg items-center justify-center backdrop-blur-md"
            >
              <AcademicIcon
                size={item.size}
                color={item.color}
                style={{ filter: `drop-shadow(0 2px 8px ${item.color}33)` }}
              />
            </motion.div>
          );
        })}
      </div>

      <Navbar />

      <main className="relative z-10 flex-grow w-11/12 mx-auto pt-20 sm:pt-24 pb-12">
        <Outlet />
      </main>

    </div>
  );
};

export default Main;