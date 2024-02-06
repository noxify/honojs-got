import { got } from "got";

async function run() {
  return await got("http://localhost:3000/retry", {
    retry: {
      limit: 2,
      statusCodes: [400],
    },
    throwHttpErrors: false
  });
}

void run()
