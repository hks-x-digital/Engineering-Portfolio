import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Award, HeartHandshake, MapPin, Calendar } from 'lucide-react';
import { Experience } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredExperiences =
    filterType === 'all'
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((exp) => exp.type === filterType);

  const getTypeIcon = (type: Experience['type']) => {
    switch (type) {
      case 'leadership':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'work':
        return <Briefcase className="w-4 h-4 text-white" />;
      case 'volunteer':
        return <HeartHandshake className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#050505] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-600 mb-2">
              04. Executive Leadership & Professional Experience
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Community governance, IT enterprise support, and collaborative impact.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Proven track record of driving operational improvements, directing student engineering bodies, and supporting enterprise technical infrastructure.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-950 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full scrollbar-none">
            <button
              onClick={() => setFilterType('all')}
              className={`min-h-[40px] px-3.5 py-1.5 text-xs font-mono-code font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterType === 'all'
                  ? 'bg-white text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Experience
            </button>
            <button
              onClick={() => setFilterType('leadership')}
              className={`min-h-[40px] px-3.5 py-1.5 text-xs font-mono-code font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterType === 'leadership'
                  ? 'bg-amber-400 text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              HPUES Society
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`min-h-[40px] px-3.5 py-1.5 text-xs font-mono-code font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterType === 'work'
                  ? 'bg-white text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              IT & Advising
            </button>
            <button
              onClick={() => setFilterType('volunteer')}
              className={`min-h-[40px] px-3.5 py-1.5 text-xs font-mono-code font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filterType === 'volunteer'
                  ? 'bg-emerald-700 text-white font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-5">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-7 rounded-2xl bg-[#0b0b0e] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 shrink-0">
                    {getTypeIcon(exp.type)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono-code font-medium">{exp.organization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono-code text-zinc-400 sm:text-right">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight metrics */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono-code">
                  <span className="text-zinc-600 uppercase text-[10px]">Impact Focus:</span>
                  {exp.highlights.map((item, idx) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="text-white font-medium">{item}</span>
                      {idx < exp.highlights!.length - 1 && <span className="text-zinc-700">/</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
