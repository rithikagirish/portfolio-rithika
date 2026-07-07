import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureNode } from "@/data/deepshield";

interface ArchitectureDiagramProps {
  visual: ArchitectureNode[];
  audio: ArchitectureNode[];
  fusion: ArchitectureNode[];
}

const Node = ({ node, delay }: { node: ArchitectureNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="relative"
  >
    <div className="rounded-2xl border border-border bg-card/60 px-4 py-3 text-center">
      <p className="text-sm font-semibold text-foreground font-heading">{node.label}</p>
      <p className="text-xs text-muted-foreground mt-1">{node.detail}</p>
    </div>
    {/* Traveling signal pulse — loops to suggest data flowing through the pipeline */}
    <motion.span
      className="absolute inset-0 rounded-2xl border border-primary pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0] }}
      transition={{
        duration: 2.2,
        delay: delay + 0.6,
        repeat: Infinity,
        repeatDelay: 3.4,
        ease: "easeInOut",
      }}
    />
  </motion.div>
);

const Branch = ({
  title,
  nodes,
  baseDelay,
}: {
  title: string;
  nodes: ArchitectureNode[];
  baseDelay: number;
}) => (
  <div className="flex flex-col items-center gap-3 flex-1">
    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-heading">
      {title}
    </span>
    {nodes.map((node, i) => (
      <div key={node.id} className="flex flex-col items-center gap-3 w-full">
        <Node node={node} delay={baseDelay + i * 0.15} />
        {i < nodes.length - 1 && <ArrowDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </div>
    ))}
  </div>
);

const ArchitectureDiagram = ({ visual, audio, fusion }: ArchitectureDiagramProps) => {
  return (
    <div className="rounded-[2rem] border border-border bg-secondary/20 p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-6">
        <Branch title="Visual pipeline" nodes={visual} baseDelay={0} />

        {/* Divider / merge indicator between the two input branches */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-px h-full bg-border" />
        </div>

        <Branch title="Audio pipeline" nodes={audio} baseDelay={0.1} />
      </div>

      <div className="flex justify-center my-6">
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {fusion.map((node, i) => (
          <div key={node.id} className="flex items-center gap-3">
            <Node node={node} delay={0.3 + i * 0.15} />
            {i < fusion.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
