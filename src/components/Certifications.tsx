import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Eye, ExternalLink, CheckCircle, ShieldCheck, Building2 } from 'lucide-react';

interface Certification {
  name: string;
  org: string;
  partner?: string;
  date: string;
  id: string;
  verifyUrl: string;
  skills: string[];
  gradient: string;
  badgeColor: string;
  type: 'google' | 'tata' | 'wellsfargo' | 'deloitte' | 'vista';
}

const certifications: Certification[] = [
  {
    name: "Google Cloud Cybersecurity Certificate",
    org: "Google Cloud",
    partner: "Credly Verified",
    date: "Jun 2026",
    id: "4d98cd5c-104b-419e-8393-d0fe2710e63b",
    verifyUrl: "https://www.credly.com/badges/4d98cd5c-104b-419e-8393-d0fe2710e63b/linked_in_profile",
    skills: ["Cloud Security", "Network Defense", "Threat Intelligence", "SIEM Tools", "Security Architecture"],
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    type: "google"
  },
  {
    name: "Tata - GenAI Powered Data Analytics Job Simulation",
    org: "Tata",
    partner: "Forage",
    date: "Jun 2026",
    id: "mmygMCgD8GX82abQf",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a3a4f1704912554641a41f2_1782214573381_completion_certificate.pdf",
    skills: ["Generative AI", "Data Analytics", "Predictive Modeling", "Prompt Engineering", "Business Insights"],
    gradient: "from-blue-600 via-sky-500 to-teal-400",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    type: "tata"
  },
  {
    name: "Wells Fargo - Software Engineering Job Simulation",
    org: "Wells Fargo",
    partner: "Forage",
    date: "Jun 2026",
    id: "hqy4vd8dfvPBZg4eh",
    verifyUrl: "https://www.theforage.com/completion-certificates/nkmk7gJitYs4TBvoA/9Wvq4L2WCFQDyyPp3_nkmk7gJitYs4TBvoA_6a3a4f1704912554641a41f2_1782271349351_completion_certificate.pdf",
    skills: ["Software Engineering", "System Architecture", "Object-Oriented Design", "Algorithm Optimization", "Financial Tech"],
    gradient: "from-amber-500 via-red-500 to-rose-500",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    type: "wellsfargo"
  },
  {
    name: "Deloitte Australia - Data Analytics Job Simulation",
    org: "Deloitte Australia",
    partner: "Forage",
    date: "Jun 2026",
    id: "a8E9iZrHrKoDLujZy",
    verifyUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a3a4f1704912554641a41f2_1782379335863_completion_certificate.pdf",
    skills: ["Data Analytics", "Forensic Data Analysis", "Tableau Dashboarding", "Statistical Analysis", "Client Strategy"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    type: "deloitte"
  },
  {
    name: "Vista Equity Partners - AI in Action Job Simulation",
    org: "Vista Equity Partners",
    partner: "Forage",
    date: "Jun 2026",
    id: "zLwRBDn3rR2qAg532",
    verifyUrl: "https://www.theforage.com/completion-certificates/BotenCEjm3LFxtq9A/EregFenDKXDDeTGR2_BotenCEjm3LFxtq9A_6a3a4f1704912554641a41f2_1782380353316_completion_certificate.pdf",
    skills: ["Applied AI", "Enterprise ML Strategy", "Data Extraction", "Workflow Automation", "AI Solutioning"],
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    type: "vista"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-semibold uppercase tracking-wider mb-2"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Industry Credentials</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Professional{" "}
          <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Verified industry job simulations and technical accreditations from global organizations and technology leaders.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-slate-200 dark:border-white/10 relative overflow-hidden group"
          >
            {/* Ambient Background Accent Glow */}
            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${cert.gradient} opacity-5 group-hover:opacity-15 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />

            <div className="space-y-4 relative z-10">
              {/* Org & Date Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl border ${cert.badgeColor}`}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold tracking-wide uppercase text-slate-800 dark:text-white block">
                      {cert.org}
                    </span>
                    {cert.partner && (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                        via {cert.partner}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5 shrink-0">
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-neon-cyan transition-colors duration-200 min-h-[48px]">
                  {cert.name}
                </h3>
                
                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="text-[10px] font-medium text-slate-400 px-1 py-0.5">
                      +{cert.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-5 border-t border-slate-100 dark:border-white/5 mt-5 relative z-10">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate max-w-[120px]" title={`ID: ${cert.id}`}>
                ID: {cert.id.substring(0, 10)}...
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-neon-cyan dark:hover:text-neon-cyan px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 focus:outline-none"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-neon-blue hover:text-neon-purple px-2.5 py-1 rounded-lg bg-neon-blue/10 hover:bg-neon-blue/20 transition-all duration-200 focus:outline-none"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CERTIFICATE MODAL VIEW */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            
            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white text-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col justify-between my-8 max-h-[92vh] overflow-y-auto"
            >
              {/* Top Modal Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Verified Credential Preview</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Official Link
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* RENDER DYNAMIC CERTIFICATE BY ORGANISATION */}
              <div className="w-full relative bg-gradient-to-b from-slate-50 to-white border-2 border-slate-200 p-6 md:p-10 rounded-xl shadow-inner select-text">
                
                {/* 1. GOOGLE CLOUD CYBERSECURITY */}
                {selectedCert.type === 'google' && (
                  <div className="font-sans space-y-6 text-slate-800 text-center relative min-h-[380px] flex flex-col justify-between">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 font-bold text-xl text-[#3c4043]">
                        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
                          <path d="M19 15H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 4.14 9.94 3 12 3c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853"/>
                          <path d="M19.35 10.04c-.1-.5-.25-.97-.47-1.42l-1.44.72c.16.32.27.67.34 1.03l1.57-.33z" fill="#FBBC05"/>
                          <path d="M12 4c.34 0 .67.03 1 .08V2.06c-.33-.04-.66-.06-1-.06-4.97 0-9 4.03-9 9 0 .61.07 1.2.19 1.77l1.56-.33c-.09-.47-.13-.95-.13-1.44 0-3.87 3.13-7 7-7z" fill="#EA4335"/>
                        </svg>
                        <span className="tracking-tight text-2xl font-black">Google Cloud</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full">
                        Professional Certificate
                      </span>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">This is to certify that</p>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight border-b-2 border-slate-200 pb-2 max-w-md mx-auto">
                        VASANTHARAJ S
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        has successfully completed all requirements and demonstrated proficiency in
                      </p>
                      <h4 className="text-2xl font-black text-[#1a73e8] tracking-tight">
                        {selectedCert.name}
                      </h4>
                      <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                        Demonstrating foundational mastery in cloud infrastructure security, network protection strategies, threat modeling, and incident response architecture.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-6 border-t border-slate-200 text-left">
                      <div className="text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-blue-600">{selectedCert.id}</span></p>
                        <p>Date of issue: <span className="font-semibold text-slate-700">{selectedCert.date}</span></p>
                        <p>Verified on: <span className="font-semibold text-slate-700">Credly Acclaim Registry</span></p>
                      </div>
                      
                      <div className="text-center sm:text-right">
                        <div className="w-32 border-b border-slate-400 mx-auto sm:ml-auto mb-1">
                          <span className="font-serif italic text-lg text-slate-700 font-bold">Google Cloud</span>
                        </div>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                          Authorized Google Cloud Program
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. TATA GENAI DATA ANALYTICS */}
                {selectedCert.type === 'tata' && (
                  <div className="font-sans space-y-6 text-slate-800 text-center relative min-h-[380px] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <div className="text-left">
                        <span className="text-2xl font-black text-[#004f9e] tracking-tight uppercase">TATA</span>
                        <p className="text-[10px] font-bold text-slate-500 tracking-wider">TATA INSIGHTS AND QUANTS</p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 text-xs font-bold">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>Forage Simulation</span>
                      </div>
                    </div>

                    <div className="space-y-4 py-2">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Certificate of Completion</p>
                      <p className="text-xs text-slate-500">Proudly presented to</p>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        VASANTHARAJ S
                      </h3>
                      <p className="text-xs text-slate-500">for completing the practical job simulation program for</p>
                      <h4 className="text-xl md:text-2xl font-black text-[#004f9e] max-w-xl mx-auto">
                        GenAI Powered Data Analytics Job Simulation
                      </h4>
                      <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Covering exploratory data analytics, predictive intelligence modeling, AI prompting for metric generation, and executive business storytelling.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-6 border-t border-slate-200 text-left">
                      <div className="text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-slate-800">{selectedCert.id}</span></p>
                        <p>Date of issue: <span className="font-semibold text-slate-700">{selectedCert.date}</span></p>
                      </div>

                      <div className="text-right">
                        <p className="font-serif italic text-base text-slate-800 font-bold">Tata Analytics Lead</p>
                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                          Tata Insights and Quants
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. WELLS FARGO SOFTWARE ENGINEERING */}
                {selectedCert.type === 'wellsfargo' && (
                  <div className="font-sans space-y-6 text-slate-800 text-center relative min-h-[380px] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b-2 border-red-600 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#d71e28] tracking-tight">WELLS FARGO</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase bg-red-50 text-red-700 border border-red-200 px-2.5 py-1 rounded">
                        Software Engineering
                      </span>
                    </div>

                    <div className="space-y-4 py-2">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Certificate of Achievement</p>
                      <p className="text-xs text-slate-500">This certifies that</p>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        VASANTHARAJ S
                      </h3>
                      <p className="text-xs text-slate-500">has successfully completed</p>
                      <h4 className="text-xl md:text-2xl font-black text-[#d71e28] max-w-xl mx-auto">
                        Software Engineering Job Simulation
                      </h4>
                      <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Hands-on practical development covering software architectural patterns, algorithmic optimization, data models, and enterprise software engineering workflows.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-6 border-t border-slate-200 text-left">
                      <div className="text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-slate-800">{selectedCert.id}</span></p>
                        <p>Date of issue: <span className="font-semibold text-slate-700">{selectedCert.date}</span></p>
                      </div>

                      <div className="text-right">
                        <p className="font-serif italic text-base text-slate-800 font-bold">Engineering Practice Head</p>
                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                          Wells Fargo Global Tech
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. DELOITTE DATA ANALYTICS */}
                {selectedCert.type === 'deloitte' && (
                  <div className="font-sans space-y-6 text-slate-800 text-center relative min-h-[380px] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-2xl font-black text-slate-900 tracking-tight">Deloitte</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#86BC25] mt-2" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Australia Job Simulation
                      </span>
                    </div>

                    <div className="space-y-4 py-2">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Practical Experience Certificate</p>
                      <p className="text-xs text-slate-500">Awarded to</p>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        VASANTHARAJ S
                      </h3>
                      <p className="text-xs text-slate-500">for completing professional analyst simulations in</p>
                      <h4 className="text-xl md:text-2xl font-black text-slate-900 max-w-xl mx-auto">
                        Data Analytics Job Simulation
                      </h4>
                      <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Demonstrating practical competence in data preparation, forensic data analysis, interactive dashboard visualization, and data-driven client consulting.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-6 border-t border-slate-200 text-left">
                      <div className="text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-slate-800">{selectedCert.id}</span></p>
                        <p>Date of issue: <span className="font-semibold text-slate-700">{selectedCert.date}</span></p>
                      </div>

                      <div className="text-right">
                        <p className="font-serif italic text-base text-slate-800 font-bold">Deloitte Tech Lead</p>
                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                          Deloitte Australia
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. VISTA EQUITY PARTNERS AI IN ACTION */}
                {selectedCert.type === 'vista' && (
                  <div className="font-sans space-y-6 text-slate-800 text-center relative min-h-[380px] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                      <div className="text-left">
                        <span className="text-xl font-extrabold text-[#111827] tracking-tight uppercase">VISTA EQUITY PARTNERS</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded">
                        AI in Action
                      </span>
                    </div>

                    <div className="space-y-4 py-2">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Certificate of Completion</p>
                      <p className="text-xs text-slate-500">Conferred upon</p>
                      <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        VASANTHARAJ S
                      </h3>
                      <p className="text-xs text-slate-500">for outstanding completion of</p>
                      <h4 className="text-xl md:text-2xl font-black text-purple-900 max-w-xl mx-auto">
                        AI in Action Job Simulation
                      </h4>
                      <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Applying artificial intelligence solutions, machine learning evaluation frameworks, prompt architectures, and real-world AI enterprise implementation strategies.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 pt-6 border-t border-slate-200 text-left">
                      <div className="text-[10px] text-slate-500 space-y-1">
                        <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-slate-800">{selectedCert.id}</span></p>
                        <p>Date of issue: <span className="font-semibold text-slate-700">{selectedCert.date}</span></p>
                      </div>

                      <div className="text-right">
                        <p className="font-serif italic text-base text-slate-800 font-bold">Vista Talent Team</p>
                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                          Vista Equity Partners
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
