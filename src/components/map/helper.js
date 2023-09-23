
export const transformEventData = (events) => {
    const eventLoations = [];
    events.forEach((event) => {
      if (
        event._venue_coordinates.latitude &&
        event._venue_coordinates.longitude
      ) {
        const endDate = event?.["End Date (YYYY-mm-dd)"];
        const isPastEvent = isPastDate(new Date(endDate * 1000));
        eventLoations.push({
          lat:
             event._venue_coordinates.latitude || event._host_coordinates.latitude,
          lng:
             
            event._venue_coordinates.longitude || event._host_coordinates.longitude,
          title: event.title.rendered,
          id : event.slug,
          isPastEvent,
        });
      } else {
        console.error(
          `Can't find co-oridnates for event at location ${event.Location}`
        );
      }
    });
    return eventLoations;
  };
  

  const isPastDate = (date1, date2 = new Date()) => {
    return date1 < date2;
  };
  