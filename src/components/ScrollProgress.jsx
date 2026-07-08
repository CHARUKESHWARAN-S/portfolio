import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gradient bar pinned to the top of the viewport that fills
 * as the user scrolls down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9997] h-[3px] origin-left bg-brand"
      style={{ scaleX }}
    />
  );
}
