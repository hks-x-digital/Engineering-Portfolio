import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Cpu, Database, Cloud, DraftingCompass, BrainCircuit, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4" />;
      case 1:
        return <Cpu className="w-4 h-4" />;
      case 2:
        return <Database className="w-4 h-4" />;
      case 3:
        return <Cloud className="w-4 h-4" />;
      case 4:
        return <DraftingCompass className="w-4 h-4" />;
      case 5:
        return <BrainCircuit className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#08080a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-600 mb-2">
            03. Engineering Competencies & Toolchains
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Technical mastery grounded in applied engineering coursework.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A comprehensive matrix of programming languages, hardware toolchains, database engines, and engineering methodologies.
          </p>
        </div>

        {/* Category Navigation Tabs (Mobile-friendly horizontal scroller) */}
        <div className="flex items-center gap-2 pb-4 overflow-x-auto border-b border-white/10 mb-8 scrollbar-none">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(idx)}
              className={`min-h-[42px] flex items-center gap-2 px-4 py-2 text-xs font-mono-code font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === idx
                  ? 'bg-white text-zinc-950 shadow-md font-bold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <span className={selectedCategory === idx ? 'text-red-700' : 'text-zinc-500'}>
                {getCategoryIcon(idx)}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid for Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-zinc-950 border border-white/10 hover:border-amber-500/40 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-white font-mono-code">{skill.name}</h4>
                  <span className="text-[10px] font-mono-code text-amber-400 font-bold uppercase">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.context}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono-code">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Verified in Academic Projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Competency Highlights */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-display">Continuous Systems Integration</h4>
            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
              Experience developing across all tiers of the engineering stack: from breadboards, I2C logic analyzers, and motor drivers up to normalized relational databases and RESTful cloud endpoints.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono-code text-zinc-400 shrink-0">
            <div>
              <span className="text-white font-bold block text-sm">6+</span>
              <span>Languages</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="text-amber-400 font-bold block text-sm">4+</span>
              <span>Hardware ICs</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="text-emerald-400 font-bold block text-sm">AWS</span>
              <span>Cloud Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
