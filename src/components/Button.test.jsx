/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  render(<Button type="button" title="Save" />);
  it("render Button Element", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Save");
  });
});
