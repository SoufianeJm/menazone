'use client';

import { SNIPPETS } from './snippets.config';
import { SnippetCard } from './SnippetCard';

export function SnippetGrid() {
    return (
        <div className="grid grid-cols-2 gap-2">
            {SNIPPETS.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
        </div>
    );
}
