"use client";

import { Map } from "@vis.gl/react-google-maps";
import { MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import React from "react";

type Props = {};

function ShowCase({}: Props) {
  //::TODO: add the values into a database to get rid of all the data later on when the data starts scaling with many spots
  const locationCoordinates = {
    "Sagrada Familia": { lat: 41.4036, lng: 2.1744 },
    "Park Güell": { lat: 41.4145, lng: 2.1527 },
    "Casa Batlló": { lat: 41.3916, lng: 2.1649 },
    "Big Ben & Houses of Parliament": { lat: 51.5007, lng: -0.1246 },
    "Tower of London": { lat: 51.5081, lng: -0.0759 },
    "London Eye": { lat: 51.5033, lng: -0.1195 },
    "Brandenburg Gate": { lat: 52.5163, lng: 13.3777 },
    "Berlin Wall Memorial": { lat: 52.5355, lng: 13.3904 },
    "Museum Island": { lat: 52.516, lng: 13.4013 },
  };
  //TODO: ADD the option to showcase where the spots are on the map and also add the method to create waypoints
  //TODO: let the user add his waypoint start so where the user travels
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-7xl font-extrabold">OverView</h1>
      <div className="max-w-7xl" style={{ width: "100%", height: "500px" }}>
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom,
            )
          }
        />
        <div className="flex">
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
