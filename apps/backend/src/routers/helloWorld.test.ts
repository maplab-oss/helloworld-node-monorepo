import { describe, it, expect } from "vitest";
import Fastify from "fastify";
import { helloWorldRouter } from "./helloWorld";

describe("helloWorldRouter", () => {
  it("should return the message from config", async () => {
    const app = Fastify();
    await app.register(helloWorldRouter);

    const response = await app.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: "Hello world" });
  });
});
