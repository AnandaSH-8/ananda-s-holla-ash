import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.6)]"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;