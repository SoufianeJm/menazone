import { format, isToday, isTomorrow } from 'date-fns';
import { Protest } from '@/types/protest';
import { ProtestCardProps } from '@/features/protests/components/ProtestCard';

export function groupProtestsByDay(protests: Protest[]) {
    const groups: Record<string, ProtestCardProps[]> = {};

    protests.forEach((p) => {
        const date = new Date(p.date);
        let label = format(date, 'MMMM d');

        if (isToday(date)) label = 'Today';
        else if (isTomorrow(date)) label = 'Tomorrow';

        const formatted: ProtestCardProps = {
            title: p.title,
            organizer: p.organizer,
            time: format(date, 'HH:mm'),
            location: p.location?.city ?? '',
            imageUrl: p.image?.asset?.url ?? '/fallback.jpg',
        };

        if (!groups[label]) groups[label] = [];
        groups[label].push(formatted);
    });

    return groups;
}
