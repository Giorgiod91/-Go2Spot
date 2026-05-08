"use client";
import React, { useEffect, useState } from "react";
import { Map } from "@vis.gl/react-google-maps";
import type { MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import { useChoose } from "context/ChooseContext";

function ShowCase() {
  const { choose } = useChoose();
  const [coordinates, setCoordinates] = useState({
    lat: -33.860664,
    lng: 151.208138,
  });
  const [selectedLocation, setSelectedLocation] = useState("");

  const locationCoordinates = [
    { name: "Sagrada Familia", coords: { lat: 41.4036, lng: 2.1744 } },
    { name: "Park Güell", coords: { lat: 41.4145, lng: 2.1527 } },
    { name: "Casa Batlló", coords: { lat: 41.3916, lng: 2.1649 } },
    {
      name: "Big Ben & Houses of Parliament",
      coords: { lat: 51.5007, lng: -0.1246 },
    },
    { name: "Tower of London", coords: { lat: 51.5081, lng: -0.0759 } },
    { name: "London Eye", coords: { lat: 51.5033, lng: -0.1195 } },
    { name: "Brandenburg Gate", coords: { lat: 52.5163, lng: 13.3777 } },
    { name: "Berlin Wall Memorial", coords: { lat: 52.5355, lng: 13.3904 } },
    { name: "Museum Island", coords: { lat: 52.516, lng: 13.4013 } },
  ];

  const checkWhichIsPicked = (pick: string) => {
    const location = locationCoordinates.find((loc) => loc.name === pick);
    if (location) {
      setCoordinates(location.coords);
      setSelectedLocation(location.name);
    } else {
      setSelectedLocation("Location not found");
    }
  };

  useEffect(() => {
    if (choose) {
      checkWhichIsPicked(choose);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choose]);

  const [userLocation, setUserLocation] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLocation(e.target.value);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 px-4 text-base-content">
      <h1 className="pt-10 text-5xl font-extrabold text-neutral">
        Waypoints Map
      </h1>

      <div className="mt-6 w-full max-w-xl rounded-lg bg-base-200 p-6 shadow-md">
        <h2 className="mb-2 text-lg font-semibold text-primary">
          Your Current Location : {userLocation}
        </h2>
        <input
          value={userLocation}
          onChange={handleChange}
          type="text"
          placeholder="Enter your city or address"
          className="input input-bordered w-full"
        />
        <p className="pt-2 text-sm text-base-content/70">
          {userLocation || "Waiting for input..."}
        </p>
      </div>

      <div className="mt-10 w-full max-w-7xl rounded-xl border border-neutral shadow-xl">
        <Map
          zoom={13}
          center={coordinates}
          style={{ width: "100%", height: "500px" }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom,
            )
          }
        />
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-white">
            Selected Location:
          </h2>
          <p className="text-2xl text-primary">
            {selectedLocation || "No location selected yet."}
          </p>
        </div>
      </div>

      <div className="mt-12 w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold text-neutral">Available Locations</h2>
        <ul className="mt-4 list-disc pl-6 text-base-content/80">
          {locationCoordinates.map((loc) => (
            <li key={loc.name}>{loc.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowCase;
