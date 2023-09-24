import getEventTiming from "../../../utils/functions/getEventTimings";

/**
 * Function to transform events data into calender events
 * @param {Array} events List of event data
 * @returns {Array} Returns list of events for Calendar component
 */
export const transformEvents = (events = []) => {
  const transformedEvents = events.map((eventData, index) => {
    const eventTimings = getEventTiming(eventData)
    const title = eventData?.title?.rendered ?? "";
    return {
      ...eventData,
      ...eventTimings,
      title,
      allDay: false,
      resource: eventData?.link ?? "",
      id: eventData.id,
    };
  });

  return transformedEvents;
};