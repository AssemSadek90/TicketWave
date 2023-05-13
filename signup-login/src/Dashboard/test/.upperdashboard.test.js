import React from "react";
import { render, screen } from "@testing-library/react";
import Upperdashboard from "../upperdashboard";

/**
 * Tests the upperdashboard component.
 */
describe.skip("upperdashboard", () => {
  /**
   * Tests that the upperdashboard component is rendered correctly.
   */
  it("should render the upperdashboard component", () => {
    render(<Upperdashboard />);

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
   * Tests that the correct data is rendered in the table.
   */
  it("should render the correct data in the table", () => {
    // Sample data for the upperdashboard component
    const data = {
      gross: 200,
      ticketsSold: 10,
      capacity: 100,
      paid: 100,
      free: 0,
    };

    render(<Upperdashboard data={data} />);

    // Asserts that the "Sales by ticket type" text appears once in the table
    expect(screen.getAllByText("Sales by ticket type")).toHaveLength(1);

    // Asserts that the "Ticket type" text appears once in the table
    expect(screen.getAllByText("Ticket type")).toHaveLength(1);

    // Asserts that the "Price" text appears twice in the table
    expect(screen.getAllByText("Price")).toHaveLength(2);

    // Asserts that the "Sold" text appears once in the table
    expect(screen.getAllByText("Sold")).toHaveLength(1);

    // Asserts that the "Paid" text appears once in the table
    expect(screen.getAllByText("Paid")).toHaveLength(1);

    // Asserts that the "Free" text appears once in the table
    expect(screen.getAllByText("Free")).toHaveLength(1);

    // Asserts that the "£200" gross value is rendered
    expect(screen.getByText("£200")).toBeTruthy();

    // Asserts that the "10" ticketsSold value is rendered
    expect(screen.getByText("10")).toBeTruthy();

    // Asserts that the "100" capacity value is rendered
    expect(screen.getByText("100")).toBeTruthy();

    // Asserts that the "100" paid value is rendered
    expect(screen.getByText("100")).toBeTruthy();

    // Asserts that the "0" free value is rendered
    expect(screen.getByText("0")).toBeTruthy();
  });
});
