import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./index.js";

describe("Header tests", () => {


  it("Renders Loation markers ", () => {
    render(<Header />);
      const marker = screen.getByText(/WordCamp Viewer/i);
      expect(marker).toBeInTheDocument();
     });

  it("Snapshot test ", () => {
    const { container } = render(<Header  />);
    expect(container).toMatchSnapshot();
  });
});
