import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders a header", () => {
  render(<App />);
  const header = screen.getByText(/Measure your reading speed/i);
  expect(header).toBeInTheDocument();
});

test("starts stopwatch", () => {
  render(<App />);
  const stopwatch = screen.getByRole("button", { name: /start stopwatch/i });
  expect(stopwatch.textContent).toMatchInlineSnapshot(`"Start Stopwatch"`);

  userEvent.click(stopwatch);
  expect(stopwatch.textContent).toMatchInlineSnapshot(`"End Stopwatch!"`);
});

test("stops stopwatch and displays results", () => {
  render(<App />);
  const stopwatch = screen.getByRole("button", { name: /start stopwatch/i });
  userEvent.click(stopwatch);
  userEvent.click(stopwatch);
  expect(stopwatch.textContent).toMatchInlineSnapshot(`"Reset"`);
  const duration = screen.getByText(
    /it took you \d+ milliseconds to read the text/i
  );
  expect(duration.textContent).toContain("3");
});
