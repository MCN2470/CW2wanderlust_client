import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders welcome message on home page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Look for a welcome message or a key element on your home page
  // Adjust "Welcome" to a string that actually appears on your homepage
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});
