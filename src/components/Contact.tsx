import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    setStatus('sending');

    // Simulate EmailJS or standard form submit workflow
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#00f0ff', '#bd00ff', '#00ffd1']
      });
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto">
          Have an opportunity or question? Shoot me a message or connect via socials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* LEFT COLUMN: Contact Details & Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-8 flex-1 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
              Let's build something great!
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              I am open to discussions about software development roles, web engineering tracks, generative AI integrations, and student internships.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <a href="mailto:vasanth.ai1931@gmail.com" className="font-bold text-slate-800 dark:text-white text-sm md:text-base hover:underline">
                    vasanth.ai1931@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20 text-neon-purple shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call Phone</p>
                  <a href="tel:+919345498983" className="font-bold text-slate-850 dark:text-white text-sm md:text-base hover:underline">
                    +91 93454 98983
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Current Base</p>
                  <span className="font-bold text-slate-850 dark:text-white text-sm md:text-base">
                    Vellore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social connections block */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/10 flex justify-around items-center">
            <a
              href="https://www.linkedin.com/in/vasantharaj-s45"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-350 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-200"
            >
              <FaLinkedin className="w-5 h-5 text-neon-blue" />
              LinkedIn
            </a>
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10" />
            <a
              href="https://github.com/vasanth4597"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-355 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5 text-neon-purple" />
              GitHub
            </a>
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10" />
            <a
              href="mailto:vasanth.ai1931@gmail.com"
              className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-355 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-200"
            >
              <Mail className="w-5 h-5 text-neon-cyan" />
              Gmail
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10 h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm focus:border-neon-blue/50 focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-850 dark:text-white text-sm focus:border-neon-blue/50 focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-850 dark:text-white text-sm focus:border-neon-blue/50 focus:outline-none transition-colors duration-200"
                  placeholder="Internship / Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-850 dark:text-white text-sm focus:border-neon-blue/50 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Hi Vasantharaj, we would love to schedule a developer interview..."
                  required
                />
              </div>

              {/* Status Alert Banners */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 text-green-500 border border-green-500/25 rounded-xl flex items-center gap-2 text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your message has been sent successfully. I will get back to you shortly!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 text-red-500 border border-red-500/25 rounded-xl flex items-center gap-2 text-xs md:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white font-bold text-sm hover:opacity-90 shadow-lg transition-all duration-300 disabled:opacity-50 focus:outline-none"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting signal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
