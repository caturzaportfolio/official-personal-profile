import React from "react";
import { motion } from "motion/react";
import { ExternalLink, FolderGit2, ShieldCheck, Heart, CircleDollarSign } from "lucide-react";
import { ProjectItem } from "../types";

export default function Projects() {
  const projects: (ProjectItem & { icon: React.ReactNode; bgGradient: string })[] = [
    {
      id: "lgu",
      title: "Talibon LGU Website",
      description: "Official municipal website for Talibon, Bohol, delivering direct transparency, civic services, and public information for citizens.",
      tags: ["React", "TypeScript", "Tailwind", "Supabase"],
      viewLink: "https://github.com/caturzaportfolio",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      icon: <FolderGit2 className="w-6 h-6 text-indigo-600" />,
    },
    {
      id: "tagad",
      title: "TAGAD System",
      description: "Compliance and data management platform for Gender and Development programs under RA 9710, helping monitor critical local programs.",
      tags: ["React", "Vite", "Supabase", "PostgreSQL"],
      viewLink: "https://github.com/caturzaportfolio",
      bgGradient: "from-violet-500/10 to-fuchsia-500/10",
      icon: <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />,
    },
    {
      id: "responder",
      title: "Talibon Calamity Responder App",
      description: "Emergency reporting and response coordination app for the community of Talibon to assist citizens and local authorities during crises.",
      tags: ["React", "TypeScript", "Node.js"],
      viewLink: "https://github.com/caturzaportfolio",
      bgGradient: "from-red-500/10 to-orange-500/10",
      icon: <Heart className="w-6 h-6 text-red-500" />,
    },
    {
      id: "gastador",
      title: "GastadorPeso App",
      description: "Personal finance tracker with secure login, email OTP verification, financial insights dashboards, and transaction ledger datagrids.",
      tags: ["C#", ".NET", "MySQL"],
      viewLink: "https://github.com/caturzaportfolio",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      icon: <CircleDollarSign className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-baseline space-x-1 mb-16" id="projects-heading">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            Projects
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>

        {/* Project Card Grid (2 Columns on large, 1 on small) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          id="projects-grid"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-150 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#7C3AED]/20 transition-all duration-300 group"
              id={`project-card-${proj.id}`}
            >
              {/* Graphic Card Header with customized gradients & mock tech grid */}
              <div className={`h-40 bg-gradient-to-br ${proj.bgGradient} relative flex items-center justify-center border-b border-gray-100 overflow-hidden`}>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-25" />
                
                {/* Visual Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {proj.icon}
                </div>

                {/* Left vertical visual strip */}
                <div className="absolute left-6 top-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  SYSTEM PROTOTYPE
                </div>

                {/* Subtle light effect */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
              </div>

              {/* Card Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags and View Button */}
                <div>
                  {/* Tags List */}
                  <div className="flex flex-wrap gap-2 mb-6" id={`project-tags-${proj.id}`}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {proj.viewLink && (
                    <a
                      href={proj.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-bold text-[#0A0A0A] hover:text-[#7C3AED] transition-colors"
                      id={`project-link-${proj.id}`}
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
