import { Education, Experience, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Harsh K. Shah',
  tagline: 'Information Systems Engineering',
  objective:
    '3rd year Bachelor of Information Systems Engineering. Seeking a 12-month Software Engineering Co-op, starting May 2027. Hands-on experience in developing software, databases, and embedded systems, with excellent communication skills, initiative and adaptability, ready to contribute to engineering projects.',
  email: 'hks.redx@gmail.com',
  alternateEmail: 'h.shah5096@gmail.com',
  phone: '289-775-8924',
  github: 'https://github.com/hks-x-digital',
  githubDisplay: 'github.com/hks-x-digital',
  linkedin: 'https://linkedin.com/in/hksdigital',
  linkedinDisplay: 'linkedin.com/in/hksdigital',
  googleDriveFolder:
    'https://drive.google.com/drive/u/0/folders/1yP31a9uDuWCufJbBrCteGAVXZOXdJdh-',
  location: 'Toronto, ON',
  coopAvailability: 'Seeking 12-month Co-op starting May 2027',
  cgpa: '86.2% (Dean’s Honour Roll)',
};

export const EDUCATION_DATA: Education = {
  degree: 'Honours B.Eng. Co-op - Information Systems Engineering',
  institution: 'Humber Polytechnic',
  period: 'Expected Graduation April 2029',
  cgpa: '86.2%',
  honors: ['Dean’s Honour Roll - CGPA 86.2%'],
  awards: [
    {
      name: 'Rockwell Leadership Award',
      year: '2026',
      note: 'Leadership award at Humber Polytechnic',
    },
    {
      name: 'Barrett Foundation Entrance Scholarship',
      year: '2024',
      note: 'Merit scholarship upon entrance',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tictactoe-platform',
    title: 'Tic-Tac-Toe Platform',
    category: 'embedded',
    timeline: 'January 2026 - April 2026',
    role: 'Team Lead (Team of 4)',
    teamSize: 4,
    grade: '93% - Software BUS Project',
    shortSummary:
      'Built a Tic Tac Toe interface on Raspberry Pi SenseHAT with move validation, score tracking & 2 modes. Implemented "Weak AI" & "Intelligent AI" with Minimax on both Java and Python.',
    description: [
      'Led a team of 4. Built a Tic Tac Toe interface on Raspberry Pi SenseHAT with move validation, score tracking & 2 modes. Implemented "Weak AI" & "Intelligent AI" with Minimax on both Java and Python.',
      'Documented UML design, and Big-O analysis. Designed MySQL schema. Extended system via Flask dashboard, Google Sheets sync, Wireshark analysis, and statistical reporting.',
      'Demonstrated leadership and teamwork by coordinating a team of 4 to integrate hardware, software, databases and reports across courses; received grade of 93% on the Software BUS Project.',
    ],
    techStack: [
      'Java',
      'Python',
      'MySQL',
      'Raspberry Pi Sense HAT',
      'Flask',
      'Google Sheets',
      'Wireshark',
      'UML',
      'Minimax AI',
    ],
    highlights: [
      'Led team of 4 across integrated courses',
      'Received grade of 93% on Software BUS Project',
      'SenseHAT interface with move validation and score tracking',
      'Implemented Weak AI & Intelligent AI with Minimax in Java and Python',
      'Extended via Flask dashboard, Google Sheets sync, and Wireshark analysis',
    ],
    driveUrl:
      'https://drive.google.com/drive/u/0/folders/1yP31a9uDuWCufJbBrCteGAVXZOXdJdh-',
    githubUrl: 'https://github.com/hks-x-digital',
    hasInteractiveDemo: true,
    demoType: 'sensehat',
    architecturePoints: [
      {
        title: 'SenseHAT Hardware Interface',
        detail:
          'Move validation, score tracking, and 2 distinct modes (Weak AI heuristic and Minimax Intelligent AI).',
      },
      {
        title: 'Multi-Language Implementation',
        detail:
          'Implemented gameplay and decision logic across both Java and Python.',
      },
      {
        title: 'Data & Network Extensions',
        detail:
          'MySQL schema design, Flask dashboard, Google Sheets sync, Wireshark traffic analysis, and statistical reporting.',
      },
      {
        title: 'Academic Integration',
        detail:
          'Integrated hardware, software, databases, and reports, earning a final evaluation of 93% on the Software BUS Project.',
      },
    ],
    metrics: [
      { label: 'Evaluation Grade', value: '93%' },
      { label: 'Project Type', value: 'Software BUS Project' },
      { label: 'Team Size', value: '4 Members' },
      { label: 'AI Modes', value: 'Weak & Minimax' },
    ],
  },
  {
    id: 'transforming-robot',
    title: 'Robot with Transforming Wheels',
    category: 'robotics',
    timeline: 'January 2025 - April 2025',
    role: 'Collaborator (Team of 3)',
    teamSize: 3,
    shortSummary:
      'Applied Engineering Development Life cycle to design and prototype an embedded robotic system using Arduino. Designed motor control logic and debugged hardware-software integration issues using iterative testing.',
    description: [
      'Collaborated in team of 3 in Engineering Design Course. Applied Engineering Development Life cycle to design and prototype an embedded robotic system using Arduino. Demonstrated analytical and problem-solving skills.',
      'Designed motor control logic. Debugged hardware-software integration issues using iterative testing.',
      'Utilized C++, Arduino, SolidWorks, Fusion 360 & 3D printing.',
      'Full project photos, CAD assemblies, and documentation available in the Google Drive technical context folder.',
    ],
    techStack: [
      'C++',
      'Arduino',
      'SolidWorks',
      'Fusion 360',
      '3D Printing',
      'Motor Control Logic',
    ],
    highlights: [
      'Collaborated in team of 3 in Engineering Design Course',
      'Applied Engineering Development Life Cycle (EDLC) to embedded robotic prototype',
      'Designed motor control logic and tested iterative hardware-software integration',
      'Engineered in C++, Arduino, SolidWorks, Fusion 360, and 3D printing',
    ],
    driveUrl:
      'https://drive.google.com/drive/u/0/folders/1yP31a9uDuWCufJbBrCteGAVXZOXdJdh-',
    hasInteractiveDemo: false,
    architecturePoints: [
      {
        title: 'Engineering Development Life Cycle',
        detail:
          'Applied EDLC framework to design and prototype the embedded robotic system from concept to physical testing.',
      },
      {
        title: 'Motor Control Logic',
        detail:
          'Designed low-level motor control routines and resolved hardware-software bugs via systematic iterative testing.',
      },
      {
        title: 'CAD Modeling & Prototyping',
        detail:
          'Modeled mechanical components in SolidWorks and Fusion 360, fabricating custom parts with 3D printing.',
      },
    ],
    metrics: [
      { label: 'Course', value: 'Engineering Design' },
      { label: 'Team Size', value: '3 Collaborators' },
      { label: 'Platform', value: 'Arduino' },
      { label: 'Language', value: 'C++' },
    ],
  },
  {
    id: 'mechanical-clock',
    title: 'Mechanical Clock',
    category: 'mechanical',
    timeline: 'September 2024 - December 2024',
    role: 'Team Lead (Team of 4)',
    teamSize: 4,
    grade: '95% Final Project Grade',
    shortSummary:
      'Led team of 4 in Introduction to Engineering Course. Applied Engineering Design Life Cycle to prototype mechanical weight powered clock. Received grade of 95% on the project.',
    description: [
      'Led team of 4 in Introduction to Engineering Course. Applied Engineering Design Life Cycle to prototype mechanical weight powered clock.',
      'Utilized AutoCAD, Fusion, 3D printing and laser cutting.',
      'Delivered full documentation including CAD drawings, technical reports, and risk analysis.',
      'Received grade of 95% on the project. Demonstrated project management and organizational skills.',
      'Photos, documents, CAD drawings, and reports available in the Google Drive technical context folder.',
    ],
    techStack: [
      'AutoCAD',
      'Fusion 360',
      '3D Printing',
      'Laser Cutting',
      'CAD Drawings',
      'Risk Analysis',
    ],
    highlights: [
      'Led team of 4 in Introduction to Engineering Course',
      'Prototyped mechanical weight powered clock using EDLC',
      'Delivered full documentation: CAD drawings, technical reports, and risk analysis',
      'Received grade of 95% on the project',
    ],
    driveUrl:
      'https://drive.google.com/drive/u/0/folders/1yP31a9uDuWCufJbBrCteGAVXZOXdJdh-',
    hasInteractiveDemo: false,
    architecturePoints: [
      {
        title: 'Engineering Design Life Cycle',
        detail:
          'Led end-to-end design lifecycle from requirements and drafting through physical fabrication and validation.',
      },
      {
        title: 'CAD & Fabrication',
        detail:
          'Drafted mechanical drawings in AutoCAD and Fusion 360; fabricated parts with laser cutting and 3D printing.',
      },
      {
        title: 'Documentation & Risk Analysis',
        detail:
          'Authored comprehensive technical documentation, assembly drawings, and risk management assessments, earning a 95% grade.',
      },
    ],
    metrics: [
      { label: 'Evaluation Grade', value: '95%' },
      { label: 'Course', value: 'Intro to Engineering' },
      { label: 'Team Size', value: '4 Members' },
      { label: 'Power Source', value: 'Weight Powered' },
    ],
  },
  {
    id: 'hks-digital',
    title: 'Photographer & Videographer — HKS Digital',
    category: 'media',
    timeline: 'October 2021 - Current',
    role: 'Lead Photographer & Videographer',
    teamSize: 1,
    shortSummary:
      'Led teams of photographers and videographers. Increased engagement by 15% for business clients through data driven content strategies. Managed end-to-end project lifecycle for client media productions.',
    description: [
      'Led teams of photographers and videographers.',
      'Increased engagement by 15% for business clients, through data driven content strategies.',
      'Managed end-to-end project lifecycle for client media productions, from proposal to final delivery.',
      'Applied iterative feedback loops to continuously improve creative and technical output quality.',
      'Photography projects: Cherry Blossoms, Branding Shoot, K&S. Video projects: HUX Papousek, Oak Lane.',
    ],
    techStack: [
      'Photography',
      'Videography',
      'Content Strategy',
      'Project Lifecycle Management',
      'Client Creative Direction',
    ],
    highlights: [
      'Led teams of photographers and videographers since Oct 2021',
      'Increased engagement by 15% for business clients through data-driven content',
      'Managed end-to-end media productions from proposal to final delivery',
      'Photography projects: Cherry Blossoms, Branding Shoot, K&S',
      'Video projects: HUX Papousek, Oak Lane',
    ],
    hasInteractiveDemo: false,
    architecturePoints: [
      {
        title: 'Client Content Strategy',
        detail:
          'Crafted data-driven visual media that increased audience engagement by 15% for commercial clients.',
      },
      {
        title: 'End-to-End Production',
        detail:
          'Directed client productions across pre-production, filming, lighting, post-processing, and client delivery.',
      },
    ],
    metrics: [
      { label: 'Client Engagement', value: '+15%' },
      { label: 'Timeline', value: '2021 - Present' },
      { label: 'Visual Projects', value: 'Photo & Video' },
      { label: 'Workflow', value: 'End-to-End' },
    ],
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'hpues-president',
    role: 'President',
    organization: 'Humber’s Engineering Society (HPUES)',
    period: 'May 2026 - April 2027',
    location: 'Toronto, ON',
    type: 'leadership',
    bullets: [
      'Elected to lead Humber’s Engineering Society with a focus on student engagement and long-term organizational stability.',
      'Leading initiatives for recruitment, sponsorships & operational continuity.',
    ],
    highlights: [
      'Elected President of Humber’s Engineering Society',
      'Recruitment & Sponsorships',
      'Operational Continuity',
    ],
  },
  {
    id: 'hpues-commissioner',
    role: 'Commissioner',
    organization: 'Humber’s Engineering Society (HPUES)',
    period: 'October 2025 - April 2026',
    location: 'Toronto, ON',
    type: 'leadership',
    bullets: [
      'Commissioner for Finance, Operations and Media. Assisted VPO, VPI, VPC & VPF in events and initiatives.',
      'Ran 4 LinkedIn headshot events & career workshops in partnership with Humber’s Advising office.',
    ],
    highlights: [
      'Finance, Operations and Media',
      '4 LinkedIn Headshot Events',
      'Career Workshops with Advising Office',
    ],
  },
  {
    id: 'it-helpdesk',
    role: 'IT Help Desk - Tech Zone',
    organization: 'Humber IT Services',
    period: 'May 2026 - August 2026',
    location: 'Toronto, ON',
    type: 'work',
    bullets: [
      'Served as front-line technical support; 500+ inquiries from students, staff, faculty and guests.',
      'Troubleshot Windows, Microsoft 365, hardware, software, account access, & connectivity.',
      'Supported device setup, equipment testing, installation, asset tracking, and sign-out operations.',
      'Documented incidents, service activity, issues accurately for tracking, escalation, and follow-up.',
      'Translated technical procedures and technical jargon into clear instructions for non-technical users.',
      'Applied structured troubleshooting and clear communication in a fast-paced enterprise IT environment.',
    ],
    highlights: [
      '500+ Technical Inquiries Handled',
      'Windows, M365, Hardware & Connectivity',
      'Asset Tracking, Device Setup & Testing',
    ],
  },
  {
    id: 'academic-advising',
    role: 'Front Desk',
    organization: 'Humber Academic Advising & Career Services',
    period: 'August 2025 - May 2026',
    location: 'Toronto, ON',
    type: 'work',
    bullets: [
      'Served as the first point of contact; 2000+ inquiries from students, staff and guests.',
      'Delivered exceptional service by going above and beyond. Deeply analyzed situations and found root issues and routed them to the appropriate internal systems and stakeholders.',
      'Identified inefficiencies in SOPs and proposed process improvements to increase efficiency.',
      'Maintained confidentiality and compliance in handling sensitive student records.',
      'De-escalated student, staff and guest concerns with professionalism and active listening.',
    ],
    highlights: [
      '2000+ Student Inquiries Handled',
      'Root Issue Diagnosis & Routing',
      'SOP Improvements & Compliance',
    ],
  },
  {
    id: 'ava-volunteer',
    role: 'Volunteer',
    organization: 'AVA (Action Volunteers for Animals)',
    period: 'October 2021 - December 2025',
    location: 'Toronto, ON',
    type: 'volunteer',
    bullets: [
      'Facilitated the safety and happiness of shelter cats.',
      'Ensured well-being & happiness of cats through diligent cleaning, feeding & interactive play.',
      'Conducted thorough screenings of foster families and adopters to ensure suitability & compatibility.',
    ],
    highlights: [
      'Shelter Cat Safety & Well-being',
      'Adopter & Foster Family Screenings',
      'Cleanliness & Care Protocols',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 'Proficient', context: 'Object-oriented programming, data structures, Minimax AI implementation' },
      { name: 'Python', level: 'Proficient', context: 'Data analysis, preprocessing, ML fundamentals, Flask backend' },
      { name: 'C', level: 'Proficient', context: 'Embedded systems development and low-level memory programming' },
      { name: 'C++', level: 'Proficient', context: 'Arduino firmware development and robotic motor control logic' },
      { name: 'SQL', level: 'Proficient', context: 'Relational database schema design and querying (MySQL, MariaDB)' },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { name: 'UML', level: 'Proficient', context: 'System architecture, class structures, and sequence design' },
      { name: 'Test Planning', level: 'Proficient', context: 'Hardware-software verification plans and test suites' },
      { name: 'Debugging', level: 'Proficient', context: 'Iterative hardware-software troubleshooting and diagnostic testing' },
      { name: 'Technical Documentation', level: 'Proficient', context: 'CAD drawings, engineering reports, and risk analysis' },
    ],
  },
  {
    title: 'AI & Data Analysis',
    skills: [
      { name: 'Python Data Analysis', level: 'Proficient', context: 'Data cleaning, feature analysis, and trend reporting' },
      { name: 'Preprocessing & Visualization', level: 'Proficient', context: 'Transforming datasets and statistical chart generation' },
      { name: 'ML Fundamentals', level: 'Proficient', context: 'Core machine learning theory and decision search algorithms' },
    ],
  },
  {
    title: 'Cloud Computing',
    skills: [
      { name: 'AWS', level: 'Proficient', context: 'Cloud infrastructure configurations and cloud compute services' },
      { name: 'Virtualization Models', level: 'Proficient', context: 'Virtualization environments and container architectures' },
      { name: 'Infrastructure Configurations', level: 'Proficient', context: 'System provisioning and cloud resource setup' },
    ],
  },
  {
    title: 'Tools & Embedded Hardware',
    skills: [
      { name: 'Git', level: 'Proficient', context: 'Version control and collaborative repository workflows' },
      { name: 'MariaDB & MySQL', level: 'Proficient', context: 'Relational data modeling, indexing, and persistent storage' },
      { name: 'Raspberry Pi 4 Sense HAT', level: 'Proficient', context: '8x8 RGB LED matrix, joystick input, I2C embedded interface' },
      { name: 'Arduino Uno', level: 'Proficient', context: 'Microcontroller programming, GPIO, and PWM motor drivers' },
      { name: 'ESP8266 & Arty A7', level: 'Proficient', context: 'IoT microcontrollers and FPGA development boards' },
      { name: 'CAD: SolidWorks, Fusion 360, AutoCAD', level: 'Proficient', context: 'Parametric 3D modeling, 2D blueprints, laser cutting, 3D printing' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication Skills', level: 'Proficient', context: 'Translating technical jargon into clear guidance for diverse stakeholders' },
      { name: 'Problem Solving & Analytical', level: 'Proficient', context: 'Deep situation analysis, root cause diagnosis, and SOP optimization' },
      { name: 'Leadership & Initiative', level: 'Proficient', context: 'Elected HPUES President, coordinating 4-member teams across engineering projects' },
    ],
  },
];

export const HOBBIES = [
  'Photography',
  'Formula 1',
  'Karate',
  'Taekwondo',
  'Muay Thai',
  'Tennis',
];
