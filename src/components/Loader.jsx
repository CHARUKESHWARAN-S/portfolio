import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen loader with a spinning accent ring — matches the
 * orange brand identity used throughout the rest of the site.
 */
export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex h-20 w-20 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-brand border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative font-display text-lg font-semibold text-mist-50">
              CS
            </span>
          </div>
          <motion.p
            className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-mist-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
