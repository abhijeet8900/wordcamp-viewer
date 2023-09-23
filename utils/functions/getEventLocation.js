/**
 * Returns event location details from event data
 * @param {Object} event Event data
 * @returns {Object} Returns lat, lng co-ordinates for event
 */
const getEventLocation = (event) => {
  if (event?._venue_coordinates?.latitude && event?._venue_coordinates?.longitude) {
    return {
      lat:
        event?._venue_coordinates?.latitude || event?._host_coordinates?.latitude,
      lng:
        event?._venue_coordinates?.longitude || event?._host_coordinates?.longitude,
      id: event?.slug,
    };
  }
  return null;
};
export default getEventLocation;
