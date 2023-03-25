import React from "react";
import { render, screen } from "@testing-library/react";
import Tabs from "./NavBar/Tabs";

describe("Tabs", () => {
  test("renders the title", () => {
    const title = "My Tabs";
    render(<Tabs title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
