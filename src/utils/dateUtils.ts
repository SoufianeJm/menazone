export function formatRelativeTime(date: Date | string): string {
    const now = new Date();
    const target = typeof date === 'string' ? new Date(date) : date;
    const diffSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);

    const units = [
        { name: 'year', seconds: 31536000 },
        { name: 'month', seconds: 2592000 },
        { name: 'day', seconds: 86400 },
        { name: 'hour', seconds: 3600 },
        { name: 'minute', seconds: 60 },
        { name: 'second', seconds: 1 },
    ];

    for (const unit of units) {
        const interval = Math.floor(diffSeconds / unit.seconds);
        if (Math.abs(interval) >= 1) {
            const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
            return rtf.format(interval, unit.name as Intl.RelativeTimeFormatUnit);
        }
    }
    return 'just now';
}