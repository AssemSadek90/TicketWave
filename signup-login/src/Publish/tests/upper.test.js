import React from "react";
import { render, screen } from "@testing-library/react";
import Upper from "../upper part";

describe.skip("Upper", () => {
  it("should render the Upper component", () => {
    const event_id = {
      Name: "Test Event",
      created: new Date(),
      status: "Upcoming",
      price: 100,
      capacity: 1000,
    };

    render(<Upper event_id={event_id} />);

    expect(screen.getByText("Test Event")).toBeTruthy();
    expect(
      screen.getByText(event_id.created.toLocaleString().substr(0, 15))
    ).toBeTruthy();
    expect(screen.getByText(event_id.status)).toBeTruthy();
    expect(screen.getByText("£100")).toBeTruthy();
    expect(screen.getByText("1000")).toBeTruthy();
  });
});
