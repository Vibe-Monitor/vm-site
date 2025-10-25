'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function CleanFooter() {
  const links = [
    { label: 'Support', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=support@vibemonitor.ai' },
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
          <div className="flex items-center">
            <Image
              src="/vibemonitor-logo.svg"
              alt="Vibemonitor.ai"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
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
