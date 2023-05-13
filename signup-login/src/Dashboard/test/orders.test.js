import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import server from ".../server";
import Orders from "../Orders";

// Mocking the server module
jest.mock("../server", () => ({
  get: jest.fn(),
}));

/**
 * Tests the Orders component.
 */
describe.skip.skip("Orders component", () => {
  /**
   * Tests that "No orders for this event yet" is displayed when no orders are available.
   */
  test('displays "No orders for this event yet" when no orders are available', async () => {
    // Mocking the server response with an empty array of orders
    server.get.mockResolvedValue({ data: { results: [] } });

    render(<Orders />);

    // Waits for the "No orders for this event yet" text to be displayed
    await screen.findByText("No orders for this event yet");
  });

  /**
   * Tests that the list of orders is displayed when orders are available.
   */
  test("displays the list of orders when orders are available", async () => {
    const mockOrders = [
      { id: 1, first_name: "John Doe", cost: "123" },
      { id: 2, first_name: "Jane Smith" },
      { id: 3, first_name: "Bob Johnson" },
    ];

    // Mocking the server response with an array of orders
    server.get.mockResolvedValue({ data: { results: mockOrders } });

    render(<Orders />);

    // Waits for the orders to be rendered on the screen
    await waitFor(() => {
      mockOrders.forEach((order) =>
        expect(screen.getByText(order.first_name)).toBeInTheDocument()
      );
    });
  });
});
