// Header.test.js
import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe.skip("Header", () => {
  it("should render the header with the correct title", () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText("Publish Your Event");

    expect(titleElement).toBeInTheDocument();
  });

  it("should have the appropriate CSS class", () => {
    const { container } = render(<Header />);
    const headerElement = container.firstChild;

    expect(headerElement).toHaveClass("page-heading");
  });
});
