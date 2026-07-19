import { Github, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#FAFAFA] border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top bar with logo and socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-gray-200/50">
          {/* Logo */}
          <div className="font-bold text-xl text-[#0A0A0A] tracking-tight" id="footer-logo">
            Felicito<span className="text-[#7C3AED]">.</span>
          </div>

          {/* Social Icons Links */}
          <div className="flex items-center space-x-4" id="footer-socials">
            <a
              href="https://github.com/caturzaportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7C3AED] hover:border-[#7C3AED] hover:bg-white transition-all hover:scale-105"
              aria-label="GitHub Portfolio"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/felicito-jr-caturza-b51b6538b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7C3AED] hover:border-[#7C3AED] hover:bg-white transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 text-xs text-gray-400 font-semibold">
          <p id="footer-copyright">
            &copy; {currentYear} Felicito Caturza Jr. All rights reserved. Built in Bohol, PH.
          </p>

          <button
            onClick={onScrollToTop}
            className="inline-flex items-center space-x-1.5 text-gray-500 hover:text-[#7C3AED] transition-colors cursor-pointer group"
            id="back-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
