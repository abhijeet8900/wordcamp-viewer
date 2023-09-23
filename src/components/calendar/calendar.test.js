import { render, screen } from "@testing-library/react";
import React from "react";
import Calendar from "./index.js";

describe("Calendar tests", () => {
  const MOCK_EVENTS = [
    {
      id: 3237405,
      title: {
        rendered: "Community Building Workshop Japan",
      },
      link: "https://central.wordcamp.org/wordcamps/wordcamp-gdynia-poland/",
      "Start Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "End Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
    },
    {
      title: {
        rendered: "Rome Community Day 2023",
      },
      "Start Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "End Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "Event Timezone": "Europe/Rome",
    },
  ];

  it("Renders Events ", () => {
    render(<Calendar events={MOCK_EVENTS} />);
    MOCK_EVENTS.forEach((event) => {
      const heading = screen.getByText(event.title.rendered);
      expect(heading).toBeInTheDocument();
    });
  });

  it("Snapshot test ", () => {
    const { container } = render(<Calendar events={MOCK_EVENTS} />);
    expect(container).toMatchSnapshot();
  });
});
