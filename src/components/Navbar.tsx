import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Strict Single Element Wordmark with subtle gold accent */}
          <a
            href="#"
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Harsh K. Shah</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-700 inline-block" />
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-mono-code text-zinc-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-150 relative py-1 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code font-medium text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white rounded-lg border border-white/10 transition-colors whitespace-nowrap"
              title="Launch Recruiter Systems CLI"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>CLI</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm shadow-amber-500/20 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile buttons: Touch-friendly min 44px */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="min-w-[42px] min-h-[42px] flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
              aria-label="Toggle Terminal"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Touch-Optimized Slide-Down) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#050505]/98 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto z-50">
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold font-display text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-zinc-950 bg-amber-400 rounded-xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print Resume</span>
            </button>
            <a
              href={PERSONAL_INFO.googleDriveFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-code text-zinc-300 bg-zinc-900 rounded-xl border border-white/10 hover:bg-zinc-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Google Drive Project Folder</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
