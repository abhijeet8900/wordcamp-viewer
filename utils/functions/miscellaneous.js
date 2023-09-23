/**
 * Function to return event data from list of events using event id
 * @param {Array} events List of events
 * @param {Number} eventId Id of event 
 * @returns {Object} Event
 */
export const findEvent = (events = [], eventId) => {
  return events.find((e) => e.id === eventId);
};
