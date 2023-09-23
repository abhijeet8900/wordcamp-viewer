import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Tabs from "./index.js";

describe("Tabs tests", () => {
  const MOCK_TABS = [
    {
      id: "tab-1",
      title: "Tab 1",
    },
    {
      id: "tab-2",
      title: "Tab 2",
    },
  ];

  it("Renders Tabs ", () => {
    render(<Tabs options={MOCK_TABS} />);
    MOCK_TABS.forEach((tab) => {
      const heading = screen.getByText(tab.title);
      expect(heading).toBeInTheDocument();
    });
  });

  it("Changes Tab on click ", () => {
    let currentTab = "";
    render(
      <Tabs
        options={MOCK_TABS}
        onClick={(tab) => {
          currentTab = tab;
        }}
      />
    );
    fireEvent.click(screen.getByText(MOCK_TABS[1].title));

    expect(currentTab).toBe(MOCK_TABS[1].id);
  });

  it("Snapshot test ", () => {
    const { container } = render(<Tabs options={MOCK_TABS} />);
    expect(container).toMatchSnapshot();
  });
});
