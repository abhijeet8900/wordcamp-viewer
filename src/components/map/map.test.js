import { render, screen } from "@testing-library/react";
import React from "react";
import Map from "./index.js";

describe("Map tests", () => {
  const MOCK_EVENTS = [
    {
      id: 3237405,
      title: {
        rendered: "Community Building Workshop Japan",
      },
      slug: "wordcamp-whitley-bay",
      link: "https://central.wordcamp.org/wordcamps/wordcamp-gdynia-poland/",
      "Start Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "End Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      _venue_coordinates: {
        latitude: 55.0471853,
        longitude: -1.4460773,
      },
    },
    {
      title: {
        rendered: "Rome Community Day 2023",
      },
      slug: "wordcamp-skopje-2",
      "Start Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "End Date (YYYY-mm-dd)": Math.floor(Date.now() / 1000),
      "Event Timezone": "Europe/Rome",
      _venue_coordinates: {
        latitude: 41.9953811,
        longitude: 21.4757918,
      },
    },
  ];

  it("Renders Loation markers ", () => {
    render(<Map events={MOCK_EVENTS} />);
    MOCK_EVENTS.forEach((event) => {
      const marker = screen.getByTestId(`event-${event.slug}`);
      expect(marker).toBeInTheDocument();
    });
  });

  it("Snapshot test ", () => {
    const { container } = render(<Map events={MOCK_EVENTS} />);
    expect(container).toMatchSnapshot();
  });
});
