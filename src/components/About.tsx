import { motion, useReducedMotion } from "framer-motion";

const focusAreas = ["Scalable Systems", "Interactive Frontend", "Cloud Architecture", "API & Data Design"];

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
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 heading-rule mx-auto rounded-full" />
        </div>

        {/* Intro */}
        <motion.div
          {...reveal(0)}
          className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-10 md:p-14"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Crafting the <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">invisible architecture</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I&apos;m a Full-Stack Developer who enjoys building scalable web applications and solving real-world
            problems through clean, maintainable software — across both frontend and backend.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I like learning new technologies, sharpening development workflows, and shipping solutions that balance
            performance, usability, and long-term maintainability.
          </p>
        </motion.div>

        {/* Focus areas */}
        <motion.div {...reveal(0.08)} className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-6">Focus Areas</p>
          <ul className="grid sm:grid-cols-2 gap-x-12">
            {focusAreas.map((item, i) => (
              <li key={item} className="group flex items-baseline gap-4 py-4 border-b border-border">
                <span className="font-display text-sm text-blue-600 dark:text-orange-400 tabular-nums">0{i + 1}</span>
                <span className="font-display text-lg font-medium text-foreground transition-colors group-hover:text-cyan-600 dark:group-hover:text-orange-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quiet stat line */}
        <motion.div {...reveal(0.16)} className="mt-14 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12">
          <div className="shrink-0">
            <div className="font-display text-5xl font-bold tracking-tighter text-blue-600 dark:text-orange-400">
              3.5+
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Years experience</p>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Hands-on full-stack development, from API design to production delivery. I thrive where design and
            engineering speak the same language — leading through code, clarity, and constant iteration, solo or in a
            team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
