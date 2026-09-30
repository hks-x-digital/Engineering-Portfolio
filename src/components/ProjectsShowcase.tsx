import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Play,
  ChevronRight,
  FolderGit2,
  Image as ImageIcon,
  Upload,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Clock,
  Bot,
  Camera,
  Layers,
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
  onLaunchSenseHat: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  onSelectProject,
  onLaunchSenseHat,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [projectPhotos, setProjectPhotos] = useState<{ [key: string]: string[] }>({});

  const reloadPhotos = () => {
    const loaded: { [key: string]: string[] } = {};
    PROJECTS_DATA.forEach((p) => {
      try {
        const saved = localStorage.getItem(`hks_photos_${p.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            loaded[p.id] = parsed;
          }
        }
      } catch {
        // ignore
      }
    });
    setProjectPhotos(loaded);
  };

  useEffect(() => {
    reloadPhotos();
  }, []);

  const handleCardUpload = (
    projectId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const current = projectPhotos[projectId] || [];
          const updated = [...current, result];
          try {
            localStorage.setItem(`hks_photos_${projectId}`, JSON.stringify(updated));
          } catch {
            // ignore
          }
          reloadPhotos();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'embedded', label: 'Embedded & Software' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'mechanical', label: 'Mechanical Prototyping' },
    { id: 'media', label: 'Creative Media' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  // SVG Schematics for authentic technical representations when photos haven't been uploaded
  const renderFallbackVisual = (projectId: string) => {
    switch (projectId) {
      case 'tictactoe-platform':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a0a0d] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-28 h-28 rounded-xl bg-zinc-950 border border-white/20 p-2 shadow-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono-code text-zinc-500 pb-1 border-b border-white/10">
                  <span>RPi SenseHAT</span>
                  <span className="text-amber-400">8x8 RGB</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-1 my-auto">
                  <span className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                  <span className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <span className="w-4 h-4 rounded-full bg-zinc-800" />
                  <span className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <span className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                  <span className="w-4 h-4 rounded-full bg-zinc-800" />
                  <span className="w-4 h-4 rounded-full bg-zinc-800" />
                  <span className="w-4 h-4 rounded-full bg-zinc-800" />
                  <span className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>
              </div>
              <span className="text-[11px] font-mono-code text-zinc-400 mt-3">
                SenseHAT 8x8 LED Game Grid
              </span>
            </div>
          </div>
        );

      case 'transforming-robot':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a0a0d] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            <svg
              className="w-40 h-28 text-white/80 relative z-10"
              viewBox="0 0 160 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Chassis */}
              <rect x="35" y="30" width="90" height="40" rx="6" stroke="#fbbf24" strokeWidth="2" fill="#00000088" />
              {/* Arduino Board Indicator */}
              <rect x="50" y="40" width="35" height="20" rx="2" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="58" cy="48" r="2" fill="#10b981" />
              <circle cx="70" cy="48" r="2" fill="#10b981" />
              {/* Transforming Wheels Front */}
              <circle cx="35" cy="75" r="18" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="35" cy="75" r="6" fill="#dc2626" />
              {/* Spoke extensions */}
              <line x1="35" y1="51" x2="35" y2="45" stroke="#dc2626" strokeWidth="2" />
              <line x1="35" y1="99" x2="35" y2="105" stroke="#dc2626" strokeWidth="2" />
              <line x1="11" y1="75" x2="5" y2="75" stroke="#dc2626" strokeWidth="2" />
              <line x1="59" y1="75" x2="65" y2="75" stroke="#dc2626" strokeWidth="2" />
              {/* Transforming Wheels Rear */}
              <circle cx="125" cy="75" r="18" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="125" cy="75" r="6" fill="#dc2626" />
              <line x1="125" y1="51" x2="125" y2="45" stroke="#dc2626" strokeWidth="2" />
              <line x1="125" y1="99" x2="125" y2="105" stroke="#dc2626" strokeWidth="2" />
              <line x1="101" y1="75" x2="95" y2="75" stroke="#dc2626" strokeWidth="2" />
              <line x1="149" y1="75" x2="155" y2="75" stroke="#dc2626" strokeWidth="2" />
            </svg>
            <span className="text-[11px] font-mono-code text-zinc-400 mt-2 relative z-10">
              Transforming Wheel Chassis · Arduino C++
            </span>
          </div>
        );

      case 'mechanical-clock':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a0a0d] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            <svg
              className="w-36 h-36 text-amber-400 relative z-10"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {/* Outer Gear */}
              <circle cx="60" cy="50" r="32" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 3" />
              <circle cx="60" cy="50" r="22" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="60" cy="50" r="5" fill="#dc2626" />
              {/* Pendulum Rod & Bob */}
              <line x1="60" y1="50" x2="60" y2="100" stroke="#dc2626" strokeWidth="2" />
              <circle cx="60" cy="100" r="9" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              {/* Weight line */}
              <line x1="42" y1="50" x2="42" y2="85" stroke="#ffffff88" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="36" y="85" width="12" height="18" rx="2" fill="#047857" />
            </svg>
            <span className="text-[11px] font-mono-code text-zinc-400 mt-1 relative z-10">
              Weight-Powered Clockwork Prototype
            </span>
          </div>
        );

      case 'hks-digital':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0a0a0d] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center mb-3">
                <Camera className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-xs font-mono-code font-bold text-white">
                HKS Digital Media Production
              </p>
              <p className="text-[11px] text-zinc-400 mt-1">
                Commercial Photography & Client Cinematography
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <ImageIcon className="w-8 h-8 text-zinc-600" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-600 mb-2">
              02. Applied Engineering Projects & Builds
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Verified prototypes, software, and physical engineering.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Accurate documentation and outcomes directly from Harsh's engineering coursework and technical repository.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-zinc-950 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[42px] px-3.5 py-1.5 text-xs font-mono-code font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const photos = projectPhotos[project.id] || [];
            const hasPhotos = photos.length > 0;

            return (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0b0b0e] border border-white/10 hover:border-white/25 shadow-2xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Visual Frame */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/10 mb-5 group/image">
                    {hasPhotos ? (
                      <img
                        src={photos[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      renderFallbackVisual(project.id)
                    )}

                    {/* Gradient scrim */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                    {/* Overlay Actions */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <label className="px-2.5 py-1 text-[11px] font-mono-code text-zinc-200 bg-black/80 hover:bg-black hover:text-amber-400 rounded-lg border border-white/20 cursor-pointer shadow-md transition-all flex items-center gap-1">
                        <Upload className="w-3 h-3 text-amber-400" />
                        <span>{hasPhotos ? `+ Photo (${photos.length})` : 'Add Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleCardUpload(project.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {project.grade && (
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 text-xs font-mono-code font-bold text-zinc-950 bg-amber-400 rounded-md shadow-md">
                        {project.grade}
                      </span>
                    )}
                  </div>

                  {/* Kicker Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono-code mb-2.5">
                    <span className="text-amber-400 font-bold uppercase">{project.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>{project.timeline}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-300">{project.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Summary from Resume */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {project.shortSummary}
                  </p>

                  {/* Bullets directly from resume */}
                  <ul className="space-y-2 mb-6 text-xs text-zinc-400">
                    {project.description.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-1.5 shrink-0" />
                        <span className="leading-snug text-zinc-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="text-xs text-zinc-400 mb-6 flex flex-wrap items-center gap-2 font-mono-code">
                    {project.techStack.map((tech, idx) => (
                      <span key={tech} className="flex items-center gap-2">
                        <span className="text-zinc-300">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-zinc-600">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="min-h-[42px] inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono-code font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors shadow-sm"
                    >
                      <span>Full Details & Gallery</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-950" />
                    </button>

                    {project.hasInteractiveDemo && (
                      <button
                        onClick={onLaunchSenseHat}
                        className="min-h-[42px] inline-flex items-center gap-1 px-3 py-2 text-xs font-mono-code font-bold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>SenseHAT Simulator</span>
                      </button>
                    )}
                  </div>

                  {project.driveUrl && (
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[42px] inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-900/40 rounded-lg border border-emerald-600/30 transition-colors"
                      title="Open Google Drive Technical Folder"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Google Drive Folder</span>
                      <ArrowUpRight className="w-3 h-3 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
