import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: '12-Month Co-op (May 2027)',
    message: '',
  });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Save message locally
    const savedMessages = JSON.parse(localStorage.getItem('hks_portfolio_inquiries') || '[]');
    savedMessages.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('hks_portfolio_inquiries', JSON.stringify(savedMessages));

    // Construct mailto link
    const mailSubject = encodeURIComponent(`Engineering Inquiry from ${formData.name} [${formData.company || 'Co-op'}]`);
    const mailBody = encodeURIComponent(
      `Hi Harsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Org: ${formData.company}\nOpportunity Type: ${formData.roleType}\n\nMessage:\n${formData.message}\n`
    );

    setSubmitted(true);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#08080a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-red-600 mb-2">
            05. Professional Contact & Direct Profiles
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Let's discuss co-op opportunities, systems projects, or engineering collaborations.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Available for a 12-month Software Engineering Co-op starting <strong className="text-amber-400 font-semibold">May 2027</strong>. Based in Greater Toronto, open to in-person, hybrid, and remote roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Professional Profile Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Primary Profile Cards */}
            <div className="p-5 sm:p-7 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono-code">
                Professional Connections
              </h3>

              {/* GitHub */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">GitHub</h4>
                    <p className="text-xs text-zinc-400 font-mono-code">github.com/hks-x-digital</p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white"
                  title="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 text-amber-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">LinkedIn</h4>
                    <p className="text-xs text-zinc-400 font-mono-code">linkedin.com/in/hksdigital</p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-amber-400 hover:text-amber-300"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-zinc-900 text-red-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-white">Primary Email</h4>
                    <p className="text-xs text-zinc-400 font-mono-code truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Direct Phone</h4>
                    <p className="text-xs text-zinc-400 font-mono-code">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  title="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Technical Drive Folder */}
              <div className="p-3.5 rounded-xl bg-black border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-amber-400 font-mono-code uppercase">
                      Google Drive Project Repository
                    </h4>
                    <p className="text-[11px] text-zinc-400">All photos, CAD drawings, reports, and code</p>
                  </div>
                  <a
                    href={PERSONAL_INFO.googleDriveFolder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-amber-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Curriculum Vitae (CV) & Resume */}
              {onOpenResume && (
                <div className="p-3.5 rounded-xl bg-black border border-white/10 hover:border-red-600/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-white font-mono-code uppercase flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-red-600" />
                        <span>Curriculum Vitae (CV)</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-600/40">
                          Updated
                        </span>
                      </h4>
                      <p className="text-[11px] text-zinc-400">View & print Harsh's updated 2026/2027 resume</p>
                    </div>
                    <button
                      onClick={onOpenResume}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono-code font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
                    >
                      Open CV
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Location & Status Card */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Location:</span>
                <span>Greater Toronto Area, Ontario, Canada</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono-code">
                Eligible to work across Canada without visa sponsorship requirement.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-red-600">
                <MessageSquare className="w-4 h-4" />
                <h3 className="text-xs font-bold text-white font-mono-code uppercase tracking-wider">
                  Direct Engineering Inquiry
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the details below to dispatch an inquiry directly to Harsh's inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-900 border border-amber-500/40 flex items-start gap-3 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-400">Inquiry Prepared & Saved!</p>
                    <p className="text-zinc-400 mt-0.5">
                      Your default email application has opened with your message. You can also message Harsh directly at <span className="font-mono-code text-white">{PERSONAL_INFO.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sjenkins@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Organization / Lab</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Robotics Inc / Tech Labs"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium">Opportunity Focus</label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="12-Month Co-op (May 2027)">12-Month Co-op (Starting May 2027)</option>
                      <option value="Embedded Systems Project">Embedded Systems / Hardware Project</option>
                      <option value="Software & Database Development">Software & Database Engineering</option>
                      <option value="HPUES / Society Collaboration">HPUES Leadership / Sponsorship</option>
                      <option value="Creative Media / HKS Digital">HKS Digital Media Production</option>
                      <option value="General Engineering Inquiry">Other Technical Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-medium">Message Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your engineering team, role requirements, or project details..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto min-h-[46px] flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry Draft</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
