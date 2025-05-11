import { isToday, isTomorrow, format, parseISO, startOfDay } from "date-fns";
import {SanityProtest} from "@/features/protests/types";


export const CITIES: string[] = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Tangier',
    'Fes',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra',
    'Tetouan'
];

// Date utility functions
export function formatRelativeDate(date: Date): string {
    if (isToday(date)) return "Today";
    if (isTomorrow(date)) return "Tomorrow";
    return format(date, "MMM d"); // e.g., "May 12"
}

export function getDayOfWeek(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export interface GroupedProtest {
    date: Date;
    formattedDate: string;
    dayOfWeek: string;
    protests: SanityProtest[];
}




export function groupProtestsByDay(protests: SanityProtest[]): GroupedProtest[] {
    const groupedMap = new Map<string, GroupedProtest>();

    protests.forEach(protest => {
        // Ensure local date without time zone distortion
        const parsed = startOfDay(parseISO(protest.date));
        const key = format(parsed, "yyyy-MM-dd");

        if (!groupedMap.has(key)) {
            groupedMap.set(key, {
                date: parsed,
                formattedDate: formatRelativeDate(parsed),
                dayOfWeek: getDayOfWeek(parsed),
                protests: []
            });
        }

        groupedMap.get(key)?.protests.push(protest);
    });

    return Array.from(groupedMap.values()).sort(
        (a, b) => a.date.getTime() - b.date.getTime()
    );
}
