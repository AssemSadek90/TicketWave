import React from "react";
import { render } from "@testing-library/react";
import CSVExport from "../csv.jsx";

describe("CSVExport component", () => {
  test('renders the "Attendee summary report" text', () => {
    render(<CSVExport />);
    const textElement = screen.getByText("Attendee summary report");
    expect(textElement).toBeInTheDocument();
  });

  test("opens the dropdown menu on click", () => {
    render(<CSVExport />);
    const textElement = screen.getByText("Attendee summary report");
    fireEvent.click(textElement);
    const dropdownMenu = screen.getByTestId("dropdown-menu");
    expect(dropdownMenu).toBeInTheDocument();
  });
});
