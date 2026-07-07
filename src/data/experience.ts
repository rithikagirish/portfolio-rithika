export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  skillsGained: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "xdigics",
    year: "2025",
    role: "Software Development & AI Intern",
    company: "XDigics Technology Pvt. Ltd.",
    period: "Dec 2025 – Mar 2026",
    summary:
      "Shipped production React interfaces and an LLM-powered content pipeline in an Agile team.",
    responsibilities: [
      "Designed and built 5+ responsive React.js applications for internal and client-facing use",
      "Architected an LLM-powered content automation pipeline using the Groq API and Meta-Llama",
      "Participated in Agile sprints, code reviews, and Git-based collaborative workflows",
    ],
    technologies: ["React.js", "JavaScript", "Groq API", "Meta-Llama", "Git/GitHub", "REST APIs"],
    achievements: [
      "Improved frontend modularity by 45% across the app portfolio",
      "Cut manual content production work by 60% via automation",
    ],
    skillsGained: [
      "Prompt-driven pipeline design",
      "Component-level architecture",
      "Agile team workflows",
    ],
  },
  {
    id: "epiroc",
    year: "2025",
    role: "Python Development Intern",
    company: "Epiroc Innovation & Technology Centre India",
    period: "Jun 2025 – Jul 2025",
    summary:
      "Built a desktop tool automating high-volume XML operations for an internal engineering workflow.",
    responsibilities: [
      "Built an XML File Modifier automating 500+ daily operations",
      "Developed a Tkinter GUI covering upload, validation, editing, and export",
      "Handled malformed and edge-case XML input using ElementTree while preserving data integrity",
    ],
    technologies: ["Python", "Tkinter", "ElementTree", "XML"],
    achievements: ["Saved 6+ engineering hours per week through automation"],
    skillsGained: ["Desktop GUI development", "Robust file-format parsing", "Defensive edge-case handling"],
  },
];
