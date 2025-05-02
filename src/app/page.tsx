'use client';

import { SNIPPETS } from '@/components/snippets/snippets.config';
import { SnippetCard } from '@/components/snippets/SnippetCard';

export default function Home() {
  const previewSnippets = SNIPPETS.slice(0, 4);

  return (
      <main className="space-y-6">
        <section>
            <h2 className="text-sm font-semibold mx-3 my-4 text-white/60">
                Snippets
            </h2>

          <div className="grid grid-cols-2 gap-2 mt-1">
            {previewSnippets.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </section>

        {/* Other home sections go here... */}
      </main>
  );
}
