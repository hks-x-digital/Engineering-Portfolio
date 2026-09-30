import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030304] border-t border-white/10 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div className="space-y-1">
            <span className="font-display text-base font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Harsh K. Shah</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
            </span>
            <p className="text-zinc-500 text-xs font-mono-code">
              Information Systems Engineering · Humber Polytechnic · HPUES President
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code text-zinc-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <button onClick={onOpenResume} className="hover:text-amber-400 transition-colors cursor-pointer">
              Resume
            </button>
            <button onClick={onOpenTerminal} className="hover:text-emerald-400 transition-colors cursor-pointer">
              CLI
            </button>
            <a
              href={PERSONAL_INFO.googleDriveFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>Project Drive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-red-500 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Context note */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono-code text-zinc-500">
          <p>© {new Date().getFullYear()} Harsh K. Shah. All rights reserved.</p>
          <p>
            Co-op Availability: <span className="text-amber-400 font-bold">May 2027</span> · Greater Toronto Area & Remote
          </p>
        </div>

      </div>
    </footer>
  );
};
