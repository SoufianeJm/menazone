'use client';

import type { Snippet } from './snippets.types';

type Props = {
    snippet: Snippet;
};

export function SnippetCard({ snippet }: Props) {
    const preview = snippet.content.split('\n')[0]; // first paragraph as a preview

    return (
        <div className="bg-dark-900 rounded-2xl border border-dark-50 p-4 shadow-sm hover:bg-zinc-800 transition">
            <h2 className="text-sm font-semibold text-white mb-2">
                {snippet.title}
            </h2>
            <p className="text-xs text-white/60 leading-relaxed line-clamp-4">
                {preview}
            </p>
        </div>
    );
}
