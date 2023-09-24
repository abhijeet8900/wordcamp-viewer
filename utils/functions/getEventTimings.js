import { isEmpty } from "lodash";

/**
 * Function to get dates from event data
 * @param {Object} event 
 * @returns {Object} Event start and end 
 */
const getEventTiming = (event) => {
  if (isEmpty(event)) {
    return null;
  }
  const startDate = event?.["Start Date (YYYY-mm-dd)"];
  const endDate = event?.["End Date (YYYY-mm-dd)"];
  return {
    id: event.id,
    start: new Date(startDate * 1000),
    end: new Date(endDate * 1000),
  };
};

export default getEventTiming;
