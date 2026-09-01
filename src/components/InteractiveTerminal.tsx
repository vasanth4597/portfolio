import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { Terminal, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audio } from '../utils/audioFX';

interface OutputLine {
  text: string;
  type: 'cmd' | 'output' | 'success' | 'warning' | 'info' | 'ascii';
}

const initialHistory: OutputLine[] = [
  { text: '==========================================================', type: 'ascii' },
  { text: '   VASANTHARAJ.OS // NEURAL CLI TERMINAL v4.2.0-STABLE', type: 'ascii' },
  { text: '   Type "help" to explore commands or use quick buttons.', type: 'info' },
  { text: '==========================================================', type: 'ascii' },
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<OutputLine[]>(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    audio.playClick();

    const newHistory: OutputLine[] = [...history, { text: `$ ${rawCmd}`, type: 'cmd' }];

    if (!cmd) {
      setHistory(newHistory);
      return;
    }

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'AVAILABLE COMMANDS:', type: 'info' },
          { text: '  about        - View professional biography & student focus', type: 'output' },
          { text: '  skills       - View full technical competencies matrix', type: 'output' },
          { text: '  projects     - List top production & academic builds', type: 'output' },
          { text: '  experience   - Display engineering internship details', type: 'output' },
          { text: '  cgpa         - Check current university academic standing', type: 'output' },
          { text: '  socials      - Print GitHub, LinkedIn, and Email', type: 'output' },
          { text: '  clear        - Clear the terminal screen', type: 'output' },
          { text: '  sudo hire    - Execute hiring contract agreement 🎉', type: 'success' }
        );
        break;

      case 'about':
        newHistory.push(
          { text: 'Vasantharaj S - B.Tech AI & Data Science Student (2023 - 2027)', type: 'info' },
          { text: 'College: Annai Mira College of Engineering and Technology', type: 'output' },
          { text: 'Passionate about Generative AI, Full-Stack Web Apps, and Algorithmic Problem Solving in Java & Python.', type: 'output' }
        );
        break;

      case 'skills':
        newHistory.push(
          { text: 'LANGUAGES:   Java (Advanced OOP), Python (ML/Data), SQL, JavaScript (ES6+)', type: 'output' },
          { text: 'FRONTEND:    React.js, Tailwind CSS, Three.js, Framer Motion, HTML5/CSS3', type: 'output' },
          { text: 'AI & DATA:   Generative AI, Prompt Engineering, RAG, Gemini API, Pandas, NumPy', type: 'output' },
          { text: 'CORE CS:     Data Structures & Algorithms, DBMS, Object-Oriented Programming', type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push(
          { text: '1. ATS Resume Analyzer  -> AI powered resume keyword scoring (React, Tailwind, Gemini)', type: 'info' },
          { text: '2. Fitness Tracker      -> Activity & calorie burn tracker (React, Framer Motion)', type: 'info' },
          { text: '3. Price Comparison Hub -> Multi-platform smart scraping engine', type: 'info' }
        );
        break;

      case 'experience':
        newHistory.push(
          { text: 'ROLE:     Software Engineer Intern', type: 'info' },
          { text: 'COMPANY:  Mimber Academy (Remote)', type: 'output' },
          { text: 'STACK:    React.js, Modern UI component libraries, Git CI/CD', type: 'output' }
        );
        break;

      case 'cgpa':
        newHistory.push({
          text: '★ Cumulative CGPA: 8.21 / 10 (Maintained high academic standing across all semesters)',
          type: 'success',
        });
        break;

      case 'socials':
        newHistory.push(
          { text: 'GitHub:   https://github.com/vasanth4597', type: 'output' },
          { text: 'LinkedIn: https://www.linkedin.com/in/vasantharaj-s45', type: 'output' },
          { text: 'Email:    vasanth.ai1931@gmail.com', type: 'output' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire':
      case 'hire':
        audio.playSuccess();
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#bd00ff', '#00ffd1', '#ff007a'],
        });
        newHistory.push(
          { text: '⚡ ROOT PRIVILEGES GRANTED: INITIATING RECRUITER TRANSMISSION ⚡', type: 'success' },
          { text: 'Congratulations! You just made the best decision for your engineering team.', type: 'success' },
          { text: 'Direct line: vasanth.ai1931@gmail.com | Status: Open for Opportunities', type: 'info' }
        );
        break;

      default:
        newHistory.push({
          text: `Command not recognized: "${rawCmd}". Type "help" for a list of valid commands.`,
          type: 'warning',
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    audio.playKey();
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-300 font-mono ${
        isExpanded ? 'h-[500px]' : 'h-[360px]'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-1.5 ml-2 text-xs text-slate-300 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
            <span>vasantharaj@dev-workspace:~$</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title={isExpanded ? 'Contract Terminal' : 'Expand Terminal'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Quick Action Chips Bar */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold shrink-0 mr-1">Quick:</span>
        {['help', 'about', 'skills', 'projects', 'cgpa', 'sudo hire'].map((quickCmd) => (
          <button
            key={quickCmd}
            onClick={() => executeCommand(quickCmd)}
            className={`shrink-0 px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
              quickCmd === 'sudo hire'
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-sm hover:scale-105'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-neon-cyan border border-white/5'
            }`}
          >
            {quickCmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen / Output Body */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="p-4 overflow-y-auto space-y-1.5 text-xs h-[calc(100%-88px)] bg-slate-950/70"
      >
        {history.map((line, idx) => {
          let style = 'text-slate-300';
          if (line.type === 'cmd') style = 'text-neon-blue font-bold';
          if (line.type === 'success') style = 'text-neon-cyan font-bold';
          if (line.type === 'warning') style = 'text-amber-400';
          if (line.type === 'info') style = 'text-neon-purple font-semibold';
          if (line.type === 'ascii') style = 'text-slate-500';

          return (
            <div key={idx} className={`leading-relaxed break-words ${style}`}>
              {line.text}
            </div>
          );
        })}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1 text-slate-100">
          <span className="text-neon-cyan font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type command (e.g. 'skills' or 'sudo hire')..."
            className="flex-1 bg-transparent border-none outline-none text-xs text-white font-mono placeholder:text-slate-600 focus:ring-0"
            autoFocus
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="text-slate-500 hover:text-neon-cyan p-1"
            title="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
