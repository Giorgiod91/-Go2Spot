import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import NavBar from "./_components/NavBar";
import Arrow from "./_components/Arrow";
import ShowCase from "./_components/ShowCase";
import PersonalRecommendation from "./_components/PersonalRecommendation";
import SoloTravel from "./_components/SoloTravel";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />

      <section className="flex min-h-screen w-full justify-center">
        <LandingPage />
      </section>

      <section id="showcase" className="h-screen">
        <ShowCase />
      </section>

      <section id="recommendation" className="h-screen">
        <PersonalRecommendation />
      </section>
      <section id="solo" className="h-screen">
        <SoloTravel />
      </section>
    </main>
  );
}
