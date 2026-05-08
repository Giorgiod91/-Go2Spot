import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import MapClientComponent from "./_components/MapClientComponent";
import { ChooseProvider } from "context/ChooseContext";

export const metadata: Metadata = {
  title: "Go2Spot — Discover the Best Places",
  description: "Find must-visit locations, hidden gems, and photo-worthy spots in any city.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme="myapp" lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <MapClientComponent>
            <ChooseProvider>{children}</ChooseProvider>
          </MapClientComponent>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
