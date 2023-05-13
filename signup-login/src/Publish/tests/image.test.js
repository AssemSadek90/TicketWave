import React from "react";
import { render, screen } from "@testing-library/react";
import EventImage from "./EventImage";

describe("EventImage", () => {
  it("should render the EventImage component", () => {
    const event_id = {
      logo: "https://example.com/event-logo.png",
    };

    render(<EventImage event_id={event_id} />);

    expect(
      screen.getByTestId("event-preview-card__image-container")
    ).toBeTruthy();
    expect(screen.getByTestId("imgEvent")).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByAltText("Event Logo")).toBeTruthy();
  });

  it("should render a placeholder image if no logo is provided", () => {
    const event_id = {
      logo: "",
    };

    render(<EventImage event_id={event_id} />);

    expect(
      screen.getByTestId("event-preview-card__image-container")
    ).toBeTruthy();
    expect(screen.queryByAltText("Event Logo")).toBeFalsy();
    expect(
      screen.getByTestId("event-preview-card__image-placeholder")
    ).toBeTruthy();
  });
});
