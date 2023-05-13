import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioApp from "../radio1";

/**
 * Tests the RadioApp component.
 */
describe.skip("RadioApp", () => {
  /**
   * Tests that the state is updated when the radio button is clicked.
   */
  it("should update state when radio button is clicked", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const publicRadio = getByLabelText("Public");

    fireEvent.click(publicRadio);

    expect(publicRadio.checked).toEqual(true);
  });

  /**
   * Tests that the state is updated when the dropdown value is changed.
   */
  it("should update state when dropdown value is changed", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const dropdown = getByLabelText("Privacy");

    fireEvent.change(dropdown, { target: { value: "private" } });

    expect(dropdown.value).toEqual("private");
  });

  /**
   * Tests that the state is updated when the password input value is changed.
   */
  it("should update state when password input value is changed", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const passwordInput = getByLabelText("Password");

    fireEvent.change(passwordInput, { target: { value: "secret123" } });

    expect(passwordInput.value).toEqual("secret123");
  });
});
