import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { ExperienceItem } from "@/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative pl-12 md:pl-16 ${isLast ? "" : "pb-10"}`}
    >
      {/* Year marker on the timeline spine */}
      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary bg-background text-[10px] md:text-xs font-semibold text-primary font-heading z-10">
        {item.year}
      </div>

      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="rounded-[2rem] border border-border bg-card/50 overflow-hidden transition-colors hover:border-primary/30">
          <CollapsibleTrigger className="w-full text-left p-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground font-heading mb-1">{item.role}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full font-heading">
                {item.period}
              </span>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.summary}</p>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300 ${
                open ? "rotate-180 text-primary" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="px-6 pb-6 pt-0 space-y-5 border-t border-border/60 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-heading">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-heading">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-heading">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-muted-foreground bg-secondary border border-border rounded-full font-heading"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 font-heading">
                  Skills Gained
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full font-heading"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </motion.div>
  );
};

export default TimelineItem;
