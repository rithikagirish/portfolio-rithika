import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import type { PerformanceMetric } from "@/data/deepshield";

interface MetricCardProps {
  metric: PerformanceMetric;
  index: number;
}

const MetricCard = ({ metric, index }: MetricCardProps) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView || !numberRef.current) return;

    const controls = animate(0, metric.value, {
      duration: 1.2,
      delay: index * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(value) {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [isInView, metric.value, index]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex flex-col items-center justify-center gap-1 p-6 rounded-[2rem] border border-border bg-card/50 text-center"
    >
      <div className="flex items-baseline gap-0.5 font-heading">
        <span ref={numberRef} className="text-3xl md:text-4xl font-bold text-primary">
          0
        </span>
        <span className="text-xl font-bold text-primary">{metric.suffix}</span>
      </div>
      <span className="text-xs text-muted-foreground font-heading">{metric.label}</span>
      {metric.isEstimate && (
        <span className="text-[10px] text-muted-foreground/60 italic mt-1">reported estimate</span>
      )}
    </motion.div>
  );
};

export default MetricCard;
