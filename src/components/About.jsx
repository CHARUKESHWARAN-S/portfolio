import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCpu, FiEye, FiCode, FiDatabase, FiTarget,
  FiUsers, FiBookOpen, FiHeart, FiActivity, FiLayers,
} from 'react-icons/fi';

const HIGHLIGHTS = [
  { icon: FiCpu, label: 'AI & Data Science Graduate' },
  { icon: FiActivity, label: 'Machine Learning Enthusiast' },
  { icon: FiEye, label: 'Computer Vision Developer' },
  { icon: FiCode, label: 'Python Developer' },
  { icon: FiLayers, label: 'React Developer' },
  { icon: FiDatabase, label: 'Data Analytics' },
  { icon: FiTarget, label: 'Problem Solver' },
  { icon: FiBookOpen, label: 'Continuous Learner' },
  { icon: FiUsers, label: 'Team Player' },
  { icon: FiHeart, label: 'Passion for Innovation' },
];

const QUICK_FACTS = [
  { label: 'Degree', value: 'B.Tech' },
  { label: 'Focus', value: 'AI & DS' },
  { label: 'Based', value: 'India' },
];

function Card({ icon: Icon, label, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.07 }}
      className="card card-hover flex items-center gap-3 px-5 py-4"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon size={18} />
      </span>
      <span className="text-sm font-medium text-mist-100 light:text-ink-800">{label}</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        about
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading mt-3"
      >
        Curious mind, engineered outputs.
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Intro card with quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card card-hover p-8"
        >
          <p className="text-base leading-relaxed text-mist-300 light:text-ink-700">
            I am an Artificial Intelligence and Data Science graduate passionate about
            building intelligent solutions using Machine Learning, Computer Vision, and Data
            Analytics. I enjoy solving real-world problems
            through AI-driven applications and continuously learning emerging technologies.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist-400">
            Seeking opportunities where I can contribute my technical skills while growing
            as a software and data professional.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 light:border-ink-900/10">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-mist-400">
                  {fact.label}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-mist-50 light:text-ink-900">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight chips */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <Card key={h.label} icon={h.icon} label={h.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
