import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "./TimelineItem";
import type { ExperienceItem } from "@/data/experience";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static faint spine */}
      <div className="absolute left-4 md:left-5 top-1 bottom-1 w-0.5 bg-border" aria-hidden="true" />

      {/* Animated "signal" spine that grows as you scroll through the timeline */}
      <motion.div
        style={{ scaleY: spineScale }}
        className="absolute left-4 md:left-5 top-1 bottom-1 w-0.5 bg-primary origin-top"
        aria-hidden="true"
      />

      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} isLast={index === items.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
