import { render, screen } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

/*test("test if app component contain Main Page text", () => {
  render(<App />);
  const linkElement = screen.getByText("Main page");
  //const linkElement = screen.getByText(/Main page/i);
  expect(linkElement).toBeInTheDocument();
});*/

test("test if Dashboard component contain Dashboard text", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});

test("test if Preferences component contain Preferences text", () => {
  render(<Preferences />);
  const linkElement = screen.getByText("Preferences");
  expect(linkElement).toBeInTheDocument();
});
