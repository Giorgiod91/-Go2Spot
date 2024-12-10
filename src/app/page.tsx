import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import NavBar from "./_components/NavBar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      <section className="flex min-h-screen w-full justify-center">
        <LandingPage />
      </section>
    </main>
  );
}
