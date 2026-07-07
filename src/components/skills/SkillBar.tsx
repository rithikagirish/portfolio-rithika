import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const BAR_COUNT = 8;

const SkillBar = ({ skill, index }: SkillBarProps) => {
  const activeBars = Math.round((skill.level / 100) * BAR_COUNT);

  return (
    <div className="flex items-center justify-between gap-3 py-1.5 group">
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-heading">
        {skill.name}
      </span>
      <div className="flex items-end gap-[3px] shrink-0" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => {
          const isActive = i < activeBars;
          return (
            <motion.span
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.3,
                delay: index * 0.06 + i * 0.02,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`w-[3px] rounded-full origin-bottom ${
                isActive ? "bg-primary" : "bg-secondary"
              }`}
              style={{ height: `${6 + i * 2.5}px` }}
            />
          );
        })}
      </div>
      <span className="sr-only">{skill.level}% proficiency</span>
    </div>
  );
};

export default SkillBar;
