import { NavArrowDown } from 'iconoir-react';
import React from 'react';

export interface UpcomingProtestsHeaderProps {
  city?: string;
  className?: string;
}

export function UpcomingProtestsHeader({
  city = 'Casablanca',
  className = '',
}: UpcomingProtestsHeaderProps) {
  return (
    <div className={`flex justify-between items-center py-4 ${className}`}>
      <h2 className="text-base font-semibold text-txt-main">Upcoming Protests</h2>
      
      <button 
        className="flex items-center gap-1 text-base font-semibold text-white/60 hover:text-white/80 transition"
        aria-label={`Change city from ${city}`}
      >
        <span>{city}</span>
        <NavArrowDown width={16} height={16} />
      </button>
    </div>
  );
}
