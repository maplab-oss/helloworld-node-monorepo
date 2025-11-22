import { describe, it, expect } from "vitest";
import { message } from "./index";

describe("config package", () => {
  it("should export a message", () => {
    expect(message).toBe("Hello world");
  });
});
