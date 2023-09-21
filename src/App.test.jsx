/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
// import { describe, expect, it } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App Component check render correctly", () => {
  it("render Hello World", () => {
    render(<App />);
    const headingElement = screen.getByText("Hello World");
    expect(headingElement).toBeInTheDocument();
  });
  it("render span with testid", () => {
    render(<App />);
    const spanElement = screen.getByTestId("span");
    expect(spanElement).toBeInTheDocument();
  });
});

describe("User Interaction", async () => {
  it("render initial value of count 0", () => {
    render(<App />);
    const spanInitial = screen.getByTestId("span");
    expect(spanInitial).toHaveTextContent(0);
  });

  it("render count value increase by button click", async () => {
    userEvent.setup();
    render(<App />);
    const submitButtonElement = screen.getByRole("button");
    await userEvent.click(submitButtonElement);
    const spanAfterButtonClick = screen.getByTestId("span");
    expect(spanAfterButtonClick).toHaveTextContent(1);
  });

  it("render textbox correctly", async () => {
    userEvent.setup();
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "10");
    expect(inputElement).toHaveValue();
  });
});
