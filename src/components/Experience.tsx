import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Calendar, Briefcase } from "lucide-react";
import { ExperienceItem } from "../types";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experiences: ExperienceItem[] = [
    {
      id: "alza",
      company: "Alza IT Solutions",
      role: "Founder & Developer",
      period: "2024 - Present",
      bullets: [
        "Founded and lead an early-stage startup building digital systems for LGUs, businesses, and schools in Bohol",
        "Led full-stack development of a government LGU website and a compliance/data management system for a municipal Gender and Development office",
        "Manage the technical roadmap end-to-end, from architecture decisions to deployment on Google Cloud Run",
      ],
    },
    {
      id: "calamity",
      company: "Talibon Calamity Responder App",
      role: "Developer — Civic Disaster Response Project",
      period: "2025 - Present",
      bullets: [
        "Building a calamity/disaster response app for the Community of Talibon to help coordinate emergency reporting and response",
        "Designed the system to support real-time incident reporting for residents and response tracking for local authorities",
        "Working directly with local stakeholders to align features with real on-the-ground emergency workflows",
      ],
    },
    {
      id: "gastador",
      company: "GastadorPeso App (School Project)",
      role: "Developer — School Project",
      period: "2024",
      bullets: [
        "Built a personal finance tracker desktop app in C# (.NET) with MySQL, featuring secure login and email OTP verification",
        "Designed a financial dashboard and transaction management system with data grid views",
        "Presented and defended the project, demonstrating full end-to-end application architecture",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-baseline space-x-1 mb-16" id="experience-heading">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            Experience
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>

        {/* Tab Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="experience-layout">
          
          {/* Left Sidebar: Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-2" id="experience-tabs-sidebar">
            {experiences.map((exp, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-between border cursor-pointer relative group ${
                    isActive
                      ? "bg-white border-gray-200 text-[#7C3AED] shadow-sm"
                      : "bg-transparent border-transparent text-gray-500 hover:text-[#0A0A0A] hover:bg-white/50"
                  }`}
                  id={`exp-tab-${exp.id}`}
                >
                  {/* Left Purple Border Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] rounded-l-xl"
                    />
                  )}
                  
                  <span className="truncate pr-4">{exp.company}</span>
                  <Briefcase className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-[#7C3AED]" : "text-gray-300 group-hover:text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Content Details */}
          <div 
            className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm min-h-[350px]"
            id="experience-panel"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A0A0A]">
                      {experiences[activeTab].role}
                    </h3>
                    <p className="text-[#7C3AED] font-semibold text-sm mt-1">
                      {experiences[activeTab].company}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-violet-50 text-[#7C3AED] px-4 py-2 rounded-full text-xs font-semibold self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{experiences[activeTab].period}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-4" id="experience-bullets">
                  {experiences[activeTab].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600 leading-relaxed font-medium">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-violet-50 flex items-center justify-center mt-1 text-[#7C3AED] border border-violet-100">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
