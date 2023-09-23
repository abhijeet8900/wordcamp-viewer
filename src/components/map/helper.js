import getEventLocation from "../../../utils/functions/getEventLocation";
import isPastEvent from "../../../utils/functions/isPastEvent";
export const transformEventData = (events) => {
  const eventLoations = [];
  events.forEach((event) => {
    const eventLocation = getEventLocation(event);
    const pastEvent = isPastEvent(event);
    if (eventLocation) {
      const isPastEvent = eventLoations.push({
        id: event.slug,
        title: event.title.rendered,
        isPastEvent: pastEvent,
        ...eventLocation,
      });
    } else {
      console.error(
        `Can't find co-oridnates for event at location ${event.Location}`
      );
    }
  });
  return eventLoations;
};
