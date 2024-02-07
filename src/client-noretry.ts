import { got } from "got"

async function run() {
  return await got("http://localhost:3000/noretry", {
    retry: {
      limit: 0,
    },
    throwHttpErrors: false,
    hooks: {
      beforeRequest: [
        (options) => {
          console.log("Request: %s %s", options.method, options.url?.toString())
        },
      ],
      afterResponse: [
        (response) => {
          const pathname = response.requestUrl.pathname
          const method = response.request.options.method
          const statusCode = response.statusCode

          console.log("Response: %s %s %s %s", method, statusCode, pathname)

          return response
        },
      ],
    },
  })
}

void run()
