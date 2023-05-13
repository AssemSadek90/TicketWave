import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

/**
 * Tests the Header component.
 */
describe.skip("Header", () => {
  /**
   * Tests that the header is rendered with the correct title.
   */
  it("should render the header with the correct title", () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText("Publish Your Event");

    expect(titleElement).toBeInTheDocument();
  });

  /**
   * Tests that the header has the appropriate CSS class.
   */
  it("should have the appropriate CSS class", () => {
    const { container } = render(<Header />);
    const headerElement = container.firstChild;

    expect(headerElement).toHaveClass("page-heading");
  });
});
