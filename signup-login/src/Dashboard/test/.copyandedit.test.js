import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlEditor from "../copyandedit.jsx";
/**
 * Renders the UrlEditor component and tests its initial rendering.
 */
describe("UrlEditor", () => {
  /**
   * Tests that the initial URL and edit button are rendered correctly.
   */
  it("renders the initial URL and edit button", () => {
    render(<UrlEditor />);

    // Asserts that the initial URL is displayed
    expect(screen.getByText("https://example.com")).toBeInTheDocument();

    // Asserts that the "Edit" button is displayed
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});

/**
 * Tests the functionality of editing the URL.
 */
it("allows editing the URL", () => {
  render(<UrlEditor />);

  // Simulates a click on the "Edit" button
  fireEvent.click(screen.getByText("Edit"));

  // Finds the input field and changes its value to the new URL
  const inputField = screen.getByRole("textbox");
  fireEvent.change(inputField, { target: { value: "https://newurl.com" } });

  // Simulates a click on the "Save" button
  fireEvent.click(screen.getByText("Save"));

  // Asserts that the new URL is displayed
  expect(screen.getByText("https://newurl.com")).toBeInTheDocument();
});
