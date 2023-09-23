import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Marker = ({ isPastEvent, id }) => (
  <div className="pin" id={`event-${id}`} data-testid={`event-${id}`}>
    <Icon
      icon={locationIcon}
      className="pin-icon"
      color={isPastEvent ? "gray" : "red"}
      style={{ fontSize: `${isPastEvent ? "16px" : "24px"}` }}
    />
  </div>
);

export default Marker;
