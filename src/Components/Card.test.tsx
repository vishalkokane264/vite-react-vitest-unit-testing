import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card should render", () => {
  it("Card text should visible", () => {
    render(<Card title={"this is title"} />);
    expect(screen.getByText("this is title")).toBeInTheDocument();
  });
});
