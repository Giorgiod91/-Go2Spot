"use client";

import { Map } from "@vis.gl/react-google-maps";
import { MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import React from "react";

type Props = {};

function ShowCase({}: Props) {
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
      </div>
    </div>
  );
}

export default ShowCase;
