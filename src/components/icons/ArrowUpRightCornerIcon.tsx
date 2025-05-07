import { SVGProps } from 'react';

export function ArrowUpRightCornerIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" />
        </svg>
    );
}
