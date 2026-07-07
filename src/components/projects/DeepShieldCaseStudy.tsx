import { motion } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import WaveText from "@/components/ui/wave-text";
import ArchitectureDiagram from "./ArchitectureDiagram";
import MetricCard from "./MetricCard";
import { deepShieldCaseStudy } from "@/data/deepshield";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const DeepShieldCaseStudy = () => {
  const {
    title,
    tagline,
    problemStatement,
    motivation,
    dataset,
    architecture,
    features,
    technologies,
    challenges,
    performance,
    futureImprovements,
    links,
  } = deepShieldCaseStudy;

  return (
    <section id="projects" className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">
            Featured Project
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            <WaveText text={title} />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-xl transition-colors font-heading"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl transition-colors hover:bg-secondary font-heading"
            >
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
            {links.paper && (
              <a
                href={links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-xl transition-colors hover:bg-secondary font-heading"
              >
                <FileText className="w-4 h-4" />
                Research Paper
              </a>
            )}
          </div>
        </motion.div>

        {/* Problem + Motivation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          <motion.div variants={fadeUp} className="p-6 rounded-[2rem] border border-border bg-card/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-heading">
              Problem Statement
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{problemStatement}</p>
          </motion.div>
          <motion.div variants={fadeUp} className="p-6 rounded-[2rem] border border-border bg-card/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-heading">
              Motivation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{motivation}</p>
          </motion.div>
        </motion.div>

        {/* Dataset */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10 p-6 rounded-[2rem] border border-border bg-card/50"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Dataset
          </h3>
          <ul className="space-y-2">
            {dataset.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Model Architecture
          </h3>
          <ArchitectureDiagram
            visual={architecture.visual}
            audio={architecture.audio}
            fusion={architecture.fusion}
          />
        </motion.div>

        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card/50"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground font-heading">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full font-heading"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-10 p-6 rounded-[2rem] border border-border bg-card/50"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Challenges
          </h3>
          <ul className="space-y-3">
            {challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Performance */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {performance.map((metric, i) => (
              <MetricCard key={metric.id} metric={metric} index={i} />
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="p-6 rounded-[2rem] border border-border bg-card/50"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-heading">
            Future Improvements
          </h3>
          <ul className="space-y-2">
            {futureImprovements.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DeepShieldCaseStudy;
