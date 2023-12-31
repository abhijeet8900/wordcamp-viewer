import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";
import { transformEventData } from "./helper";
import getEventLocation from "../../../utils/functions/getEventLocation";
import { findEvent } from "../../../utils/functions/miscellaneous";

const Map = ({ events, selectedEvent, onSelectEvent }) => {
  const eventLocations = transformEventData(events);

  const [userLocation, setUserLocation] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
    zoom: 2,
  });

  useEffect(() => {
    if (selectedEvent) {
      const eventLocation = getEventLocation(selectedEvent);
      if (eventLocation) {
        setUserLocation({
          ...eventLocation,
          zoom: 8,
        });
      }
    }
  }, [selectedEvent]);

  return (
    <div className="w-full max-w-5xl h-[720px] mx-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={userLocation}
        zoom={userLocation.zoom}
        defaultCenter={userLocation}
        defaultZoom={userLocation.zoom}
      >
        {eventLocations.map((markerProps, index) => (
          <Marker
            {...markerProps}
            key={index}
            onClick={(id) => {
              const updatedEvent = findEvent(events, id);
              onSelectEvent && onSelectEvent(updatedEvent);
            }}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
