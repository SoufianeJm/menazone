import { isToday, isTomorrow, format, parseISO, startOfDay } from "date-fns";


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

// Mock data with ISO date strings (similar to what you'd get from an API)
export const MOCK_PROTEST_ITEMS = [
    {
        id: 1,
        date: "2025-05-13", // ISO date string
        title: "Student solidarity for gaza",
        action: "opened a new issue",
        description: "I'm having trouble with the new component library. It's not rendering properly.",
        iconName: "Megaphone",
        organizer: "students",
        time: "10:00 AM",
        location: "casablanca",
        imageUrl: "/images/protest-3.jpg"
    },
    {
        id: 2,
        date: "2025-05-11", // ISO date string
        title: "Workers for palestine",
        action: "commented on",
        description: "Hey Hannah, I'm having trouble with the new component library. It's not rendering properly.",
        iconName: "Megaphone",
        organizer: "students",
        time: "10:00 AM",
        location: "casablanca",
        imageUrl: "/images/protest-4.jpg"
    },
    {
        id: 3,
        date: "2025-05-12", // ISO date string
        title: "March to gaza",
        action: "assigned you to",
        description: "The new component library is not rendering properly. Can you take a look?",
        iconName: "Megaphone",
        organizer: "students",
        time: "10:00 AM",
        location: "casablanca",
        imageUrl: "/images/protest-1.webp"
    },
    {
        id: 4,
        date: "2025-05-12", // ISO date string
        title: "From the river to the sea",
        action: "closed the issue",
        description: "The issue has been fixed. Please review the changes.",
        iconName: "Megaphone",
        organizer: "students",
        time: "10:00 AM",
        location: "casablanca",
        imageUrl: "/images/protest-2.webp"
    },
];

export type ProtestItemData = typeof MOCK_PROTEST_ITEMS[0];

export interface GroupedProtest {
    date: Date;
    formattedDate: string;
    dayOfWeek: string;
    protests: ProtestItemData[];
}




export function groupProtestsByDay(protests: ProtestItemData[]): GroupedProtest[] {
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
