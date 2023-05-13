import React from "react";
import { render, screen } from "@testing-library/react";
import ExportCSV from "../csv.jsx";

describe.skip("ExportCSV", () => {
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

  test("renders Export to CSV button", () => {
    render(<ExportCSV orders={orders} />);
    const exportButton = screen.getByText("Export to CSV");
    expect(exportButton).toBeInTheDocument();
  });

  test("sets correct data for CSVLink component", () => {
    render(<ExportCSV orders={orders} />);
    const csvLink = screen.getByTestId("csv-link");
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
    expect(csvLink).toHaveAttribute("filename", "orders.csv");
  });
});
