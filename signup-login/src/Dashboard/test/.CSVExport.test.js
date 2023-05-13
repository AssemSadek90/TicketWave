import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CSVExport from "../csv.jsx";

/**
 * Tests the CSVExport component.
 */
describe.skip("CSVExport component", () => {
  /**
   * Tests that the "Attendee summary report" text is rendered.
   */
  test('renders the "Attendee summary report" text', () => {
    render(<CSVExport />);

    // Asserts that the "Attendee summary report" text is rendered
    const textElement = screen.getByText("Attendee summary report");
    expect(textElement).toBeInTheDocument();
  });

  /**
   * Tests that the dropdown menu opens on click.
   */
  test("opens the dropdown menu on click", () => {
    render(<CSVExport />);

    // Finds the "Attendee summary report" text element
    const textElement = screen.getByText("Attendee summary report");

    // Simulates a click on the text element
    fireEvent.click(textElement);

    // Asserts that the dropdown menu is rendered
    const dropdownMenu = screen.getByTestId("dropdown-menu");
    expect(dropdownMenu).toBeInTheDocument();
  });
});
