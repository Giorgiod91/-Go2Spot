import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import NavBar from "./_components/NavBar";
import Arrow from "./_components/Arrow";
import ShowCase from "./_components/ShowCase";
import PersonalRecommendation from "./_components/PersonalRecommendation";
import SoloTravel from "./_components/SoloTravel";
import ImageCard from "./_components/ImageCard";

import { object } from "zod";
import ShowCards from "./_components/ShowCards";
import GridLayout from "./_components/GridLayout";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col gap-5 bg-glassBg">
      <NavBar />

      <section className="flex min-h-screen w-full justify-center">
        <LandingPage />
      </section>

      <section id="showcase" className="h-screen"></section>

      <section id="solo" className="h-screen">
        <SoloTravel />
      </section>

      <section className="h-screen bg-base-200"></section>

      <section id="recommendation" className="min-h-screen">
        <PersonalRecommendation />
      </section>

      <section className="min-h-screen">
        <ShowCards />
      </section>
      <section className="min-h-screen bg-[#0a0a0a]">
        <GridLayout />
      </section>
    </main>
  );
}
