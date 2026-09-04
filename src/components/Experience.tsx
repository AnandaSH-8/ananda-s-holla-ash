import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

interface Role {
  title: string;
  timeline: string;
  bullets: string[];
  tech: string[];
}

const company = {
  name: "Sheshi Pvt. Ltd.",
  location: "Bengaluru, India",
  duration: "3.5+ Years",
};

const roles: Role[] = [
  {
    title: "Software Development Engineer - 2",
    timeline: "Apr 2025 – Apr 2026",
    bullets: [
      "Owned backend development of Admin and Organization modules with scalable, hierarchical data flows.",
      "Designed and shipped 40+ RESTful APIs with NestJS and PostgreSQL, defining request/response contracts with product.",
      "Built and maintained 30+ PostgreSQL databases — schema evolution, migrations and cross-entity synchronization.",
      "Automated template migration workflows through backend services and AWS Lambda.",
      "Optimized services with Redis caching, efficient SQL, indexing and DTO-based validation.",
    ],
    tech: ["NestJS", "PostgreSQL", "Redis", "AWS Lambda"],
  },
  {
    title: "Software Development Engineer",
    timeline: "Sep 2022 – Mar 2025",
    bullets: [
      "Developed responsive user interfaces with Vue.js, Vuetify, Vuex and Bootstrap.",
      "Built APIs with NestJS, Express, Node.js and PostgreSQL to support business workflows.",
      "Wrote complex SQL involving multi-table joins, transactions and reporting aggregation.",
      "Cut response times on data-intensive APIs through Redis caching and service tuning.",
    ],
    tech: ["Vue.js", "Vuex", "Node.js", "Express", "NestJS"],
  },
];

const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-background/70 to-warm-cream/60 dark:from-background/70 dark:to-charcoal/60 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 heading-rule mx-auto rounded-full" />
        </div>

        {/* Company header */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12 text-sm md:text-base">
          <span className="inline-flex items-center gap-2 font-semibold text-foreground">
            <Building2 className="h-4 w-4 text-blue-600 dark:text-orange-500" />
            {company.name}
          </span>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {company.location}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-700 dark:bg-orange-500/15 dark:text-orange-400">
            {company.duration}
          </span>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Spine */}
          <motion.div
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                className="relative group"
                initial={reduce ? false : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Dot */}
                <span className="absolute -left-8 md:-left-12 top-6 flex items-center justify-center">
                  <span className="block w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-orange-500 shadow-[0_0_12px_rgba(37,99,235,0.6)] dark:shadow-[0_0_14px_rgba(249,115,22,0.7)] transition-transform duration-300 group-hover:scale-125" />
                </span>

                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.45)] dark:hover:shadow-[0_16px_40px_-16px_rgba(249,115,22,0.5)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{role.title}</h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-orange-400">{role.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {role.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: 0.2 + bi * 0.08 }}
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-orange-500 dark:to-red-500" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/30 text-blue-700 bg-blue-500/5 dark:border-orange-500/30 dark:text-orange-300 dark:bg-orange-500/10 transition-transform duration-200 hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
