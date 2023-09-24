import { render, screen } from "@testing-library/react";
import React from "react";
import Sidebar from "./index.js";

describe("Sidbar tests", () => {
  const MOCK_SELECTED_EVENT = {
    id: 3160161,
    slug: "wordcamp-netherlands-3",
    link: "https://central.wordcamp.org/wordcamps/wordcamp-netherlands-3/",
    title: {
      rendered: "WordCamp Netherlands",
    },
    content: {
      rendered: "Test Event Excerpt",
      protected: false,
    },
    Location: "Arnhem, The Netherlands",
    "Physical Address":
      "Antoon van Hooffplein 1\r\n6816 SH Arnhem\r\nThe Netherlands",
    "Organizer Name": "Rosanne van Staalduinen",
    "WordPress.org Username": "Rosanne van Staalduinen",
    _venue_coordinates: {
      latitude: 52.0094123,
      longitude: 5.9008147,
    },
    "Start Date (YYYY-mm-dd)": "1694044800",
    "End Date (YYYY-mm-dd)": "1694131200",
  };

  it("Renders event heading ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const heading = screen.getByText(MOCK_SELECTED_EVENT.title.rendered);
    expect(heading).toBeInTheDocument();
  });

  it("Renders event venue ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const venue = screen.getByText(
      /Antoon van Hooffplein 1 6816 SH Arnhem The Netherlands/i
    );
    expect(venue).toBeInTheDocument();
  });

  it("Renders event timing ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const timing = screen.getByText(/Sep 7, 2023/i);
    expect(timing).toBeInTheDocument();
  });

  it("Renders event exceprt ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const content = screen.getByText(/Test Event Excerpt/i);
    expect(content).toBeInTheDocument();
  });

  it("Renders event organizer name ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const organizer = screen.getByText(/Rosanne van Staalduinen/i);
    expect(organizer).toBeInTheDocument();
  });

  it("Renders event organizer name with link ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const organizerLink = screen
      .getByText(/Rosanne van Staalduinen/i)
      .closest("a").href;
    expect(organizerLink).toBe(
      "https://profiles.wordpress.org/Rosanne%20van%20Staalduinen/"
    );
  });

  it("Renders link for more event details ", () => {
    render(<Sidebar selectedEvent={MOCK_SELECTED_EVENT} />);
    const moreDetailsBtn = screen.getByText(/More Details/i);
    const eventDetailsLink = moreDetailsBtn.closest("a").href;
    expect(moreDetailsBtn).toBeInTheDocument();
    expect(eventDetailsLink).toBe(
      "https://central.wordcamp.org/wordcamps/wordcamp-netherlands-3/"
    );
  });

  it("Renders nothing incase of incorrect event data ", () => {
    render(<Sidebar selectedEvent={{}} />);
    const organizer = screen.queryByText(/WordCamp Netherlands/i);
    expect(organizer).not.toBeInTheDocument();
  });

  it("Snapshot test ", () => {
    const { container } = render(
      <Sidebar selectedEvent={MOCK_SELECTED_EVENT} />
    );
    expect(container).toMatchSnapshot();
  });
});
