import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboardinsights";

describe.skip("Dashboard", () => {
  it("should render the dashboard UI", () => {
    render(<Dashboard />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-insights")).toBeInTheDocument();
  });
});
