import { motion, useReducedMotion } from "framer-motion";

const focusAreas = [
  "Scalable Systems",
  "Interactive Frontend",
  "Cloud Architecture",
  "API & Data Design",
];

const tech = [
  { name: "React", cls: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { name: "Next.js", cls: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { name: "Node", cls: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20" },
  { name: "More", cls: "text-muted-foreground bg-muted border-border italic" },
];

const About = () => {
  const reduce = useReducedMotion();

  const card = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-orange-400">
            01 — Who I am
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Intro */}
          <motion.div
            {...card(0)}
            className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-[2.5rem] border border-border bg-card/70 backdrop-blur-xl p-10 md:p-12 shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-orange-500/10 blur-3xl"
              aria-hidden="true"
            />
            <h3 className="relative font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Crafting the{" "}
              <span className="text-cyan-600 dark:text-orange-400">invisible architecture</span>
            </h3>
            <p className="relative text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
              I&apos;m a Full-Stack Developer who enjoys building scalable web applications and
              solving real-world problems through clean, maintainable software — across both
              frontend and backend.
            </p>
            <p className="relative text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I like learning new technologies, sharpening development workflows, and shipping
              solutions that balance performance, usability, and long-term maintainability.
            </p>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            {...card(0.08)}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 text-primary-foreground bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500 shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="font-display text-2xl font-bold">Focus Areas</h3>
            <ul className="space-y-4 font-medium">
              {focusAreas.map((item, i) => (
                <li
                  key={item}
                  className="flex justify-between items-center border-b border-white/25 pb-2"
                >
                  <span>{item}</span>
                  <span className="opacity-70 text-sm">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            {...card(0.16)}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 bg-gradient-to-br from-orange-400 to-orange-500 dark:from-blue-500 dark:to-indigo-600 text-primary-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
          >
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold">Experience</h3>
              <p className="font-medium opacity-85">
                Years of hands-on full-stack development, from API design to production delivery.
              </p>
            </div>
            <div className="font-display text-6xl font-bold tracking-tighter">3.6+</div>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            {...card(0.24)}
            className="col-span-12 lg:col-span-8 rounded-[2.5rem] border border-border bg-card/70 backdrop-blur-xl p-10 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-10 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex-1 space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                High-fidelity collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I thrive where design and engineering speak the same language — leading through
                code, clarity, and constant iteration, solo or in a team.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {tech.map((t) => (
                <div
                  key={t.name}
                  className={`h-24 w-full md:w-28 rounded-2xl flex items-center justify-center border font-bold text-sm ${t.cls}`}
                >
                  {t.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
