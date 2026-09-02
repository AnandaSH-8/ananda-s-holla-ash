import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter, FaArrowRight } from "react-icons/fa6";

import profileImg from "@/assets/profile.png";
import LazyImage from "@/components/LazyImage";

const socials = [
  { label: "GitHub", href: "https://github.com/AnandaSH-8", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/ananda-s-holla", Icon: FaLinkedin },
  { label: "Email", href: "mailto:anandsholla8@gmail.com", Icon: FaEnvelope },
  { label: "X", href: "https://x.com/anandsholla8", Icon: FaXTwitter },
];

const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ananda_S_Holla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 py-28 md:py-32 overflow-hidden"
    >
      {/* Ambient atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-blue-500/10 dark:bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-400/10 dark:bg-red-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — content */}
        <div className="order-2 lg:order-1 space-y-10 text-center lg:text-left">
          <motion.div
            {...fade(0)}
            className="flex items-center justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-orange-400"
          >
            <span className="hidden lg:block w-8 h-px bg-blue-600 dark:bg-orange-400" />
            <span>Full-Stack Engineer</span>
          </motion.div>

          <motion.div {...fade(0.08)} className="relative">
            <span
              className="pointer-events-none absolute -top-4 -left-3 hidden lg:block w-12 h-12 border-t-2 border-l-2 border-orange-400/40 dark:border-blue-400/40"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse full name" : "Show full name"}
              className="group block w-full text-center lg:text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
            >
              <h1 className="font-display font-bold tracking-tighter leading-[0.85] text-foreground text-[clamp(4.5rem,14vw,10rem)]">
                A
                <span className="text-orange-500 dark:text-blue-400 transition-colors group-hover:text-orange-400 dark:group-hover:text-blue-300">
                  S
                </span>
                H
              </h1>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span
                    key="fullname"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0, y: -8 }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto", y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0, y: -8 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 240, damping: 26 }
                    }
                    className="block overflow-hidden"
                  >
                    <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-light italic tracking-tight text-blue-600 dark:text-orange-400 mt-4">
                      Ananda S Holla
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
              {!expanded && (
                <span className="block mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Tap to reveal full name
                </span>
              )}
            </button>
          </motion.div>

          <motion.p
            {...fade(0.16)}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            I design and build scalable web applications — robust backend services, fluid
            interfaces, and end-to-end solutions that hold up in the real world.
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-primary-foreground bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500 shadow-lg shadow-blue-500/20 dark:shadow-orange-500/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Work Together
              <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={downloadResume}
              className="rounded-full px-8 py-4 font-bold border border-border bg-card/60 backdrop-blur-md text-foreground transition-colors hover:bg-card"
            >
              Get Resume
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-full px-8 py-4 font-bold border border-border bg-transparent text-muted-foreground transition-colors hover:text-foreground hover:bg-card/50"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="flex items-center justify-center lg:justify-start gap-7"
          >
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`${label} profile`}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-cyan-600 dark:hover:text-orange-400"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative flex justify-center items-center"
        >
          <div
            className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-blue-500/25 to-orange-400/15 dark:from-orange-500/25 dark:to-blue-500/15 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative group">
            <div className="w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full p-4 border border-border bg-card/30 backdrop-blur-2xl shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500 dark:border-orange-500 relative">
                <LazyImage
                  src={profileImg}
                  alt="Ananda S Holla"
                  loading="eager"
                  wrapperClassName="w-full h-full rounded-full"
                  className="w-full h-full object-cover rounded-full saturate-[0.85] transition-all duration-700 group-hover:saturate-100 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 rounded-full border-4 border-orange-500 dark:border-blue-500 animate-glow-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-2 rounded-2xl px-6 py-3 shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500">
              <span className="font-display font-bold text-sm whitespace-nowrap text-primary-foreground">
                3.6 YEARS EXP
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
