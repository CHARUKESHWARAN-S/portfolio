import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CONTACT_CARDS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'charukeshwarans11@gmail.com',
    href: 'mailto:charukeshwarans11@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 94454 01756',
    href: 'tel:+919445401756',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'charukeshwaran-suresh',
    href: 'https://linkedin.com/in/charukeshwaran-suresh-691323334',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'CHARUKESHWARAN-S',
    href: 'https://github.com/CHARUKESHWARAN-S',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Wire this up to your form backend of choice (Formspree, EmailJS, a serverless
    // function, etc). Simulated here so the interaction is demo-ready out of the box.
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="section-shell">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading mt-3"
      >
        Have an idea? Let's build it.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 max-w-2xl text-base leading-relaxed text-mist-300 light:text-ink-700"
      >
        I'm open to internships, roles, and collaborations in AI, ML, and Full-Stack
        Development. Drop a note — I reply fast.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              data-cursor-hover
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover group flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <card.icon size={19} />
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-mist-400">
                    {card.label}
                  </span>
                  <span className="block text-sm font-medium text-mist-100 light:text-ink-800">
                    {card.value}
                  </span>
                </span>
              </span>
              <FiArrowUpRight className="text-mist-400 transition-colors group-hover:text-brand" />
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card space-y-6 p-7"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="underline-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="underline-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist-400">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="What is it about?"
              className="underline-input"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-mist-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or project..."
              className="underline-input resize-none"
            />
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-4 pt-2 sm:flex-row">
            <span className="font-mono text-xs uppercase tracking-widest text-mist-400">
              Response within 24h
            </span>
            <button
              type="submit"
              disabled={status === 'sending'}
              data-cursor-hover
              className="btn-primary w-full sm:w-auto disabled:opacity-70"
            >
              {status === 'sent' ? (
                <><FiCheckCircle /> Message Sent</>
              ) : status === 'sending' ? (
                'Sending...'
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
