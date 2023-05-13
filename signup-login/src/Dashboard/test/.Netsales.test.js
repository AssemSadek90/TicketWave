import React from "react";
import { render, screen } from "@testing-library/react";
import Netsales from "./Netsales";

describe.skip("Netsales", () => {
  it("should render the component correctly", () => {
    const eventId = {
      Nsales: 100,
      Gross: 200,
      Sold: 50,
      Tickets: 100,
      Paid: 40,
      Free: 10,
    };

    render(<Netsales eventId={eventId} />);

    expect(screen.getByTestId("amount-card-title")).toHaveTextContent(
      "Net Sales"
    );
    expect(screen.getByTestId("amount-card-value")).toHaveTextContent("£100");
    expect(screen.getByTestId("amount-card-tooltip")).toHaveTextContent(
      "Royalties included, if any"
    );
    expect(screen.getByTestId("amount-card-value")).toHaveTextContent("£200");
    expect(screen.getByTestId("tickets-sold")).toHaveTextContent("50/100");
    expect(screen.getByTestId("paid")).toHaveTextContent("40");
    expect(screen.getByTestId("free")).toHaveTextContent("10");
  });
});
