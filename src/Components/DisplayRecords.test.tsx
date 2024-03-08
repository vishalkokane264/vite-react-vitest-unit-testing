import { render, screen, waitFor } from "@testing-library/react";
import DisplayRecords from "./DisplayRecords";
import { expect } from "vitest";
import * as api from "./../Services/apiService";
import jest from "jest";
// jest.mock("./api");
jest.mock("./api", () => ({ callGetApi: jest.fn() }));

describe("It should render records", () => {
  it("should render data", async () => {
    render(<DisplayRecords />);
    await waitFor(() => {
      expect(screen.getByText("Eliseo@gardner.biz"));
    });
  });
  it("calls an mock api and display data", async () => {
    api.callGetApi().mockResolvedValue({
      result: [
        {
          id: "1",
          email: "vishal@gmail.com",
        },
      ],
    });
    render(<DisplayRecords />);
    await waitFor(() => {
      screen.getByText("vishal@gmail.com");
    });
  });
});
