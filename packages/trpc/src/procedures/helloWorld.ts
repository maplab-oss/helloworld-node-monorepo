import { t } from "../instance";

export const helloWorld = t.procedure.query(() => {
  return { message: "Hello from tRPC" };
});
