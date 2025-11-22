import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

global.fetch = vi.fn();

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the message from the API", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ message: "Hello world" }),
    } as Response);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Hello world")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
