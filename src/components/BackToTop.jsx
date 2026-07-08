import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          data-cursor-hover
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-[9996] flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 bg-ink-800/80 text-brand shadow-[0_8px_24px_rgba(168,85,247,0.25)] backdrop-blur-md md:bottom-8 md:right-8"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
