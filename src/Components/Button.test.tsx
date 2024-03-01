import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
describe("button should render", () => {
  it("should render button with text", () => {
    const str = "this is button";
    render(<Button>{str}</Button>);
    expect(screen.getByText(str)).toBeInTheDocument();
  });
  it("should be disabled after click", () => {
    const str = "this is button";
    render(<Button>{str}</Button>);
    const buttonRole = screen.getByRole("button");
    expect(buttonRole).not.toBeDisabled();
    fireEvent.click(buttonRole);
    expect(buttonRole).toBeDisabled();
  });
});
