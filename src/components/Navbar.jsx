import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999]">
      <div className="border-b border-white/5 bg-ink-900/70 backdrop-blur-xl light:bg-white/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Logo / mark */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            data-cursor-hover
            className="flex items-center gap-2 font-mono text-sm text-mist-100 light:text-ink-900"
          >
            <span className="font-display text-xl font-semibold text-mist-50 light:text-ink-900">
              CS
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-cursor-hover
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              data-cursor-hover
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-100 transition-colors hover:border-brand/50 hover:text-brand light:text-ink-800"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <a
              href="/resume.pdf"
              download
              data-cursor-hover
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:flex"
            >
              <FiDownload size={15} /> Resume
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              data-cursor-hover
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-100 md:hidden light:text-ink-800"
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-white/5 bg-ink-900/95 backdrop-blur-xl md:hidden light:bg-white/95"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="border-t border-white/5 first:border-t-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className={`block px-8 py-4 font-mono text-sm uppercase tracking-widest ${activeId === item.id ? 'text-brand' : 'text-mist-300 light:text-ink-700'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
