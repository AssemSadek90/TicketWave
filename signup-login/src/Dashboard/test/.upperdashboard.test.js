import React from "react";
import { render, screen } from "@testing-library/react";
import Upperdashboard from "../upperdashboard";

describe.skip("upperdashboard", () => {
  it("should render the upperdashboard component", () => {
    render(<Upperdashboard />);

    expect(screen.getByText("Sales by ticket type")).toBeTruthy();
    expect(screen.getByText("Ticket type")).toBeTruthy();
    expect(screen.getByText("Price")).toBeTruthy();
    expect(screen.getByText("Sold")).toBeTruthy();
  });

  it("should render the correct data in the table", () => {
    const data = {
      gross: 200,
      ticketsSold: 10,
      capacity: 100,
      paid: 100,
      free: 0,
    };

    render(<upperdashboard data={data} />);

    expect(screen.getAllByText("Sales by ticket type")).toHaveLength(1);
    expect(screen.getAllByText("Ticket type")).toHaveLength(1);
    expect(screen.getAllByText("Price")).toHaveLength(2);
    expect(screen.getAllByText("Sold")).toHaveLength(1);
    expect(screen.getAllByText("Paid")).toHaveLength(1);
    expect(screen.getAllByText("Free")).toHaveLength(1);
    expect(screen.getByText("£200")).toBeTruthy();
    expect(screen.getByText("10")).toBeTruthy();
    expect(screen.getByText("100")).toBeTruthy();
    expect(screen.getByText("100")).toBeTruthy();
    expect(screen.getByText("0")).toBeTruthy();
  });
});
