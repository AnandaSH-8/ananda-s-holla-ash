import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SectionReveal = ({ children, delay = 0, className }: SectionRevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;