import { useState } from 'react';
import type { TechBadge as TechBadgeType } from '../data/projects';

interface TechBadgeProps {
  tech: TechBadgeType;
  index: number;
}

export default function TechBadge({ tech, index }: TechBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: `fadeUp 0.5s ease ${index * 60}ms forwards`,
        opacity: 0,
      }}
    >
      <div
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default ${
          hovered
            ? 'border-[#1E40AF]/30 bg-[#DBEAFE] shadow-md -translate-y-1'
            : 'border-[#E5E5E5] bg-white hover:border-[#1E40AF]/20'
        }`}
      >
        {/* Icon Circle */}
        <span
          className="flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold text-white transition-transform duration-300"
          style={{
            background: tech.color,
            transform: hovered ? 'scale(1.1) rotate(-3deg)' : 'scale(1)',
          }}
        >
          {tech.icon}
        </span>
        
        {/* Name */}
        <span className="text-sm font-semibold text-[#0A0A0A]">{tech.name}</span>
      </div>
    </div>
  );
}
