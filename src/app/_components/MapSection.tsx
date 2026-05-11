"use client";

import dynamic from "next/dynamic";

// ShowCase uses Google Maps, which must only render client-side
const ShowCase = dynamic(() => import("./ShowCase"), { ssr: false });

export default function MapSection() {
  return <ShowCase />;
}
