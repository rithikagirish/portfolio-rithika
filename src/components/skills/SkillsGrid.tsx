import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SkillBar from "./SkillBar";

const SkillsGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {skillCategories.map((category) => (
        <motion.div
          key={category.id}
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
          <div className="flex flex-col gap-4 p-5 rounded-[2rem] border border-border bg-card/50 h-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground font-heading">{category.title}</h3>
            </div>
            <div className="flex flex-col">
              {category.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
