import { SVGProps } from 'react';

export function XmarkIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M6 12H12M18 12H12M12 12V6M12 12V18" />
        </svg>
    );
}
