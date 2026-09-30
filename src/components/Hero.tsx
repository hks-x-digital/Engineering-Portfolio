import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  FolderGit2,
  Award,
  Cpu,
  GraduationCap,
  Upload,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [imageError, setImageError] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('hks_custom_avatar') || '/socailmedia.jpg';
  });

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAvatarSrc(result);
          setImageError(false);
          try {
            localStorage.setItem('hks_custom_avatar', result);
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-[#050505]">
      {/* Subtle ambient lighting with dark red, dark green & gold accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-950/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-950/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Hierarchy & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status / Availability Badge with Dark Green Accent */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-600/40 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono-code uppercase tracking-wider text-emerald-300 font-medium">
                12-Month Co-op · Starting May 2027
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Engineering software, databases, and embedded systems.
              </h1>
              <p className="text-base sm:text-lg text-amber-400 font-medium pt-1 font-display">
                Harsh K. Shah <span className="text-zinc-400 font-normal font-sans text-sm sm:text-base">· <strong className="text-white font-bold">Information Systems Engineering</strong></span>
              </p>
            </div>

            {/* Concise Mission / Bio directly from resume */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
              3rd year <strong className="text-white font-bold">Bachelor of Information Systems Engineering</strong> student at Humber Polytechnic (Dean’s Honour Roll · CGPA 86.2%) and elected <strong className="text-white font-bold">President of Humber’s Engineering Society (HPUES)</strong>. Hands-on experience developing software, relational databases, Arduino firmware, and embedded systems.
            </p>

            {/* Real Numbers from Resume with Gold, Dark Green, and Bold Dark Red Accents */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-3 pb-3 w-full max-w-lg border-y border-white/10">
              <div>
                <p className="font-mono-code text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">86.2%</p>
                <p className="text-xs text-zinc-400 mt-0.5">Dean’s Honour Roll</p>
              </div>
              <div>
                <p className="font-mono-code text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">95%</p>
                <p className="text-xs text-zinc-400 mt-0.5">Clock Project</p>
              </div>
              <div>
                <p className="font-mono-code text-xl sm:text-2xl font-bold text-red-600 tabular-nums">93%</p>
                <p className="text-xs text-zinc-400 mt-0.5">Software BUS Project</p>
              </div>
            </div>

            {/* Primary Action Buttons (Mobile-first, touch-friendly min 44px) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-mono-code font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-lg cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-red-700" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-mono-code font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-white/10 hover:border-red-600/50 hover:text-white transition-all cursor-pointer shadow-sm"
                title="Open Updated Curriculum Vitae (CV) & Resume"
              >
                <FileText className="w-4 h-4 text-red-600" />
                <span>Curriculum Vitae (CV)</span>
              </button>

              <a
                href={PERSONAL_INFO.googleDriveFolder}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-mono-code font-semibold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl border border-white/10 hover:border-amber-400/50 transition-all"
              >
                <FolderGit2 className="w-4 h-4 text-amber-400" />
                <span>Project Drive</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub: github.com/hks-x-digital"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 hover:text-amber-400 border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn: linkedin.com/in/hksdigital"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 hover:text-red-500 border border-white/10 transition-colors"
                aria-label="Email Harsh"
                title={`Email: ${PERSONAL_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 hover:text-emerald-400 border border-white/10 transition-colors"
                aria-label="Call Harsh"
                title={`Phone: ${PERSONAL_INFO.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <span className="text-xs text-zinc-500 font-mono-code pl-2 hidden sm:inline">
                {PERSONAL_INFO.location}
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Container & Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer gold, emerald & dark red hairline frame */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-amber-500/30 via-emerald-600/30 to-red-800/40 shadow-2xl">
                
                <div className="relative bg-[#0d0d10] rounded-[14px] overflow-hidden p-3">
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center group/photo">
                    {!imageError ? (
                      <img
                        src={avatarSrc}
                        alt="Harsh K. Shah - Software and Information Systems Engineer"
                        className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                        onError={() => setImageError(true)}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Styled editorial fallback avatar */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#121216] via-[#09090b] to-black relative">
                        <div className="w-24 h-24 rounded-full bg-zinc-900 border-2 border-amber-400/50 flex items-center justify-center mb-4 shadow-xl">
                          <span className="font-display text-3xl font-bold text-white tracking-wider">HKS</span>
                        </div>
                        <h3 className="text-lg font-bold text-white font-display">Harsh K. Shah</h3>
                        <p className="text-xs text-amber-400 mt-1 font-mono-code">Information Systems B.Eng.</p>
                        <p className="text-xs text-zinc-400 mt-2 max-w-xs">
                          Humber Polytechnic · Dean’s Honour Roll · HPUES President
                        </p>
                      </div>
                    )}

                    {/* Gradient scrim over photo bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/60 to-transparent pointer-events-none" />

                    {/* Photo upload button */}
                    <label className="absolute top-3 right-3 px-3 py-1.5 text-xs font-mono-code text-zinc-200 bg-black/80 hover:bg-black hover:text-amber-400 rounded-lg border border-white/20 cursor-pointer shadow-lg transition-all flex items-center gap-1.5">
                      <Upload className="w-3 h-3 text-amber-400" />
                      <span>{avatarSrc !== '/socailmedia.jpg' ? 'Change Photo' : 'Upload Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                      />
                    </label>

                    {/* Badge on Photo with Bold Dark Red dot */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono-code">
                      <span className="text-white font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-700 inline-block" />
                        Harsh K. Shah
                      </span>
                      <span className="text-amber-400 font-bold">HPUES President</span>
                    </div>
                  </div>

                  {/* Caption underneath photo frame */}
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code text-zinc-400 px-1">
                    <span>Humber Polytechnic · Co-op</span>
                    <span className="text-zinc-500">Graduating April 2029</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
