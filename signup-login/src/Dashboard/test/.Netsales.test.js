import React from "react";
import { render, screen } from "@testing-library/react";
import Netsales from "./Netsales";

/**
 * Tests the Netsales component.
 */
describe.skip("Netsales", () => {
  /**
   * Tests that the component is rendered correctly.
   */
  it("should render the component correctly", () => {
    // Sample event ID data
    const eventId = {
      Nsales: 100,
      Gross: 200,
      Sold: 50,
      Tickets: 100,
      Paid: 40,
      Free: 10,
    };

    render(<Netsales eventId={eventId} />);

    // Asserts that the "Net Sales" card title is rendered correctly
    expect(screen.getByTestId("amount-card-title")).toHaveTextContent(
      "Net Sales"
    );

    // Asserts that the net sales value is rendered correctly
    expect(screen.getByTestId("amount-card-value")).toHaveTextContent("£100");

    // Asserts that the tooltip content is rendered correctly
    expect(screen.getByTestId("amount-card-tooltip")).toHaveTextContent(
      "Royalties included, if any"
    );

    // Asserts that the gross sales value is rendered correctly
    expect(screen.getByTestId("amount-card-value")).toHaveTextContent("£200");

    // Asserts that the number of tickets sold is rendered correctly
    expect(screen.getByTestId("tickets-sold")).toHaveTextContent("50/100");

    // Asserts that the number of paid tickets is rendered correctly
    expect(screen.getByTestId("paid")).toHaveTextContent("40");

    // Asserts that the number of free tickets is rendered correctly
    expect(screen.getByTestId("free")).toHaveTextContent("10");
  });
});
