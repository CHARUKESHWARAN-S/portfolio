import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import facialRecognitionArt from '../assets/images/facial-recognition.png';
import gestureControlArt from '../assets/images/gesture-control.png';

const PROJECTS = [
  {
    id: '01',
    year: '2024',
    title: 'Real-Time Facial Recognition & Alerts',
    tagline: 'AI-powered surveillance with instant threat detection',
    description:
      'Developed an intelligent surveillance system capable of recognizing faces in real time using AI and Computer Vision. The application detects authorized and unauthorized individuals and instantly generates alerts, making it suitable for smart security systems.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    image: facialRecognitionArt,
    github: 'https://github.com/CHARUKESHWARAN-S',
  },
  {
    id: '02',
    year: '2024',
    title: 'Touchless Control via Dynamic Gesture Estimation',
    tagline: 'Hands-free control of media, mouse, volume & brightness',
    description:
      'Built an AI-powered touchless interaction system that enables users to control media playback, mouse functions, volume, and screen brightness using dynamic hand gestures without any physical contact.',
    tech: ['Python', 'OpenCV', 'Gesture Recognition', 'Computer Vision'],
    image: gestureControlArt,
    github: 'https://github.com/CHARUKESHWARAN-S',
  },
];

function ProjectRow({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const imageFirst = index % 2 === 0;

  const ImageTile = (
    <motion.div
      initial={{ opacity: 0, x: imageFirst ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.015 }}
      className="card relative flex h-72 items-center justify-center overflow-hidden sm:h-96"
      style={{ transition: 'transform 0.35s ease' }}
    >
      <img
        src={project.image}
        alt={`${project.title} — illustration`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );

  const TextBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageFirst ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-brand">
        Project {project.id}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-mist-50 sm:text-3xl light:text-ink-900">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-sm text-mist-400">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-mist-300 light:text-ink-700">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip py-1 text-xs">{t}</span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="btn-secondary !py-2.5 !px-5 text-sm"
        >
          <FiGithub /> GitHub
        </a>
        <span
          data-cursor-hover
          title="Live demo coming soon"
          className="btn-primary !py-2.5 !px-5 text-sm opacity-90"
        >
          Live Demo <FiArrowUpRight />
        </span>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {imageFirst ? (
        <>
          {ImageTile}
          {TextBlock}
        </>
      ) : (
        <>
          <div className="lg:order-2">{ImageTile}</div>
          <div className="lg:order-1">{TextBlock}</div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading mt-3"
      >
        Projects where AI meets the real world.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 light:text-ink-700"
      >
        Practical machine learning and computer vision systems — built to detect, react,
        and adapt.
      </motion.p>

      <div className="mt-14 space-y-20">
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
