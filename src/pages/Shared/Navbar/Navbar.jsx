import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav items updated based on the exact image list
  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "research", label: "Research & Publications", path: "/research-publications" },
    { id: "experience", label: "Professional Experience", path: "/professional-experience" },
    { id: "development", label: "Professional Development", path: "/professional-development" },
    { id: "academics", label: "Academic", path: "/academic-background" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "awards", label: "Honors & Awards", path: "/honors-awards" },
    { id: "csr", label: "Voluntary Work", path: "/csr-voluntary-work" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "references", label: "References", path: "/references" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-50/95 backdrop-blur-sm text-slate-900 border-b border-slate-200 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* BRAND / NAME */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-slate-950 hover:text-teal-700 transition-colors duration-300"
            >
              <span>Md. Mamonur Rashid</span>
            </NavLink>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-sm overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => `
                  relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "text-teal-900 font-semibold bg-teal-100/70 border border-teal-200/60 shadow-inner"
                      : "text-slate-700 hover:text-teal-800 hover:bg-slate-100"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="p-2.5 rounded-lg text-slate-600 hover:text-teal-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-8 space-y-1.5 shadow-xl max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                block px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-teal-50 text-teal-900 font-semibold border border-teal-200/70"
                    : "text-slate-800 hover:bg-slate-100 hover:text-teal-800"
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;