import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { allroutes } from "./routes/routes.js";

const app = new Hono();

serve(allroutes, ({ port }) => {
  console.log(`\tRunning @ http://localhost:${port}`);
});