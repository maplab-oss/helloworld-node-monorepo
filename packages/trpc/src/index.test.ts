import { describe, it, expect } from "vitest";
import { appRouter } from "./index";

describe("trpc-router package", () => {
  it("should export appRouter", () => {
    expect(appRouter).toBeDefined();
  });
});
