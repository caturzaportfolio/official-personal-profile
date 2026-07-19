import React from "react";
import { Code, Layout, Server, Sliders } from "lucide-react";
import { SkillCategory } from "../types";

export default function Skills() {
  const categories: (SkillCategory & { icon: React.ReactNode })[] = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Next.js", "React Native", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "NestJS", "PostgreSQL", "Prisma ORM"],
    },
    {
      title: "Tools & Practices",
      icon: <Sliders className="w-5 h-5" />,
      skills: ["Git", "GitHub", "REST APIs", "JWT Authentication", "Vite"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-baseline space-x-1 mb-16" id="skills-heading">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            Skills
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>

        {/* Four-Column Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          id="skills-grid"
        >
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 hover:shadow-sm hover:border-[#7C3AED]/20 transition-all group"
              id={`skill-card-${index}`}
            >
              {/* Column Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-violet-50 text-[#7C3AED] flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-extrabold text-lg text-[#0A0A0A] tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Plain Text List below */}
              <ul className="space-y-3 pl-1" id={`skill-list-${index}`}>
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 hover:text-[#7C3AED] transition-colors font-medium text-sm flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#7C3AED]/50 transition-colors" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
