'use client';

import {ProtestCallToAction, UpcomingProtestsSection} from "@/features/protests";

export default function Home() {

  return (
      <main className="flex flex-col gap-5 mt-1">
          <ProtestCallToAction />
          <UpcomingProtestsSection />
      </main>
  );
}
