import React from "react";
import { render, screen } from "@testing-library/react";
import ExportCSV from "../csv.jsx";

/**
 * Tests the ExportCSV component.
 */
describe.skip("ExportCSV", () => {
  // Sample orders data
  const orders = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      cost: 10,
      created: "2023-05-12T08:30:00.000Z",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      cost: 15,
      created: "2023-05-11T10:45:00.000Z",
    },
  ];

  /**
   * Tests that the "Export to CSV" button is rendered.
   */
  test("renders Export to CSV button", () => {
    render(<ExportCSV orders={orders} />);

    // Asserts that the "Export to CSV" button is rendered
    const exportButton = screen.getByText("Export to CSV");
    expect(exportButton).toBeInTheDocument();
  });

  /**
   * Tests that the correct data is set for the CSVLink component.
   */
  test("sets correct data for CSVLink component", () => {
    render(<ExportCSV orders={orders} />);

    // Finds the CSVLink component by its test ID
    const csvLink = screen.getByTestId("csv-link");

    // Asserts that the CSVLink component has the expected data attribute
    expect(csvLink).toHaveAttribute("data", [
      {
        "Order no.": 1,
        Name: "John Doe",
        Price: 10,
        Date: "2023-05-12",
      },
      {
        "Order no.": 2,
        Name: "Jane Smith",
        Price: 15,
        Date: "2023-05-11",
      },
    ]);

    // Asserts that the CSVLink component has the expected filename attribute
    expect(csvLink).toHaveAttribute("filename", "orders.csv");
  });
});
