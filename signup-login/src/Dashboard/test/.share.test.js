import React from "react";
import { render } from "@testing-library/react";
import Share from "../Share";

test("renders social media share buttons", () => {
  const eventURL = "https://example.com/event";
  const { getByTestId } = render(<Share Event_id={{ EventURL: eventURL }} />);

  // Check if the component is rendered
  const shareComponent = getByTestId("custom-share-box");
  expect(shareComponent).toBeInTheDocument();

  // Check if the Facebook share button is rendered with the correct URL
  const facebookButton = getByTestId("facebook-share-box-container");
  expect(facebookButton).toBeInTheDocument();
  expect(facebookButton).toHaveAttribute("url", eventURL);

  // Check if the Twitter share button is rendered with the correct URL
  const twitterButton = getByTestId("twitter-share-box-container");
  expect(twitterButton).toBeInTheDocument();
  expect(twitterButton).toHaveAttribute("url", eventURL);

  // Check if the Email share button is rendered with the correct URL
  const emailButton = getByTestId("email-share-box-container");
  expect(emailButton).toBeInTheDocument();
  expect(emailButton).toHaveAttribute("url", eventURL);

  // Check if the LinkedIn share button is rendered with the correct URL
  const linkedinButton = getByTestId("linkedin-share-box-container");
  expect(linkedinButton).toBeInTheDocument();
  expect(linkedinButton).toHaveAttribute("url", eventURL);

  // Check if the WhatsApp share button is rendered with the correct URL
  const whatsappButton = getByTestId("whatsapp-share-box-container");
  expect(whatsappButton).toBeInTheDocument();
  expect(whatsappButton).toHaveAttribute("url", eventURL);
});
