import { Code2, Briefcase, Brain, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 68 },
      { name: "C", level: 62 },
      { name: "SQL", level: 70 },
      { name: "MATLAB", level: 55 },
    ],
  },
  {
    id: "web",
    title: "Web & Frameworks",
    icon: Briefcase,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Flask", level: 78 },
      { name: "FastAPI", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML & NLP",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 78 },
      { name: "LLMs", level: 76 },
      { name: "NLP", level: 70 },
      { name: "Sentiment Analysis", level: 72 },
    ],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: 74 },
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Tkinter", level: 68 },
    ],
  },
];
