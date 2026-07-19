import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { NavSection } from "../types";

interface HeroProps {
  onNavClick: (section: NavSection) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left column: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          id="hero-content"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-violet-50 border border-violet-100 px-4 py-2 rounded-full text-[#7C3AED] text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
            <span>Hey, I'm Felicito 👋</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.1] mb-6">
            Founder & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]">
              Developer
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-600 max-w-xl mb-10 leading-relaxed font-medium">
            I'm the founder and developer of{" "}
            <span className="text-[#0A0A0A] font-semibold">Alza</span>, building
            digital systems for local governments, businesses, and schools in the
            Philippines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavClick("contact")}
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#0A0A0A] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/10 flex items-center justify-center space-x-2 cursor-pointer"
              id="hero-cta-contact"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavClick("projects")}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1A1A1A] border border-gray-200 hover:border-[#7C3AED] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center justify-center cursor-pointer"
              id="hero-cta-projects"
            >
              Browse Projects
            </button>
          </div>
        </motion.div>

        {/* Right column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0"
          id="hero-image-container"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Background Accent Rings / Orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-[#7C3AED]/20"
            />
            
            {/* Main Purple Offset Orbit Ring */}
            <motion.div
              animate={{ 
                x: [0, 4, -4, 0],
                y: [0, -4, 4, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#7C3AED] translate-x-3 translate-y-3 pointer-events-none"
            />

            {/* Profile Image Frame */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
              <img
                src="/assets/felicito-photo.jpg"
                alt="Felicito Caturza Jr"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Small decorative accent dot on the ring */}
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] border-2 border-white shadow-md animate-ping" />
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] border-2 border-white shadow-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
