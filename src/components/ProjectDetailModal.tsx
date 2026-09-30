import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Cpu,
  CheckCircle2,
  FolderGit2,
  Upload,
  Image as ImageIcon,
  Trash2,
  Play,
  Calendar,
  Users,
  Award,
} from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchDemo?: (project: Project) => void;
  onPhotosUpdated?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onLaunchDemo,
  onPhotosUpdated,
}) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [urlInput, setUrlInput] = useState<string>('');
  const [showUrlInput, setShowUrlInput] = useState<boolean>(false);

  useEffect(() => {
    if (!project) return;
    try {
      const saved = localStorage.getItem(`hks_photos_${project.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setPhotos(parsed);
          setActivePhotoIdx(0);
          return;
        }
      }
    } catch {
      // ignore
    }
    setPhotos([]);
    setActivePhotoIdx(0);
  }, [project]);

  if (!project) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotos((prev) => {
            const updated = [...prev, result];
            try {
              localStorage.setItem(`hks_photos_${project.id}`, JSON.stringify(updated));
            } catch {
              // ignore
            }
            onPhotosUpdated?.();
            return updated;
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    const updated = [...photos, urlInput.trim()];
    setPhotos(updated);
    try {
      localStorage.setItem(`hks_photos_${project.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setUrlInput('');
    setShowUrlInput(false);
    onPhotosUpdated?.();
  };

  const handleDeletePhoto = (indexToDelete: number) => {
    const updated = photos.filter((_, idx) => idx !== indexToDelete);
    setPhotos(updated);
    if (activePhotoIdx >= updated.length) {
      setActivePhotoIdx(Math.max(0, updated.length - 1));
    }
    try {
      localStorage.setItem(`hks_photos_${project.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
    onPhotosUpdated?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#050505]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-code text-red-600">
              <span className="uppercase font-bold">{project.category} Systems</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{project.timeline}</span>
              {project.grade && (
                <>
                  <span className="text-zinc-600">·</span>
                  <span className="text-amber-400 font-bold">{project.grade}</span>
                </>
              )}
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-black border border-white/10">
              <span className="text-[10px] font-mono-code text-zinc-500 block uppercase">
                Role
              </span>
              <span className="text-xs font-semibold text-white truncate block">
                {project.role}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-black border border-white/10">
              <span className="text-[10px] font-mono-code text-zinc-500 block uppercase">
                Team Size
              </span>
              <span className="text-xs font-semibold text-white block">
                {project.teamSize === 1
                  ? 'Individual'
                  : `${project.teamSize} Collaborators`}
              </span>
            </div>
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black border border-white/10">
                <span className="text-[10px] font-mono-code text-zinc-500 block uppercase">
                  {metric.label}
                </span>
                <span className="text-xs font-bold text-amber-400 block font-mono-code truncate">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Project Media & Photo Showcase */}
          <div className="p-4 rounded-xl bg-[#0d0d10] border border-white/10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-mono-code font-bold text-white uppercase tracking-wider">
                  Project Gallery & Visual Evidence ({photos.length} photos)
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Photos</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={() => setShowUrlInput(!showUrlInput)}
                  className="px-2.5 py-1.5 text-xs font-mono-code text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-white/10 transition-colors"
                >
                  + Add URL
                </button>
              </div>
            </div>

            {showUrlInput && (
              <form onSubmit={handleAddUrl} className="flex gap-2 pt-2">
                <input
                  type="url"
                  placeholder="Paste direct image URL..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs bg-black text-white border border-white/15 rounded-lg focus:outline-none focus:border-amber-400 font-mono-code"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-mono-code font-bold text-zinc-950 bg-white rounded-lg hover:bg-zinc-200"
                >
                  Add
                </button>
              </form>
            )}

            {/* Display Photos or Empty State */}
            {photos.length > 0 ? (
              <div className="space-y-3">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden bg-black border border-white/10 flex items-center justify-center">
                  <img
                    src={photos[activePhotoIdx]}
                    alt={`${project.title} - photo ${activePhotoIdx + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => handleDeletePhoto(activePhotoIdx)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-red-950 text-zinc-400 hover:text-red-400 border border-white/10 transition-colors"
                    title="Remove this photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {photos.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {photos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          activePhotoIdx === idx
                            ? 'border-amber-400 scale-105'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={p}
                          alt="thumb"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 rounded-lg bg-black/50 border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                <ImageIcon className="w-8 h-8 text-zinc-600 mb-2" />
                <p className="text-xs text-zinc-300 font-medium">
                  No local photos added to this card yet
                </p>
                <p className="text-[11px] text-zinc-500 mt-1 max-w-md">
                  Upload photos from your device or browse the complete set of photos, CAD drawings, and reports in the Google Drive technical context folder.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer transition-colors">
                    <Upload className="w-3 h-3" />
                    <span>Upload From Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {project.driveUrl && (
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-white/10 transition-colors"
                    >
                      <FolderGit2 className="w-3 h-3 text-emerald-400" />
                      <span>Open Google Drive Folder</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Project Summary & Verified Resume Bullets */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code font-bold text-white uppercase tracking-wider">
              Project Description & Contributions
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Achievements & Resume Bullets */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code font-bold text-white uppercase tracking-wider">
              Highlights & Verified Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-300 p-3 rounded-lg bg-zinc-950 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Tooling */}
          <div className="pt-2 border-t border-white/10">
            <p className="text-[11px] font-mono-code text-zinc-500 uppercase mb-2">
              Technologies & Tooling
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300 font-mono-code">
              {project.techStack.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-3">
                  <span className="text-white font-medium">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span className="text-zinc-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Google Drive Technical Context Banner */}
          {project.driveUrl && (
            <div className="p-4 rounded-xl bg-zinc-950 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-mono-code">
                    Original Google Drive Technical Context
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    View original CAD drawings, engineering reports, photos, and project documentation.
                  </p>
                </div>
              </div>

              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-mono-code font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm shrink-0"
              >
                <span>Open Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Action Callouts */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 justify-between">
            {project.hasInteractiveDemo && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchDemo?.(project);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono-code font-bold text-white bg-red-700 hover:bg-red-600 rounded-xl transition-all shadow-md"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play SenseHAT Simulator</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
