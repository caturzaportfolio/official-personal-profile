import { motion } from "motion/react";
import { Star, MapPin, Compass, Award } from "lucide-react";

export default function About() {
  const stackItems = [
    "Full-Stack Development",
    "UI/UX Design",
    "Civic Tech Focus",
    "Startup Leadership",
    "Problem Solving",
    "Fast Iteration",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-baseline space-x-1 mb-12" id="about-heading">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            About me
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>

        {/* Intro Highlight Quote */}
        <div 
          className="border-l-4 border-[#7C3AED] pl-6 md:pl-8 mb-16 max-w-4xl"
          id="about-intro"
        >
          <p className="text-xl md:text-2xl text-[#0A0A0A] font-semibold leading-relaxed">
            Building tools that solve real problems for real communities is what drives me — from LGU systems to civic apps, I give my all to every project.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch" id="about-grid">
          
          {/* Left Card: My Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            id="about-card-stack"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-[#7C3AED]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A]">My Stack.</h3>
              </div>
              <p className="text-gray-600 mb-8 font-medium">
                I specialize in full-cycle product engineering. I write robust clean code, design elegant intuitive interfaces, and manage startup roadmap goals.
              </p>
            </div>

            {/* Pill-shaped tags with small star icons */}
            <div className="flex flex-wrap gap-3">
              {stackItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full hover:border-[#7C3AED] hover:shadow-sm transition-all text-sm font-semibold text-[#0A0A0A]"
                >
                  <Star className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card: My Special Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1A1A1A] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-lg min-h-[380px]"
            id="about-card-location"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#7C3AED]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">My Special Place.</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm font-medium max-w-sm">
                Based in the paradise province of <span className="text-white font-semibold">Bohol, Philippines</span>. Empowering local communities through digital-first infrastructure.
              </p>
            </div>

            {/* Globe / Map SVG Graphic with glowing dot */}
            <div className="relative w-full h-48 md:h-52 bg-neutral-900/60 rounded-2xl border border-neutral-800 flex items-center justify-center overflow-hidden">
              {/* Minimalist SVG map outlines representing the Philippines */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full max-w-[220px] text-neutral-700 opacity-60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Luzon (North) */}
                <path d="M70,30 L95,20 L105,40 L95,80 L80,90 L65,70 L55,50 Z" />
                {/* Visayas (Middle - Bohol is in Visayas) */}
                <path d="M85,100 L110,95 L120,110 L105,125 L90,120 L80,105 Z" />
                <path d="M75,105 L65,115 L70,125 Z" /> {/* Panay/Negros */}
                {/* Mindanao (South) */}
                <path d="M85,135 L125,130 L135,150 L120,175 L95,165 L85,150 Z" />
                
                {/* Grid latitude lines */}
                <line x1="10" y1="50" x2="190" y2="50" stroke="#333333" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="#333333" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="10" y1="150" x2="190" y2="150" stroke="#333333" strokeWidth="0.5" strokeDasharray="3 3" />
              </svg>

              {/* Glowing Purple Marker for Bohol, Philippines (Approx Coordinates on center Visayas island) */}
              <div 
                className="absolute top-[108px] left-[102px] flex items-center justify-center pointer-events-none"
                id="bohol-glowing-dot"
              >
                {/* Animated Rings */}
                <div className="absolute w-6 h-6 rounded-full bg-[#7C3AED]/30 animate-ping" />
                <div className="absolute w-3.5 h-3.5 rounded-full bg-[#7C3AED]/60 animate-ping [animation-delay:0.3s]" />
                
                {/* Glowing Core Pin */}
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] border-2 border-white shadow-md relative z-10" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-neutral-800 text-[10px] font-bold text-white px-2 py-1 rounded flex items-center space-x-1 whitespace-nowrap shadow-md">
                  <MapPin className="w-2.5 h-2.5 text-[#7C3AED] fill-[#7C3AED]" />
                  <span>Bohol, PH</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
