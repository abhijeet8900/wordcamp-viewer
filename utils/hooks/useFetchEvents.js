import { useEffect, useState } from "react";
import fetchEvents from "../functions/fetchEvents";

/**
 * Custom hook to fetch all wordcamp events. 
 */
const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [isEventsFetched, setIsEventsFetched] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    try {
      async function apiCall() {
        const firstPage = await fetchEvents()
        const events = firstPage.data ?? []
        const totalPages = firstPage.headers?.['x-wp-totalpages'] ? parseInt(firstPage.headers['x-wp-totalpages']) : 0
        const fetchEventPromises = [];
        for (let i = 1; i < totalPages; i++) {
          fetchEventPromises.push(fetchEvents(i + 1).then((res) => {
            return res.data;
          }));
        }
        const restEvents =  await Promise.all(fetchEventPromises);
        const allEvents = [...events, ...restEvents]
        setEvents(allEvents.flat());
        setIsEventsFetched(true);
      }
      apiCall();
    } catch (err) {
      seterror(true);
    }
  }, []);

  return { events, isEventsFetched, error };
};

export default useFetchEvents;
