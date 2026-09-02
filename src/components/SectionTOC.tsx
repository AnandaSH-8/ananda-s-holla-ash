import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SectionTOC = () => {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6 pointer-events-none"
      }`}
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            aria-label={`Go to ${s.label} section`}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center justify-end gap-3"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "opacity-100 dark:text-blue-600 text-orange-500 translate-x-0"
                  : "opacity-0 group-hover:opacity-100 text-[#333]/70 dark:text-[#EDEDED]/70 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-orange-500 dark:bg-blue-500 dark:shadow-[0_0_10px_rgba(59,130,246,0.7)] shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                  : "w-2 h-2 bg-[#333]/30 dark:bg-[#EDEDED]/30 dark:group-hover:bg-blue-400 group-hover:bg-orange-400"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionTOC;
