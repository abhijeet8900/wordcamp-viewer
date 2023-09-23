/**
 * Cheks if date is prvious to 2nd date. Uses todays date if 2nd argument is not passed 
 * @param {Date} date1 Date to compare 
 * @param {Date} date2 Date to Compare. Uses todays date as fallback
 * @returns {Boolean} Returns true if date is past 2nd date
 */
const isPastDate = (date1, date2 = new Date()) => {
  return date1 < date2;
};

/**
 * Checks if event is past event
 * @param {Object} event Event Data
 * @returns Returns true if event is past event 
 */
const isPastEvent = (event) => {
  const endDate = event?.["End Date (YYYY-mm-dd)"];
  return isPastDate(new Date(endDate * 1000));
};

export default isPastEvent;
