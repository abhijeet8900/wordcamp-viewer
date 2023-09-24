import React from "react";
import getEventTiming from "../../../utils/functions/getEventTimings";
import { getFormattedDate } from "../../../utils/functions/miscellaneous";
import { isEmpty } from "lodash";
import SidebarDataField from "./sidebarDataField";
import SidebarContent from "./sidebarContent";
import SidebarHeader from "./sidebarHeader";

function SideBar({ selectedEvent }) {
  if (isEmpty(selectedEvent)) {
    return null;
  }

  const attendees = selectedEvent["Number of Anticipated Attendees"];
  const location = selectedEvent["Physical Address"];
  const organizer = selectedEvent["Organizer Name"];
  const eventTimings = getEventTiming(selectedEvent);
  const eventLink = selectedEvent.link;
  const wpUserName = selectedEvent["WordPress.org Username"];
  const wpProfileUrl = `https://profiles.wordpress.org/${wpUserName}/`;

  return (
    <div className="w-full max-w-[304px] flex flex-col shadow-md mt-[42px] p-2 text-black text-lg max-h-[700px]">
      <SidebarHeader title={selectedEvent.title.rendered} />
      <SidebarContent excerpt={selectedEvent.content.rendered} />
      <SidebarDataField label="Venue" value={location} />
      <SidebarDataField
        label="Date & Timing"
        value={getFormattedDate(eventTimings.start)}
      />
      <SidebarDataField
        label="Organizer"
        value={organizer}
        valueLink={wpProfileUrl}
      />
      <SidebarDataField label="Attendees" value={attendees} />
      <a href={eventLink} className="w-full mt-2 ">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          More Details
        </button>
      </a>
    </div>
  );
}

export default SideBar;
