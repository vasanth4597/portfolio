import { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import Interactive3DCard from './3d/Interactive3DCard';
import { audio } from '../utils/audioFX';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    audio.playKey();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audio.playClick();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      audio.playSuccess();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#bd00ff', '#00ffd1', '#ff007a']
      });
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative z-10 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-mono font-semibold">
          <Terminal className="w-3.5 h-3.5" />
          <span>Transmission Channel</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Get In{' '}
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            Touch
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Have an internship opportunity, software project, or technical question? Transmit a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <Interactive3DCard
            maxTilt={8}
            glowColor="rgba(0, 240, 255, 0.25)"
            className="glass-card p-8 rounded-2xl border border-white/10 space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
                Let's Collaborate
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open for software engineering, full-stack, and generative AI internship roles or collaborative student projects.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <a
                href="mailto:vasanth.ai1931@gmail.com"
                onMouseEnter={() => audio.playHover()}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    vasanth.ai1931@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    Vellore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-400 block uppercase tracking-wider">
                Social Networks
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/vasanth4597"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => audio.playHover()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all font-semibold text-xs"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vasantharaj-s45"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => audio.playHover()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-neon-blue hover:border-neon-blue/40 transition-all font-semibold text-xs"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Interactive3DCard>
        </div>

        {/* Transmission Form Column */}
        <div className="lg:col-span-7">
          <Interactive3DCard
            maxTilt={6}
            glowColor="rgba(189, 0, 255, 0.25)"
            className="glass-card p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-slate-300 block">
                    Your Name <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan transition-all text-sm font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-slate-300 block">
                    Email Address <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan transition-all text-sm font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-slate-300 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Role / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan transition-all text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-slate-300 block">
                  Message <span className="text-neon-cyan">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Hi Vasantharaj, we would love to connect with you regarding..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan transition-all text-sm font-sans resize-none"
                />
              </div>

              {/* Status alerts */}
              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Signal transmitted successfully! I will respond promptly.</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'sending'}
                onMouseEnter={() => audio.playHover()}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white font-semibold text-sm hover:opacity-95 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:scale-[1.01] focus:outline-none disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Transmitting signal...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </Interactive3DCard>
        </div>

      </div>
    </section>
  );
}
