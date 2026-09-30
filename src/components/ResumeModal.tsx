import React from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Download, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const projectDriveUrl = PERSONAL_INFO.googleDriveFolder;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        
        {/* Controls Bar (Hidden during print) */}
        <div className="print:hidden flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#050505]">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-bold text-white font-display">
              Curriculum Vitae — Harsh K. Shah
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 font-mono-code font-semibold">
              Updated Resume
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={projectDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-white/10 transition-colors"
              title="Open Google Drive Project Files"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Drive</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono-code font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-zinc-900 selection:bg-red-100 selection:text-zinc-900 font-sans print:p-0 print:m-0 print:overflow-visible print:max-h-none print:shadow-none">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-zinc-300">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 uppercase">
              Harsh K. Shah
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2 text-xs text-zinc-700 font-medium">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-700">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-red-700">
                {PERSONAL_INFO.phone}
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 inline-flex items-center gap-0.5"
              >
                <span>github.com/hks-x-digital</span>
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 inline-flex items-center gap-0.5"
              >
                <span>linkedin.com/in/hksdigital</span>
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Objective
            </h2>
            <p className="text-xs text-zinc-800 leading-relaxed text-justify">
              3rd year Bachelor of Information Systems Engineering. Seeking a 12-month Software Engineering Co-op, starting May 2027. Hands-on experience in developing software, databases, and embedded systems, with excellent communication skills, initiative and adaptability, ready to contribute to engineering projects.
            </p>
          </div>

          {/* Skills Summary */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Skills Summary
            </h2>
            <div className="space-y-1 text-xs text-zinc-800">
              <p>
                <strong className="text-zinc-900">➤ Programming:</strong> Java, Python, C, C++, SQL
              </p>
              <p>
                <strong className="text-zinc-900">➤ Engineering:</strong> UML, test planning, debugging & technical documentation.
              </p>
              <p>
                <strong className="text-zinc-900">➤ AI:</strong> Python data analysis, preprocessing, visualization & ML fundamentals.
              </p>
              <p>
                <strong className="text-zinc-900">➤ Cloud Computing:</strong> AWS. Virtualization models & infrastructure configurations.
              </p>
              <p>
                <strong className="text-zinc-900">➤ Tools:</strong> Git, MariaDB, MySQL, Raspberry Pi 4 Sense HAT, Arduino Uno, ESP8266 & Arty A7.
              </p>
              <p>
                <strong className="text-zinc-900">➤ Soft skills:</strong> Excellent communication skills, problem solving, analytical and leadership abilities.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
              <span>Honours B.Eng. Co-op - Information Systems Engineering</span>
              <span>Expected Graduation April 2029</span>
            </div>
            <div className="text-xs text-zinc-800">➤ Humber Polytechnic</div>
            <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
              <li>➤ Dean’s Honour Roll - CGPA 86.2%</li>
              <li>➤ Awards: Rockwell Leadership Award 2026</li>
              <li>➤ Barrett Foundation Entrance Scholarship 2024</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Work Experience
            </h2>

            {/* IT Help Desk */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>IT Help Desk - Tech Zone - Humber IT Services</span>
                <span>May 2026 - August 2026</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>➤ Served as front-line technical support; 500+ inquiries from students, staff, faculty and guests.</li>
                <li>➤ Troubleshot Windows, Microsoft 365, hardware, software, account access, & connectivity.</li>
                <li>➤ Supported device setup, equipment testing, installation, asset tracking, and sign-out operations.</li>
                <li>➤ Documented incidents, service activity, issues accurately for tracking, escalation, and follow-up.</li>
                <li>➤ Translated technical procedures and technical jargon into clear instructions for non-technical users.</li>
                <li>➤ Applied structured troubleshooting and clear communication in a fast-paced enterprise IT environment.</li>
              </ul>
            </div>

            {/* Front Desk */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>Front Desk - Humber Academic Advising & Career Services</span>
                <span>August 2025 - May 2026</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>➤ Served as the first point of contact; 2000+ inquiries from students, staff and guests.</li>
                <li>➤ Delivered exceptional service by going above and beyond. Deeply analyzed situations and found root issues and routed them to the appropriate internal systems and stakeholders.</li>
                <li>➤ Identified inefficiencies in SOPs and proposed process improvements to increase efficiency.</li>
                <li>➤ Maintained confidentiality and compliance in handling sensitive student records.</li>
                <li>➤ De-escalated student, staff and guest concerns with professionalism and active listening.</li>
              </ul>
            </div>

            {/* Photographer & Videographer */}
            <div>
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>Photographer & Videographer - HKS Digital</span>
                <span>October 2021 - Current</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>➤ Led teams of photographers and videographers.</li>
                <li>➤ Increased engagement by 15% for business clients, through data driven content strategies.</li>
                <li>➤ Managed end-to-end project lifecycle for client media productions, from proposal to final delivery.</li>
                <li>➤ Applied iterative feedback loops to continuously improve creative and technical output quality.</li>
                <li className="pt-0.5">
                  ➤ Photography:{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>Cherry Blossoms</span>
                  </a>{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>Branding Shoot</span>
                  </a>{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>K&S</span>
                  </a>{' '}
                  | Video:{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>HUX Papousek</span>
                  </a>{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>Oak Lane</span>
                  </a>.
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Development */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Professional Development
            </h2>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>
                  President - Humber’s Engineering Society (
                  <a
                    href="https://linkedin.com/company/hpues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800"
                  >
                    HPUES
                  </a>
                  )
                </span>
                <span>May 2026 - April 2027</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>
                  ➤ Elected to lead Humber’s Engineering Society with a focus on student engagement and long-term
                  organizational stability. Leading initiatives for recruitment, sponsorships & operational continuity.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>
                  Commissioner - Humber’s Engineering Society (
                  <a
                    href="https://linkedin.com/company/hpues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800"
                  >
                    HPUES
                  </a>
                  )
                </span>
                <span>October 2025 - April 2026</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>
                  ➤ Commissioner for Finance, Operations and Media. Assisted VPO, VPI, VPC & VPF in events and initiatives.
                </li>
                <li>
                  ➤ Ran 4 LinkedIn headshot events & career workshops in partnership with Humber’s Advising office.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Technical Projects
            </h2>

            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>Tic-Tac-Toe Platform - Java, Python, MySQL, Raspberry Pi</span>
                <span>January 2026 - April 2026</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>
                  ➤ Led a team of 4. Built a Tic Tac Toe interface on Raspberry Pi SenseHAT with move validation,
                  score tracking & 2 modes. Implemented “Weak AI” & “Intelligent AI” with Minimax on both Java and Python.
                </li>
                <li>
                  ➤ Documented UML design, and Big-O analysis. Designed MySQL schema. Extended system via Flask
                  dashboard, Google Sheets sync, Wireshark analysis, and statistical reporting.
                </li>
                <li>
                  ➤ Demonstrated leadership and teamwork by coordinating a team of 4 to integrate hardware, software,
                  databases and reports across 4 courses; received grade of ~93% on the project across all 4 courses.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>Robot with Transforming Wheels - Engineering Design Course</span>
                <span>January 2025 - April 2025</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>
                  ➤ Collaborated in team of 3. Applied Engineering Development Life cycle to design and prototype an
                  embedded robotic system using Arduino. Demonstrated analytical and problem-solving skills.
                </li>
                <li>
                  ➤ Designed motor control logic. Debugged hardware-software integration issues using iterative testing.
                </li>
                <li>
                  ➤ Utilized C++, Arduino, SolidWorks, Fusion 360 & 3D printing.{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>Photos & Project Files</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
                <span>Mechanical Clock - Introduction to Engineering Course</span>
                <span>September 2024 - December 2024</span>
              </div>
              <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
                <li>
                  ➤ Led team of 4. Applied Engineering Design Life Cycle to prototype mechanical weight powered clock.
                </li>
                <li>
                  ➤ Utilized AutoCAD, Fusion, 3D printing and laser cutting.{' '}
                  <a
                    href={projectDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 underline font-semibold hover:text-red-800 inline-flex items-center gap-0.5"
                  >
                    <span>Photos, Documents & Reports</span>
                  </a>
                </li>
                <li>
                  ➤ Delivered full documentation including CAD drawings, technical reports, and risk analysis.
                </li>
                <li>
                  ➤ Received grade of 95% on the project. Demonstrated project management and organizational skills.
                </li>
              </ul>
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className="mt-5">
            <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
              Volunteer Experience
            </h2>
            <div className="flex justify-between items-baseline text-xs font-bold text-zinc-900">
              <span>Volunteer - AVA (Action Volunteers for Animals)</span>
              <span>October 2021 - December 2025</span>
            </div>
            <ul className="text-xs text-zinc-800 mt-1 space-y-0.5">
              <li>➤ Facilitated the safety and happiness of shelter cats.</li>
              <li>➤ Ensured well-being & happiness of cats through diligent cleaning, feeding & interactive play.</li>
              <li>➤ Conducted thorough screenings of foster families and adopters to ensure suitability & compatibility.</li>
            </ul>
          </div>

          {/* Hobbies & References */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-200">
            <div>
              <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
                Hobbies
              </h2>
              <p className="text-xs text-zinc-800">
                ➤ Photography, Formula 1, Karate, Taekwondo, Muay Thai & Tennis.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-300 pb-1 mb-2">
                References
              </h2>
              <p className="text-xs text-zinc-800">
                ➤ Available upon request
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
