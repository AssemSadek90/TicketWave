import React from "react";
import { render, screen } from "@testing-library/react";
import Sales from "../Sales";

/**
 * Tests the Sales component.
 */
describe.skip("Sales", () => {
  /**
   * Tests that the Sales component is rendered correctly.
   */
  it("should render the Sales component", () => {
    render(<Sales />);

    // Asserts that the "Sales by ticket type" text is rendered
    expect(screen.getByText("Sales by ticket type")).toBeTruthy();

    // Asserts that the "Ticket type" text is rendered
    expect(screen.getByText("Ticket type")).toBeTruthy();

    // Asserts that the "Price" text is rendered
    expect(screen.getByText("Price")).toBeTruthy();

    // Asserts that the "Sold" text is rendered
    expect(screen.getByText("Sold")).toBeTruthy();
  });

  /**
   * Tests that the table renders the correct data.
   */
  it("should render the correct data in the table", () => {
    // Sample data for the table
    const data = [
      {
        Name: "General Admission",
        price: 20,
        Sold: 10,
        Amount: 200,
      },
      {
        Name: "VIP",
        price: 50,
        Sold: 5,
        Amount: 250,
      },
    ];

    render(<Sales data={data} />);

    // Asserts that the "General Admission" text appears once in the table
    expect(screen.getAllByText("General Admission")).toHaveLength(1);

    // Asserts that the "VIP" text appears once in the table
    expect(screen.getAllByText("VIP")).toHaveLength(1);

    // Asserts that the "20" price appears twice in the table
    expect(screen.getAllByText("20")).toHaveLength(2);

    // Asserts that the "50" price appears twice in the table
    expect(screen.getAllByText("50")).toHaveLength(2);

    // Asserts that the "10" Sold value appears once in the table
    expect(screen.getAllByText("10")).toHaveLength(1);

    // Asserts that the "5" Sold value appears once in the table
    expect(screen.getAllByText("5")).toHaveLength(1);

    // Asserts that the "200" Amount appears once in the table
    expect(screen.getAllByText("200")).toHaveLength(1);

    // Asserts that the "250" Amount appears once in the table
    expect(screen.getAllByText("250")).toHaveLength(1);
  });
});
