import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";
import { transformEventData } from "./helper";

const Map = ({ events }) => {
  const eventLocations = transformEventData(events);

  const [userLocation, setUserLocation] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });

  return (
    <div className="max-w-5xl w-full h-[40rem] mx-auto mt-10">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={userLocation}
        defaultZoom={2}
      >
        {eventLocations.map((markerProps, index) => (
          <Marker {...markerProps} key={index} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
