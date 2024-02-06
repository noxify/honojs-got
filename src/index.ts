import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from 'hono/logger'

const app = new Hono();

app.use('*', logger())

app.get("/", (c) => {
  return c.json({ message: 'Success!' })
});

app.get("/retry", (c) => {
  return c.json({ message: 'Error!' }, 400)
});

app.get("/noretry", (c) => {
  return c.json({ message: 'Error!' }, 400)
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
