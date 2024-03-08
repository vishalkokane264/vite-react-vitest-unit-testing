import { render, screen } from "@testing-library/react";
import Login from "./Login";
import * as api from "./Services/apiService";

jest.mock("./api");
describe("Login page should render with functionality", () => {
  it("should render Login page", () => {
    render(<Login />);
    expect(screen.getByTestId("test-login"));
  });
  it("should render card in login page", () => {
    render(<Login />);
    expect(screen.getByTestId("test-card"));
  });

  it("should render Login form", () => {
    render(<Login />);
    expect(screen.getByTestId("test-login-form"));
  });
});
