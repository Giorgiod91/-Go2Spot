"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

const MapClientComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY!}>
      {children}
    </APIProvider>
  );
};

export default MapClientComponent;
