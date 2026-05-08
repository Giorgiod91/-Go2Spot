export const dynamic = "force-dynamic";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import NavBar from "./_components/NavBar";
import PersonalRecommendation from "./_components/PersonalRecommendation";
import SoloTravel from "./_components/SoloTravel";
import ShowCards from "./_components/ShowCards";
import GridLayout from "./_components/GridLayout";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">
        <NavBar />

        <section className="flex min-h-screen w-full justify-center">
          <LandingPage />
        </section>

        <section className="min-h-screen bg-black">
          <GridLayout />
        </section>

        <section id="solo" className="min-h-screen">
          <SoloTravel />
        </section>

        <section id="recommendation" className="min-h-screen">
          <PersonalRecommendation />
        </section>

        <section className="min-h-screen py-16">
          <ShowCards />
        </section>
      </main>
    </HydrateClient>
  );
}
