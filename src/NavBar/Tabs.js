import React from "react";

/**
 * Renders a set of tabs for navigating between different sections of content.
 *
 * @param {object} props - The props object containing the component's properties.
 * @param {string} props.title - The title of the current tab.
 *
 * @returns {JSX.Element} - A React component representing the tabs.
 */

export default function Tabs(props) {
  return <span className="tabs">{props.title}</span>;
}
