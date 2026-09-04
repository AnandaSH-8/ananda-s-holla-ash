import { motion, useReducedMotion } from "framer-motion";
import { Layers, MonitorSmartphone, Cloud, Database } from "lucide-react";

const focusAreas = [
  {
    icon: Layers,
    title: "Scalable Systems",
    desc: "Architecting robust foundations that prioritize scalability and maintainable code.",
  },
  {
    icon: MonitorSmartphone,
    title: "Interactive Frontend",
    desc: "Crafting fluid, responsive interfaces with modern frameworks and performance focus.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Designing distributed cloud systems that grow effortlessly with demand.",
  },
  {
    icon: Database,
    title: "API & Data Design",
    desc: "Building secure APIs and data infrastructures for seamless integrity.",
  },
];

const About = () => {
  const reduce = useReducedMotion();

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading — consistent with other sections */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 heading-rule mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column — intro + experience stat */}
          <motion.div {...reveal(0)} className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Crafting the{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
                  invisible architecture
                </span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Full-Stack Developer who enjoys building scalable web applications and solving
                real-world problems through clean, maintainable software — across both frontend and backend.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I like learning new technologies, sharpening development workflows, and shipping solutions that
                balance performance, usability, and long-term maintainability.
              </p>
            </div>

            {/* Experience stat card — the only number in the section */}
            <div className="inline-flex items-center gap-5 p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-sm">
              <div className="flex flex-col">
                <span className="font-display text-5xl font-bold leading-none tracking-tighter text-blue-600 dark:text-orange-400">
                  3.6+
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  Years Experience
                </span>
              </div>
              <div className="h-12 w-px bg-border shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hands-on full-stack development, from API design to production delivery — leading through code,
                clarity, and constant iteration.
              </p>
            </div>
          </motion.div>

          {/* Right column — focus area cards (no index numbers) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...reveal(0.08 * (i + 1))}
                  className="group p-8 rounded-3xl border border-border bg-card/70 backdrop-blur-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-orange-500/40 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-orange-500/5"
                >
                  <div className="w-11 h-11 mb-6 rounded-xl bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center text-blue-600 dark:text-orange-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
