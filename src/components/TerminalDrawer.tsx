import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal, CornerDownLeft, Sparkles, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onLaunchSenseHat: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onLaunchSenseHat,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-zinc-300 font-mono-code text-xs">
          <p className="text-white font-bold">Harsh K. Shah — Interactive Systems Terminal</p>
          <p className="text-zinc-500">
            Type <span className="text-amber-400 font-bold">help</span> to list commands. Try <span className="text-emerald-400 font-bold">skills</span>, <span className="text-white font-bold">projects</span>, or <span className="text-amber-400 font-bold">resume</span>.
          </p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1 text-xs text-zinc-300 font-mono-code">
            <p className="text-amber-400 font-bold mb-1">Available Commands:</p>
            <p><span className="text-white w-24 inline-block font-bold">skills</span> List verified programming languages, tools & engineering proficiencies</p>
            <p><span className="text-white w-24 inline-block font-bold">projects</span> Show technical projects and verified evaluations</p>
            <p><span className="text-white w-24 inline-block font-bold">education</span> Display academic degree, Dean’s Honour Roll & scholarships</p>
            <p><span className="text-white w-24 inline-block font-bold">sensehat</span> Launch 8x8 SenseHAT matrix game simulator</p>
            <p><span className="text-white w-24 inline-block font-bold">contact</span> Output phone, email, GitHub, and LinkedIn</p>
            <p><span className="text-white w-24 inline-block font-bold">drive</span> Open Google Drive project repository directly</p>
            <p><span className="text-white w-24 inline-block font-bold">resume</span> Open printable ATS resume viewer</p>
            <p><span className="text-white w-24 inline-block font-bold">clear</span> Clear terminal output</p>
          </div>
        );
        break;

      case 'sensehat':
        onLaunchSenseHat();
        resultNode = <p className="text-xs text-red-500 font-mono-code">Launching SenseHAT matrix game simulator...</p>;
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs text-zinc-300 font-mono-code">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <p className="text-amber-400 font-bold">{cat.title}:</p>
                <p className="text-zinc-400">
                  {cat.skills.map((s) => s.name).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-2.5 text-xs text-zinc-300 font-mono-code">
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="p-2 rounded bg-black border border-white/10">
                <p className="text-white font-bold">{p.title}</p>
                <p className="text-amber-400 text-[11px]">{p.role} · {p.timeline} {p.grade && `· ${p.grade}`}</p>
                <p className="text-zinc-400 mt-1">{p.shortSummary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        resultNode = (
          <div className="space-y-1.5 text-xs text-zinc-300 font-mono-code">
            <p className="text-white font-bold">{EDUCATION_DATA.institution} — {EDUCATION_DATA.degree}</p>
            <p className="text-amber-400">{EDUCATION_DATA.period} · CGPA: {EDUCATION_DATA.cgpa} (Dean’s Honour Roll)</p>
            <p className="text-zinc-400">Awards: Rockwell Leadership Award (2026), Barrett Foundation Entrance Scholarship (2024)</p>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs text-zinc-300 font-mono-code">
            <p><span className="text-white font-semibold">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-white font-semibold">Phone:</span> {PERSONAL_INFO.phone}</p>
            <p><span className="text-white font-semibold">GitHub:</span> {PERSONAL_INFO.githubDisplay}</p>
            <p><span className="text-white font-semibold">LinkedIn:</span> {PERSONAL_INFO.linkedinDisplay}</p>
            <p><span className="text-white font-semibold">Location:</span> {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'drive':
        window.open(PERSONAL_INFO.googleDriveFolder, '_blank');
        resultNode = (
          <p className="text-xs text-amber-400 font-mono-code">
            Opened Google Drive technical project repository in new window.
          </p>
        );
        break;

      case 'resume':
        onOpenResume();
        resultNode = <p className="text-xs text-amber-400 font-mono-code">Opening resume viewer...</p>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        resultNode = (
          <p className="text-xs text-red-500 font-mono-code">
            Command not recognized: '{cmd}'. Type 'help' for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: resultNode }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09090b] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[70vh] sm:h-[500px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#050505]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            </div>
            <Terminal className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono-code text-zinc-300 font-semibold">
              hks-terminal
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono-code text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command !== 'init' && (
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-red-600">&gt;</span>
                  <span className="text-white">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-black"
        >
          <span className="text-red-600 font-mono-code font-bold text-xs">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'resume'..."
            className="flex-1 bg-transparent text-xs font-mono-code text-white placeholder:text-zinc-600 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            aria-label="Send command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
