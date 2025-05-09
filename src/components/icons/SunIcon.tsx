import { SVGProps } from 'react';

export function SunIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
            <path d="M22 12L23 12" />
            <path d="M12 2V1" />
            <path d="M12 23V22" />
            <path d="M20 20L19 19" />
            <path d="M20 4L19 5" />
            <path d="M4 20L5 19" />
            <path d="M4 4L5 5" />
            <path d="M1 12L2 12" />
        </svg>
    );
}
