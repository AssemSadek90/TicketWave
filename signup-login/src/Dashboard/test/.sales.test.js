import React from "react";
import { render, screen } from "@testing-library/react";
import Sales from "../Sales";

describe("Sales", () => {
  it("should render the Sales component", () => {
    render(<Sales />);

    expect(screen.getByText("Sales by ticket type")).toBeTruthy();
    expect(screen.getByText("Ticket type")).toBeTruthy();
    expect(screen.getByText("Price")).toBeTruthy();
    expect(screen.getByText("Sold")).toBeTruthy();
  });

  it("should render the correct data in the table", () => {
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

    expect(screen.getAllByText("General Admission")).toHaveLength(1);
    expect(screen.getAllByText("VIP")).toHaveLength(1);
    expect(screen.getAllByText("20")).toHaveLength(2);
    expect(screen.getAllByText("50")).toHaveLength(2);
    expect(screen.getAllByText("10")).toHaveLength(1);
    expect(screen.getAllByText("5")).toHaveLength(1);
    expect(screen.getAllByText("200")).toHaveLength(1);
    expect(screen.getAllByText("250")).toHaveLength(1);
  });
});
