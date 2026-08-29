import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const bootLogs = [
  "SYSTEM BOOT: Initiating Vasantharaj.OS v4.0.0...",
  "MODEL_INIT: Loading generative AI frameworks...",
  "DATA_LOAD: Extracting profile metrics (B.Tech AI & DS)...",
  "TENSOR_LOAD: Allocating weights & biases (8.21 CGPA)...",
  "COMPILER: Compiling core Data Structures & Algorithms...",
  "ROUTING: Mapping projects to graph nodes...",
  "SUCCESS: Neural sync complete. Welcome, Recruiter."
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Small delay after 100%
          return 100;
        }
        // Accelerate/decelerate realistically
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    // Determine which log to show based on progress percentage
    const step = Math.floor(100 / bootLogs.length);
    const currentStep = Math.floor(progress / step);
    setLogIndex(Math.min(currentStep, bootLogs.length - 1));
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014] text-white p-6 font-mono selection:bg-neon-blue/30"
    >


      <div className="w-full max-w-lg space-y-8 relative z-10">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-white/40 ml-2">ai-ds-model.py</span>
        </div>

        {/* Boot Sequence Log output */}
        <div className="h-28 flex flex-col justify-end space-y-1 text-xs text-left">
          {bootLogs.slice(0, logIndex + 1).map((log, index) => {
            const isLatest = index === logIndex;
            const isSuccess = log.startsWith("SUCCESS");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${isLatest ? "text-neon-blue" : "text-white/60"} ${isSuccess ? "text-neon-cyan font-bold" : ""}`}
              >
                &gt; {log}
              </motion.div>
            );
          })}
          <div className="typing-caret h-4 w-1 bg-neon-blue inline-block animate-pulse" />
        </div>

        {/* Numeric percentage */}
        <div className="flex justify-between items-end">
          <span className="text-3xl font-extrabold text-white tracking-wider">
            {progress}<span className="text-neon-cyan font-normal text-lg">%</span>
          </span>
          <span className="text-xs text-white/50">SYSTEM SYNCHRONIZATION</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
