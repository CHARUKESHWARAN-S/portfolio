import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/5 light:border-ink-900/10">
      <div className="section-shell !py-20">
        <h2 className="font-display text-4xl font-semibold leading-tight text-mist-50 sm:text-5xl light:text-ink-900">
          Thank you for<br />
          <span className="font-script text-brand">visiting</span> — let's connect.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 light:border-ink-900/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-mist-400">Reach</p>
            <p className="mt-3 text-sm text-mist-100 light:text-ink-800">
              charukeshwarans11@gmail.com
            </p>
            <p className="mt-1 text-sm text-mist-100 light:text-ink-800">+91 9445401756</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-mist-400">Follow</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/CHARUKESHWARAN-S"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/charukeshwaran-suresh-691323334"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:charukeshwarans11@gmail.com"
                aria-label="Email"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/10 light:text-ink-700"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-start sm:justify-end">
            <button
              onClick={scrollToTop}
              data-cursor-hover
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-mist-100 transition-colors hover:border-brand/50 hover:text-brand light:border-ink-900/15 light:text-ink-800"
            >
              Back to top <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist-400 sm:flex-row light:border-ink-900/10">
          <p>&copy; {year} CHARUKESHWARAN SURESH. All rights reserved.</p>
          <p>Designed &amp; built with care &middot; React &middot; Tailwind &middot; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
