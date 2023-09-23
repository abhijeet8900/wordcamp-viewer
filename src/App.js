import React, { useState } from "react";
import "./App.css";
import CalendarComponent from "./components/calendar";
import Layout from "./components/layout";
import useFetchEvents from "../utils/hooks/useFetchEvents";
import Map from "./components/map";
import Tabs from "./components/tabs";
import { tabOptions } from "./constants/views";

const App = () => {
  const { events, isEventsFetched, error } = useFetchEvents();
  const [selectedEevent, setSelectedEvent] = useState({});
  const [view, setView] = useState("calendar-view");

  if (error) {
    console.error("Something went wrong, please check console !!! ");
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
      <Tabs
        options={tabOptions}
        onClick={(view) => {
          setView(view);
        }}
      />
      {view === "calendar-view" && (
        <CalendarComponent
          events={events}
          onSelectEvent={(event) => {
            setSelectedEvent(event);
          }}
        />
      )}
      {view === "map-view" && (
        <Map events={events} selectedEvent={selectedEevent} />
      )}
    </Layout>
  );
};

export default App;
