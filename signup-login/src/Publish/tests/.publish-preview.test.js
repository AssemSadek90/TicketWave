import React from "react";
import { render, waitFor } from "@testing-library/react";
import Publish from "../publish-preview";

/**
 * Tests the Publish component.
 */
describe.skip("Publish", () => {
  beforeEach(() => {
    // Mock localStorage methods used in the component
    jest.spyOn(window.localStorage.__proto__, "getItem");
    jest.spyOn(window.localStorage.__proto__, "setItem");
  });

  afterEach(() => {
    // Restore localStorage methods
    window.localStorage.getItem.mockRestore();
    window.localStorage.setItem.mockRestore();
  });

  /**
   * Tests that the header and event preview are rendered correctly.
   */
  it("should render the header and event preview correctly", async () => {
    // Mock the necessary data for the component
    const event = {
      logo: "test-logo.jpg",
      price: 10,
      name: "Test Event",
      capacity: 100,
      created: new Date().toISOString(),
      status: "active",
    };

    // Mock the localStorage methods used in the component
    window.localStorage.getItem.mockReturnValue(2);

    // Render the component
    const { getByText, getByAltText } = render(<Publish />);

    // Check if the header is rendered
    const headerTitleElement = getByText("Publish Your Event");
    expect(headerTitleElement).toBeInTheDocument();

    // Wait for the event preview to be rendered
    await waitFor(() => {
      // Check if the event logo is rendered
      const eventLogoElement = getByAltText("Event Logo");
      expect(eventLogoElement).toBeInTheDocument();

      // Check if the event name, price, capacity, and created date are rendered
      const eventNameElement = getByText("Test Event");
      const eventPriceElement = getByText("$10");
      const eventCapacityElement = getByText("Capacity: 100");
      const eventCreatedElement = getByText(
        new Date().toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
        })
      );
      expect(eventNameElement).toBeInTheDocument();
      expect(eventPriceElement).toBeInTheDocument();
      expect(eventCapacityElement).toBeInTheDocument();
      expect(eventCreatedElement).toBeInTheDocument();

      // Check if the event status is rendered
      const eventStatusElement = getByText("Status: active");
      expect(eventStatusElement).toBeInTheDocument();
    });
  });
});
