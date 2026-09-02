import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      setScrolled(window.scrollY > 20);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const pillTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 400, damping: 32 };

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between gap-3 rounded-full px-3 py-2 border transition-all duration-300 ${
          scrolled
            ? 'bg-card/80 backdrop-blur-xl border-border shadow-lg shadow-black/10'
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <AnimatedLogo />
        </div>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center">

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={pillTransition}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 dark:from-blue-500 dark:to-blue-600 shadow-md shadow-orange-500/30 dark:shadow-blue-500/30"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Right side: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-card/70 backdrop-blur-xl border border-border shadow-lg shadow-black/5 text-foreground transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 mx-auto max-w-6xl rounded-3xl bg-card/80 backdrop-blur-xl border border-border shadow-xl shadow-black/10 p-3 flex flex-col gap-1"
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.04, duration: 0.2 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full text-left rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 dark:from-blue-500 dark:to-blue-600" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
