import React from 'react';
import { Award, BookOpen, Users, Layers, ShieldCheck, Check } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Biography: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#08080a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-600 mb-2">
            01. Background & Systems Engineering Focus
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance leading-tight">
            Information systems engineering student, society president, and embedded systems builder.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Hands-on experience in developing software, databases, and embedded systems, with a track record of academic excellence and student engineering leadership.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am currently in my 3rd year of the <strong className="text-white font-bold">Honours Bachelor of Engineering in Information Systems Engineering (Co-op)</strong> program at Humber Polytechnic. My technical coursework spans programming in Java, Python, C, and C++, database engineering in MySQL and MariaDB, embedded microcontroller platforms, and computer systems architecture.
            </p>

            <p>
              Throughout my degree, I have maintained <strong className="text-amber-400 font-semibold">Dean’s Honour Roll standing with an 86.2% CGPA</strong>. In 2026, I received the <strong className="text-white">Rockwell Leadership Award</strong> at Humber Polytechnic, following the <strong className="text-white">Barrett Foundation Entrance Scholarship</strong> in 2024.
            </p>

            <p>
              I serve as the elected <strong className="text-white">President of Humber’s Engineering Society (HPUES)</strong> for 2026–2027, leading initiatives for student engagement, long-term organizational stability, recruitment, sponsorships, and operational continuity. Previously, as Commissioner for Finance, Operations and Media, I ran four LinkedIn headshot events and career workshops in direct partnership with Humber’s Advising office.
            </p>

            <p>
              Beyond the classroom, I have supported enterprise technical operations as an <strong className="text-white">IT Help Desk Technician</strong> (resolving 500+ hardware, Windows, Microsoft 365, and connectivity inquiries), served as <strong className="text-white">Front Desk Representative</strong> for Humber Academic Advising & Career Services (2000+ inquiries), and directed multimedia productions as lead creator for <strong className="text-white">HKS Digital</strong>.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors">
                <Layers className="w-5 h-5 text-red-600 mb-2" />
                <h4 className="text-xs font-bold text-white font-mono-code uppercase">Software & Hardware</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-snug">
                  Integrating low-level firmware with databases and applications.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors">
                <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white font-mono-code uppercase">Rigorous Engineering</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-snug">
                  Applying EDLC methodology, UML design, CAD modeling, and test plans.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors">
                <Users className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white font-mono-code uppercase">Executive Leadership</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-snug">
                  Elected President of HPUES, leading team projects and student initiatives.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-zinc-400 font-mono-code">
              <span className="text-white font-semibold">Primary Goal:</span> Actively seeking a 12-month Software Engineering Co-op starting <span className="text-emerald-400 font-bold">May 2027</span>.
            </div>
          </div>

          {/* Academic & Awards Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Summary Card */}
            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-amber-400 border border-white/10">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight font-display">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono-code">{EDUCATION_DATA.period}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <p className="text-[11px] text-zinc-500 font-mono-code uppercase tracking-wider">Degree</p>
                  <p className="text-sm font-semibold text-zinc-200">{EDUCATION_DATA.degree}</p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-mono-code uppercase tracking-wider">Cumulative GPA</span>
                  <span className="font-mono-code text-amber-400 font-bold text-base tabular-nums">
                    {EDUCATION_DATA.cgpa}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[11px] text-zinc-500 font-mono-code uppercase tracking-wider">Academic Standing</span>
                  <p className="text-xs text-white font-medium mt-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dean’s Honour Roll (CGPA 86.2%)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Awards & Distinctions Card */}
            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-amber-400">
                <Award className="w-5 h-5" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono-code">
                  Honors & Awards
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.awards.map((award) => (
                  <div key={award.name} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{award.name}</h4>
                      <span className="text-xs font-mono-code text-amber-400 font-bold">{award.year}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {award.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
