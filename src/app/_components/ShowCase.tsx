"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Map, Marker, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import { useChoose } from "context/ChooseContext";
import { CityData, ACTIVITY_META, type Spot } from "./HardCodedData";
import { MapPin } from "lucide-react";

// Auto-pans the map whenever chosenSpot changes
function MapPanner() {
  const map = useMap();
  const { chosenSpot } = useChoose();

  useEffect(() => {
    if (!map || !chosenSpot?.lat) return;
    map.panTo({ lat: chosenSpot.lat, lng: chosenSpot.lng });
    map.setZoom(15);
  }, [map, chosenSpot]);

  return null;
}

const CITY_CENTERS: Record<string, { lat: number; lng: number; zoom: number }> = {
  Barcelona: { lat: 41.397, lng: 2.163, zoom: 13 },
  London:    { lat: 51.505, lng: -0.09,  zoom: 12 },
  Berlin:    { lat: 52.515, lng: 13.39,  zoom: 12 },
  Munich:    { lat: 48.135, lng: 11.58,  zoom: 13 },
  Amsterdam: { lat: 52.365, lng: 4.883,  zoom: 13 },
};

export default function ShowCase() {
  const { chosenSpot, activeCity } = useChoose();
  const [infoSpot, setInfoSpot] = useState<Spot | null>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  const spots = useMemo(() => CityData[activeCity] ?? [], [activeCity]);
  const center = CITY_CENTERS[activeCity] ?? { lat: 48.137, lng: 11.575, zoom: 12 };

  // Close InfoWindow when chosen spot changes (user picked a new one via cards)
  useEffect(() => {
    if (chosenSpot) setInfoSpot(spots.find((s) => s.title === chosenSpot.title) ?? null);
  }, [chosenSpot, spots]);

  return (
    <div ref={mapSectionRef} className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[#7F5AF0]" />
          <span className="text-sm font-semibold text-slate-600">
            {spots.length} spots in {activeCity}
          </span>
        </div>
        {chosenSpot && (
          <span className="flex items-center gap-1.5 rounded-full bg-[#7F5AF0]/10 px-3 py-1 text-xs font-semibold text-[#7F5AF0]">
            📍 {chosenSpot.title}
          </span>
        )}
      </div>

      {/* Map */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
        <Map
          defaultCenter={center}
          defaultZoom={center.zoom}
          style={{ width: "100%", height: "480px" }}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          mapId="go2spot-map"
        >
          <MapPanner />

          {spots.map((spot) => {
            const isChosen = chosenSpot?.title === spot.title;
            return (
              <Marker
                key={spot.id}
                position={{ lat: spot.lat, lng: spot.lng }}
                title={spot.title}
                onClick={() => setInfoSpot(spot)}
                // Chosen marker uses a slightly different label to stand out
                label={
                  isChosen
                    ? { text: "★", color: "#fff", fontSize: "14px", fontWeight: "bold" }
                    : undefined
                }
              />
            );
          })}

          {infoSpot && (
            <InfoWindow
              position={{ lat: infoSpot.lat, lng: infoSpot.lng }}
              onCloseClick={() => setInfoSpot(null)}
            >
              <div className="max-w-[220px] p-1">
                <p className="mb-1 font-bold text-slate-800">{infoSpot.title}</p>
                <p className="mb-2 text-xs leading-relaxed text-slate-500">{infoSpot.description}</p>
                <div className="flex flex-wrap gap-1">
                  {infoSpot.activities.map((a) => (
                    <span
                      key={a}
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${ACTIVITY_META[a].color}`}
                    >
                      {ACTIVITY_META[a].emoji} {ACTIVITY_META[a].label}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-1">
                  {"★".repeat(Math.floor(infoSpot.rating)).split("").map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                  <span className="ml-1 text-xs text-slate-500">{infoSpot.rating}</span>
                </div>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>

      {/* Spot list below map */}
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => {
          const isChosen = chosenSpot?.title === spot.title;
          return (
            <button
              key={spot.id}
              onClick={() => setInfoSpot(spot)}
              className={`flex items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                isChosen
                  ? "border-[#7F5AF0] bg-[#7F5AF0]/5 shadow-sm"
                  : "border-slate-100 bg-white hover:border-[#7F5AF0]/40 hover:shadow-sm"
              }`}
            >
              <MapPin
                className={`mt-0.5 h-4 w-4 shrink-0 ${isChosen ? "text-[#7F5AF0]" : "text-slate-400"}`}
              />
              <div className="min-w-0">
                <p className={`truncate text-sm font-semibold ${isChosen ? "text-[#7F5AF0]" : "text-slate-700"}`}>
                  {spot.title}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
                  <span className="text-amber-400">★</span> {spot.rating}
                  <span className="mx-1 text-slate-200">·</span>
                  {spot.activities.slice(0, 2).map((a) => ACTIVITY_META[a].emoji).join(" ")}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
