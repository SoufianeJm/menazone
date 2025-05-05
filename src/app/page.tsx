'use client';

import {ProtestCallToAction, UpcomingProtestsSection} from "@/features/protests";

export default function Home() {

  return (
      <main className="space-y-6">
            <ProtestCallToAction />
          <UpcomingProtestsSection />
      </main>
  );
}
