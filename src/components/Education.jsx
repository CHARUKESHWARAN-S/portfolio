import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="section-shell !py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card card-hover flex flex-col gap-5 p-8 sm:flex-row sm:items-center"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <FiAward size={26} />
        </span>
        <div>
          <p className="eyebrow">education</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-mist-50 light:text-ink-900">
            Bachelor of Technology — Artificial Intelligence &amp; Data Science
          </h3>
          <p className="mt-1 text-sm text-mist-300 light:text-ink-700">
            Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
          </p>
        </div>
      </motion.div>
    </section>
  );
}
