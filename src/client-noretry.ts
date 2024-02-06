import { got } from "got";

async function run() {
  return await got("http://localhost:3000/noretry", {
    retry: {
      limit: 0,
    },
    throwHttpErrors: false
  });
}

void run()
