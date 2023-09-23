import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { transformEvents } from "./helper";
import moment from "moment";

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events }) => {

  const transformedEvents = transformEvents(events);

  return (
    <div className="mx-auto w-full h-full">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={transformedEvents}
        style={{ minHeight: "42rem" }}
        showAllEvents={true}
        className="max-w-5xl mx-auto min-h-full"
        components={{
          eventWrapper: CalenderEventWrapper,
          event: Event,
        }}
      />
    </div>
  );
};


const CalenderEventWrapper = ({ event, children }) => {
  return <div>{children}</div>;
};

const Event = ({ event }) => {
  return <h4>{event.title}</h4>;
};

export default CalendarComponent;
