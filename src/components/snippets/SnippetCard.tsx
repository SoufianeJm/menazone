'use client';

import type { Snippet } from './snippets.types';
import { SnippetPreviewImages } from './SnippetPreviewImages';

interface SnippetCardProps {
    snippet: Snippet;
}

export function SnippetCard({ snippet }: SnippetCardProps) {
    return (
        <div className="relative bg-dark-900 rounded-2xl border border-dark-50 shadow-sm hover:bg-zinc-800 transition overflow-hidden aspect-square flex flex-col justify-end">
            {/* Image Stack at Bottom */}
            <div className="absolute bottom-0 w-full z-0">
                <SnippetPreviewImages />
            </div>

            {/* Title on top of images */}
            <div className="relative z-10 p-4 bg-gradient-to-t bg-dark-900">
                <h2 className="text-sm font-semibold text-white line-clamp-2">
                    {snippet.title}
                </h2>
            </div>
        </div>
    );
}
