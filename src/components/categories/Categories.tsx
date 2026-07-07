import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import WaveText from "@/components/ui/wave-text";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "AI Mental Wellness Chatbot",
    description: "Flask-based conversational AI using Meta-Llama via Groq API for emotion-aware support. Includes sentiment analysis, conversation memory, and adaptive responses tailored to emotional context.",
    tags: ["Flask", "LLMs", "Groq API", "NLP", "Sentiment Analysis"],
    href: "https://github.com/rithikagirish",
  },
  {
    title: "Deadlock & Banker's Simulator",
    description: "Interactive web application that visualizes resource allocation, safe states, and deadlock avoidance scenarios in real time. Demonstrates core operating-system concepts through simulation.",
    tags: ["React.js", "OS Concepts", "Algorithms", "Visualization"],
    href: "https://github.com/rithikagirish",
  },
];

const Projects = () => {
  return (
    <section id="other-projects" className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 font-heading">
          <WaveText text="Other projects" />
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <div className="group flex flex-col h-full rounded-[2rem] border border-border bg-card/50 overflow-hidden transition-colors hover:border-primary/30">
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground font-heading">{project.title}</h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full font-heading"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
