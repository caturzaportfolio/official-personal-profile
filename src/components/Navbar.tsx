import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { NavSection } from "../types";

interface NavbarProps {
  activeSection: NavSection;
  onNavClick: (section: NavSection) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; id: NavSection }[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: NavSection) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100"
          : "bg-[#FAFAFA]/95 backdrop-blur-md py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="font-bold text-2xl text-[#0A0A0A] tracking-tight cursor-pointer hover:opacity-90 transition-opacity"
          id="nav-logo"
        >
          Felicito<span className="text-[#7C3AED]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className={`text-sm font-medium transition-all duration-200 relative py-1 hover:text-[#7C3AED] ${
                activeSection === item.id ? "text-[#7C3AED]" : "text-gray-500"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right side GitHub & Mobile toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/caturzaportfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#7C3AED] flex items-center justify-center text-gray-700 hover:text-[#7C3AED] hover:shadow-sm hover:scale-105 transition-all bg-white"
            aria-label="GitHub Portfolio"
            id="github-nav-btn"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-[#7C3AED] transition-colors bg-white hover:border-[#7C3AED]"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
            id="mobile-drawer"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-violet-50 text-[#7C3AED]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
