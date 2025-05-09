import React from 'react';
import { UpcomingProtestsHeader } from '@/features/protests';
import ProtestDayGroup from './ProtestDayGroup';
import { fetchProtests } from '@/lib/fetchProtests';
import { groupProtestsByDay } from '@/lib/groupProtests';


export interface UpcomingProtestsSectionProps {
  className?: string;
  city?: string;
}

export async function UpcomingProtestsSection({
                                                  className = '',
                                                  city,
                                              }: UpcomingProtestsSectionProps) {
    const protests = await fetchProtests();
    const grouped = groupProtestsByDay(protests);

    return (
        <section className={`bg-[var(--color-bg)] ${className} flex flex-col gap-3`}>
            <UpcomingProtestsHeader city={city} />
            <div className="flex flex-col gap-4">
                {Object.entries(grouped).map(([date, group]) => (
                    <ProtestDayGroup key={date} date={date} protests={group} />
                ))}
            </div>
        </section>
    );
}
