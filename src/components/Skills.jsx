import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiOpenjdk, SiJavascript, SiMysql,
  SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress,
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiOpencv,
  SiMongodb, SiGit, SiGithub, SiJupyter,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import {
  FiCode, FiGlobe, FiDatabase, FiTool, FiUsers,
  FiCpu, FiMessageCircle, FiTarget, FiClock,
} from 'react-icons/fi';
import { FaBrain, FaUsersCog } from 'react-icons/fa';

const CATEGORIES = [
  {
    title: 'Programming',
    headerIcon: FiCode,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: SiMysql },
    ],
  },
  {
    title: 'Web Development',
    headerIcon: FiGlobe,
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'AI & Data Science',
    headerIcon: FaBrain,
    skills: [
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Deep Learning', icon: FiCpu },
      { name: 'Computer Vision', icon: SiOpencv },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Scikit-Learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
    ],
  },
  {
    title: 'Database',
    headerIcon: FiDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    headerIcon: FiTool,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscCode },
      { name: 'Jupyter Notebook', icon: SiJupyter },
    ],
  },
  {
    title: 'Soft Skills',
    headerIcon: FiUsers,
    skills: [
      { name: 'Leadership', icon: FaUsersCog },
      { name: 'Communication', icon: FiMessageCircle },
      { name: 'Teamwork', icon: FiUsers },
      { name: 'Problem Solving', icon: FiTarget },
      { name: 'Critical Thinking', icon: FiCpu },
      { name: 'Time Management', icon: FiClock },
    ],
  },
];

function CategoryBlock({ category, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const HeaderIcon = category.headerIcon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="card card-hover p-6"
    >
      <div className="mb-5 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <HeaderIcon size={20} />
        </span>
        <span className="font-mono text-xs text-mist-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-mist-50 light:text-ink-900">
        {category.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill.name} className="chip py-1 text-xs">
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading mt-3"
      >
        Tools I use to build with precision.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 light:text-ink-700"
      >
        A layered toolkit spanning core programming, AI/ML, full-stack web, and the human
        skills that ship products.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category, i) => (
          <CategoryBlock key={category.title} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}
