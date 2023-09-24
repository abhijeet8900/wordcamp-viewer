import { render, screen } from "@testing-library/react";
import React from "react";
import SidebarHeader from "./sidebarHeader";

describe("Sidbar Header tests", () => {
  it("Renders Header ", () => {
    render(<SidebarHeader title="Test Header" />);
    const header = screen.getByText(/Test Header/i);
    expect(header).toBeInTheDocument();
  });

  it("Renders nothing incase of empty header ", () => {
    render(<SidebarHeader />);
    const header = screen.queryByText(/Test Header/i);
    expect(header).not.toBeInTheDocument();
  });
});
