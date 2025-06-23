
import ProtestCTA from "@/features/protests/components/ProtestCTA";
import {UpcomingProtestsSection} from "@/features/protests/components/UpcomingProtestsSection";

export default function Home() {

  return (
      <main className="flex flex-col gap-5 mt-1">
          <ProtestCTA />
          <UpcomingProtestsSection />
      </main>
  );
}
