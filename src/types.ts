export interface Project {
  id: string;
  title: string;
  category: 'embedded' | 'robotics' | 'mechanical' | 'media';
  timeline: string;
  role: string;
  teamSize: number;
  grade?: string;
  shortSummary: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  driveUrl?: string;
  githubUrl?: string;
  hasInteractiveDemo?: boolean;
  demoType?: 'sensehat' | 'robotics' | 'clock' | 'gallery';
  architecturePoints: { title: string; detail: string }[];
  metrics: { label: string; value: string }[];
  galleryPhotos?: { title: string; caption: string; tag: string }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'leadership' | 'work' | 'volunteer';
  bullets: string[];
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  honors: string[];
  awards: { name: string; year: string; note: string }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Proficient' | 'Advanced' | 'Familiar'; context: string }[];
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'Photography' | 'Cinematography' | 'Branding';
  clientOrProject: string;
  aspectRatio: string;
  description: string;
}
