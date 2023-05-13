import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlEditor from "../copyandedit.jsx";
describe.skip("UrlEditor", () => {
  it("renders the initial URL and edit button", () => {
    render(<UrlEditor />);

    // Check if the initial URL is rendered
    expect(screen.getByText("https://example.com")).toBeInTheDocument();

    // Check if the edit button is rendered
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
it("allows editing the URL", () => {
  render(<UrlEditor />);

  // Click the edit button
  fireEvent.click(screen.getByText("Edit"));

  // Enter a new URL in the input field
  const inputField = screen.getByRole("textbox");
  fireEvent.change(inputField, { target: { value: "https://newurl.com" } });

  // Click the save button
  fireEvent.click(screen.getByText("Save"));

  // Check if the new URL is displayed
  expect(screen.getByText("https://newurl.com")).toBeInTheDocument();
});
