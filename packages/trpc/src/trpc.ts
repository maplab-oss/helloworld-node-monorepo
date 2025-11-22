import { helloWorld } from "./procedures/helloWorld";
import { t } from "./instance";

export const appRouter = t.router({
  helloWorld,
});

export type AppRouter = typeof appRouter;
