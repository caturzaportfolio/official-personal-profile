export type NavSection = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  viewLink?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
