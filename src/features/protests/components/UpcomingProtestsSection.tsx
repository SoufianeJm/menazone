import React from 'react';
import { UpcomingProtestsHeader } from './UpcomingProtestsHeader';

export interface UpcomingProtestsSectionProps {
  className?: string;
  city?: string;
}

export function UpcomingProtestsSection({
  className = '',
  city,
}: UpcomingProtestsSectionProps) {
  return (
    <section className={`bg-black ${className}`}>
      <UpcomingProtestsHeader city={city} />
      {/* Protest cards will be added here in the future */}
    </section>
  );
}
