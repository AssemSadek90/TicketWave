import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboardinsights";

/**
 * Tests the Dashboard component.
 */
describe.skip("Dashboard", () => {
  /**
   * Tests that the dashboard UI is rendered correctly.
   */
  it("should render the dashboard UI", () => {
    render(<Dashboard />);

    // Asserts that the "Dashboard" text is rendered
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    // Asserts that the dashboard insights component is rendered
    expect(screen.getByTestId("dashboard-insights")).toBeInTheDocument();
  });
});
