import React from 'react';
import { UpcomingProtestsHeader } from '@/features/protests';
import ProtestDayGroup from './ProtestDayGroup';
import mockProtestDays from '../data/mockProtests';

export interface UpcomingProtestsSectionProps {
  className?: string;
  city?: string;
}

export function UpcomingProtestsSection({
  className = '',
  city,
}: UpcomingProtestsSectionProps) {
  return (
    <section className={`bg-black ${className} flex flex-col gap-3`}>
      <UpcomingProtestsHeader city={city} />
      <div className=" flex flex-col gap-4">
        {mockProtestDays.map((dayGroup, index) => (
          <ProtestDayGroup 
            key={index}
            date={dayGroup.date}
            protests={dayGroup.protests}
          />
        ))}
      </div>
    </section>
  );
}
