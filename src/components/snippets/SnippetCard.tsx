'use client';

import type { Snippet } from './snippets.types';

type Props = {
    snippet: Snippet;
};

export function SnippetCard({ snippet }: Props) {
    const preview = snippet.content.split('\n')[0];

    return (
        <div className="relative bg-dark-900 rounded-2xl border border-dark-50 p-4 shadow-sm hover:bg-zinc-800 transition overflow-hidden ">
            <h2 className="text-sm font-semibold text-white mb-2 line-clamp-2">
                {snippet.title}
            </h2>
            <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                {preview}
            </p>

            <>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[5%] bg-dark-900"/>
                <div
                    className="pointer-events-none absolute bottom-[10%] left-0 right-0 h-[50%] bg-gradient-to-t from-dark-900 to-transparent"/>
            </>
        </div>


    );
}