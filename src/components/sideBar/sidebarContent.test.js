import { render, screen } from "@testing-library/react";
import React from "react";
import SidebarContent from "./sidebarContent";

describe("Sidbar Content tests", () => {
  it("Renders event content ", () => {
    render(<SidebarContent excerpt="Test Content" />);
    const content = screen.getByText(/Test Content/i);
    expect(content).toBeInTheDocument();
  });

  it("Renders nothing incase of empty content ", () => {
    render(<SidebarContent />);
    const content = screen.queryByText(/Test Content/i);
    expect(content).not.toBeInTheDocument();
  });
});
