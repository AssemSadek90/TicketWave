import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import server from ".../server";
import Orders from "../Orders";

jest.mock("../server", () => ({
  get: jest.fn(),
}));

describe("Orders component", () => {
  test('displays "No orders for this event yet" when no orders are available', async () => {
    server.get.mockResolvedValue({ data: { results: [] } });

    render(<Orders />);

    await screen.findByText("No orders for this event yet");
  });

  test("displays the list of orders when orders are available", async () => {
    const mockOrders = [
      { id: 1, first_name: "John Doe", cost: "123" },
      { id: 2, first_name: "Jane Smith" },
      { id: 3, first_name: "Bob Johnson" },
    ];
    server.get.mockResolvedValue({ data: { results: mockOrders } });

    render(<Orders />);

    await waitFor(() => {
      mockOrders.forEach((order) =>
        expect(screen.getByText(order.first_name)).toBeInTheDocument()
      );
    });
  });
});
