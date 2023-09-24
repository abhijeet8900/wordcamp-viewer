import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Marker = ({ isPastEvent, id, slug, onClick }) => (
  <div
    className="pin cursor-pointer"
    id={`event-${id}`}
    data-testid={`event-${slug}`}
    onClick={() => {
      onClick && onClick(id);
    }}
  >
    <Icon
      icon={locationIcon}
      className="pin-icon"
      color={isPastEvent ? "gray" : "red"}
      style={{ fontSize: `${isPastEvent ? "16px" : "24px"}` }}
    />
  </div>
);

export default Marker;
