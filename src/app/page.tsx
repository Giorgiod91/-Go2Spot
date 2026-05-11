export const dynamic = "force-dynamic";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import NavBar from "./_components/NavBar";
import PersonalRecommendation from "./_components/PersonalRecommendation";
import SoloTravel from "./_components/SoloTravel";
import ShowCards from "./_components/ShowCards";
import MapSection from "./_components/MapSection";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-slate-50">
        <NavBar />

        <section id="home" className="flex min-h-screen w-full justify-center bg-white">
          <LandingPage />
        </section>

        <section id="solo" className="min-h-screen">
          <SoloTravel />
        </section>

        <section id="recommendation" className="min-h-screen bg-slate-50">
          <PersonalRecommendation />
        </section>

        <section id="explore" className="bg-white py-4">
          <ShowCards />
        </section>

        <section id="map" className="bg-slate-50 px-4 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7F5AF0]">
                Map View
              </p>
              <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                See It on the Map
              </h2>
              <p className="mt-2 text-slate-500">
                Click any spot card above to pin it — or tap markers on the map to explore.
              </p>
            </div>
            <MapSection />
          </div>
        </section>

        <footer className="border-t border-slate-100 bg-white py-8 text-center text-sm text-slate-400">
          © 2025 Go2Spot — Discover the best places, everywhere.
        </footer>
      </main>
    </HydrateClient>
  );
}
