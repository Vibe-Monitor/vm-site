import { motion } from 'motion/react';
import { VibemonitorLogo } from './VibemonitorLogo';

export function CleanFooter() {
  const links = [
    { label: 'Docs', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer className="py-8 px-8" style={{ background: '#1E293B' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#6266FA] flex items-center justify-center">
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>V</span>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#E5E7EB' }}>
              Vibemonitor.ai
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{ fontSize: '13px', color: '#98A3B1', textDecoration: 'none' }}
                className="hover:text-[#E5E7EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ fontSize: '13px', color: '#98A3B1' }}>
            © 2025 Vibemonitor.ai
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
