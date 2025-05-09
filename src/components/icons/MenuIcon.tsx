import { SVGProps } from 'react';

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-zinc-900 dark:text-white transition"
            {...props}
        >
            <path d="M3 5H11" />
            <path d="M3 12H16" />
            <path d="M3 19H21" />
        </svg>
    );
}
