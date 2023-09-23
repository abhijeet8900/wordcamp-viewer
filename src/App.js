import React from "react";
import "./App.css";
import CalendarComponent from "./components/calendar";
import Layout from "./components/layout";
import useFetchEvents from "../utils/hooks/useFetchEvents";
import Map from "./components/map";
const App = () => {
  const { events, isEventsFetched, error } = useFetchEvents();

  if (error) {
    return <div> Something has gone wrong, please check console</div>;
  }

  if (!isEventsFetched) {
    return <div>...LOADING</div>;
  }

  return (
    <Layout>
      <CalendarComponent events={events} />
      <Map events={events} />
    </Layout>
  );
};

export default App;
