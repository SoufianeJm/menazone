import {ProtestCallToAction, UpcomingProtestsSection} from "@/features/protests";
import Component from "@/features/protests/components/comp-296";

export default function Home() {

  return (
      <main className="flex flex-col gap-5 mt-1">
          <Component />
          <UpcomingProtestsSection />
      </main>
  );
}
