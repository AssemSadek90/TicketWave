// RadioApp.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RadioApp from "../radio1";

describe.skip("RadioApp", () => {
  it("should update state when radio button is clicked", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const publicRadio = getByLabelText("Public");

    fireEvent.click(publicRadio);

    expect(publicRadio.checked).toEqual(true);
  });

  it("should update state when dropdown value is changed", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const dropdown = getByLabelText("Privacy");

    fireEvent.change(dropdown, { target: { value: "private" } });

    expect(dropdown.value).toEqual("private");
  });

  it("should update state when password input value is changed", () => {
    const { getByLabelText } = render(<RadioApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const passwordInput = getByLabelText("Password");

    fireEvent.change(passwordInput, { target: { value: "secret123" } });

    expect(passwordInput.value).toEqual("secret123");
  });
});
