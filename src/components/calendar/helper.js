/**
 * Function to transform events data into calender events
 * @param {Array} events List of event data
 * @returns {Array} Returns list of events for Calendar component
 */
export const transformEvents = (events = []) => {
  const transformedEvents = events.map((eventData, index) => {
    const startDate = eventData?.["Start Date (YYYY-mm-dd)"];
    const endDate = eventData?.["End Date (YYYY-mm-dd)"];
    const title = eventData?.title?.rendered ?? "";
    return {
      ...eventData,
      title,
      start: new Date(startDate * 1000),
      end: new Date(endDate * 1000),
      allDay: false,
      resource: eventData?.link ?? "",
      id: eventData.id,
    };
  });

  return transformedEvents;
};