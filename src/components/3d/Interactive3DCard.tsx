import { useState, useRef, type ReactNode, type MouseEvent } from 'react';
import { audio } from '../../utils/audioFX';

interface Interactive3DCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // Max tilt in degrees (default 12)
  glareOpacity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export default function Interactive3DCard({
  children,
  className = '',
  maxTilt = 10,
  glareOpacity = 0.15,
  glowColor = 'rgba(0, 240, 255, 0.25)',
  onClick,
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [transform, setTransform] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: glareOpacity });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    audio.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transform,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`relative overflow-hidden rounded-2xl transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl' : ''
      } ${className}`}
    >
      {/* Specular holographic light sheen reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.2) 0%, ${glowColor} 40%, transparent 80%)`,
          opacity: glarePosition.opacity,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Children content with 3D translation */}
      <div className="relative z-10 w-full h-full" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
}
