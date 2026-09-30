/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SenseHatSimulatorModal } from './components/SenseHatSimulatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { TerminalDrawer } from './components/TerminalDrawer';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isSenseHatOpen, setIsSenseHatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleLaunchDemo = (project: Project) => {
    if (project.id === 'tictactoe-platform' || project.demoType === 'sensehat') {
      setIsSenseHatOpen(true);
    } else if (project.driveUrl) {
      window.open(project.driveUrl, '_blank');
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col font-sans selection:bg-red-800/40 selection:text-white">
      
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreProjects={scrollToProjects}
        />

        <Biography />

        <ProjectsShowcase
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchSenseHat={() => setIsSenseHatOpen(true)}
        />

        <SkillsSection />

        <ExperienceTimeline />

        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Modals */}
      <SenseHatSimulatorModal
        isOpen={isSenseHatOpen}
        onClose={() => setIsSenseHatOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchDemo={handleLaunchDemo}
      />

      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
        onLaunchSenseHat={() => {
          setIsTerminalOpen(false);
          setIsSenseHatOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
