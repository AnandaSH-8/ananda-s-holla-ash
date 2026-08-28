import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const techStack: TechItem[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#8B8B8B" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#7A7A7A" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const TechOrb = ({
  tech,
  index,
  dimmed,
  onHoverChange,
}: {
  tech: TechItem;
  index: number;
  dimmed: boolean;
  onHoverChange: (name: string | null) => void;
}) => {
  // gentle wave offset per item
  const offset = [0, -14, 10, -6, 16, -12][index % 6];
  const duration = 4 + (index % 5) * 0.7;

  return (
    <motion.div
      className="flex shrink-0 flex-col items-center gap-3 px-6 md:px-9"
      style={{ marginTop: offset }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      onHoverStart={() => onHoverChange(tech.name)}
      onHoverEnd={() => onHoverChange(null)}
    >
      <motion.div
        whileHover={{ scale: 1.18 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative grid h-24 w-24 place-items-center rounded-full border border-border/70 bg-card/70 backdrop-blur-xl md:h-28 md:w-28"
        style={{
          opacity: dimmed ? 0.4 : 1,
          transition: "opacity 400ms ease",
          boxShadow: `0 8px 30px -12px ${tech.color}55`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-60"
          style={{
            background: `radial-gradient(circle at 30% 25%, ${tech.color}25, transparent 65%)`,
          }}
        />
        <tech.icon
          className="relative h-10 w-10 md:h-12 md:w-12"
          style={{ color: tech.color }}
        />
      </motion.div>
      <span className="text-xs font-medium tracking-wide text-muted-foreground md:text-sm">
        {tech.name}
      </span>
    </motion.div>
  );
};

const TechStack = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const loop = [...techStack, ...techStack];

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-4 py-24 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-5xl font-black text-transparent dark:from-orange-500 dark:via-red-500 dark:to-pink-500 md:text-6xl">
            Tech Stack
          </h2>
          <div className="mx-auto mb-8 h-2 w-32 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500" />
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            A living stream of the technologies I build with
          </p>
        </div>
      </div>

      {/* Flowing stream */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/60 bg-card/60 px-2 py-2 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-card to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-card to-transparent md:w-40" />

        <motion.div
          className="flex w-max items-center py-10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: hovered ? 90 : 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop.map((tech, i) => (
            <TechOrb
              key={`${tech.name}-${i}`}
              tech={tech}
              index={i}
              dimmed={hovered !== null && hovered !== tech.name}
              onHoverChange={setHovered}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
