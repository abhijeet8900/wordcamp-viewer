import { render, screen } from "@testing-library/react";
import React from "react";
import SidebarDataField from "./sidebarDataField";

describe("Sidbar Data Fields tests", () => {
  it("Renders event data field ", () => {
    render(<SidebarDataField label="Test Field" value="Test Value" />);
    const fieldLabel = screen.getByText(/Test Field/i);
    const fieldValue = screen.getByText(/Test Value/i);
    expect(fieldLabel).toBeInTheDocument();
    expect(fieldValue).toBeInTheDocument();
  });

  it("Renders event data field value with link ", () => {
    render(
      <SidebarDataField
        label="Test Field"
        value="Test Value"
        valueLink="http://www.google.com/"
      />
    );
    const valueLink = screen.getByText(/Test Value/i).closest("a").href;
    expect(valueLink).toBe("http://www.google.com/");
  });

  it("Renders nothing incase of empty field", () => {
    render(<SidebarDataField />);
    const field = screen.queryByText(/Test Value/i);
    expect(field).not.toBeInTheDocument();
  });
});
