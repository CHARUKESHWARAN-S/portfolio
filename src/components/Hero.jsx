import { motion, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypedText } from '../hooks/useTypedText';
import profilePhoto from '../assets/images/profile.png';

const ROLES = [
  'Aspiring Data Scientist',

];

const STATS = [
  { value: 2, suffix: '+', label: 'Projects Built' },
  { value: 15, suffix: '+', label: 'Tech Stack' },
  { value: 4, suffix: '', label: 'Focus Areas' },
  { value: 8, suffix: '+', label: 'Certifications' },
];

function StatCounter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span className="font-display text-4xl font-semibold text-mist-50 sm:text-5xl light:text-ink-900">
      {display}
      <span className="text-brand">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const typed = useTypedText(ROLES);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="section-shell grid items-center gap-16 py-0 md:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-mist-100 light:border-ink-900/10 light:bg-ink-900/5 light:text-ink-800">
            <span className="dot-pulse h-2 w-2 rounded-full bg-brand text-brand" />
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist-50 sm:text-5xl lg:text-6xl light:text-ink-900">
            Charukeshwaran Suresh
          </h1>

          <div className="mt-4 flex h-8 items-center font-mono text-lg text-brand sm:text-xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-blink bg-brand" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg light:text-ink-700">
            AI &amp; Data Science graduate passionate about transforming data into meaningful insights using SQL, Python, Excel, and Power BI. I analyze data, create interactive dashboards, and uncover trends to support data-driven decision-making and solve real-world business problems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button onClick={() => scrollTo('projects')} data-cursor-hover className="btn-primary">
              View Projects <FiArrowUpRight />
            </button>
            <button onClick={() => scrollTo('contact')} data-cursor-hover className="btn-secondary">
              <FiMail /> Contact Me
            </button>
            <a href="/resume.pdf" download data-cursor-hover className="btn-text">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-mist-400">Follow</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/CHARUKESHWARAN-S"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://linkedin.com/in/charukeshwaran-suresh-691323334"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="mailto:charukeshwarans11@gmail.com"
                aria-label="Email"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Photo column — plain circular photo, thin ring, single floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex justify-center md:justify-end"
        >
          <div className="relative animate-float">
            <div className="photo-ring h-64 w-64 sm:h-80 sm:w-80">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src={profilePhoto}
                  alt="Charukeshwaran Suresh — profile photo"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={320}
                  height={320}
                />
              </div>
            </div>

            <div className="floating-badge -bottom-3 left-1/2 -translate-x-1/2">
              <span className="h-2 w-2 rounded-full bg-brand" />
              B.TECH &middot; AI &amp; DS
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div ref={statsRef} className="section-shell !pb-16 !pt-0 md:!pt-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-white/10 pt-5 light:border-ink-900/10"
            >
              <StatCounter value={stat.value} suffix={stat.suffix} inView={statsInView} />
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-mist-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
