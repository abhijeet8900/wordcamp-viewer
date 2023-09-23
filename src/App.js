import React from "react";
import "./App.css";
import CalendarComponent from "./components/calendar";
import Layout from "./components/Layout";
import useFetchEvents from '../utils/hooks/useFetchEvents'
const App = () => {

  const { events, isEventsFetched, error } = useFetchEvents()
  return (
    <Layout>
      { !isEventsFetched && !error ? <div>...Loading</div> : null}
      { isEventsFetched && !error ? <CalendarComponent events={events} /> : null }
      { error && <div> Something has gone wrong, please check console</div>}
    </Layout>
  );
};

export default App;
