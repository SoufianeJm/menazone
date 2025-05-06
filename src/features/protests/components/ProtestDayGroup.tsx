import React from 'react';
import ProtestCard, { ProtestCardProps } from './ProtestCard';

export interface ProtestDayGroupProps {
  date: string; // e.g. "Today", "Tomorrow", "May 7"
  protests: ProtestCardProps[];
}

const ProtestDayGroup: React.FC<ProtestDayGroupProps> = ({ date, protests }) => {
  return (
    <div className="w-full">
      {/* Date header will go here in future implementation */}
        <h2 className="text-base font-semibold text-[var(--color-txt-secondary)] mb-3 px-1">
            {date}
        </h2>

        <div className="flex flex-col gap-4">
        {protests.map((protest, index) => (
          <ProtestCard
            key={index}
            title={protest.title}
            organizer={protest.organizer}
            time={protest.time}
            location={protest.location}
            imageUrl={protest.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProtestDayGroup;
