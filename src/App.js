import React from "react";
import "./App.css";
import CalendarComponent from "./components/calendar";
import Layout from "./components/layout";
import useFetchEvents from "../utils/hooks/useFetchEvents";
import Map from "./components/map";

const App = () => {
  const { events, isEventsFetched, error } = useFetchEvents();

  if (error) {
    console.error('Something went wrong, please check console !!! ');
    return (
      <Layout>
        <div> Something has gone wrong, please check console</div>
      </Layout>
    );
  }

  if (!isEventsFetched) {
    return (
      <Layout>
        <div>...LOADING</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <CalendarComponent events={events} />
      <Map events={events} />
    </Layout>
  );
};

export default App;
