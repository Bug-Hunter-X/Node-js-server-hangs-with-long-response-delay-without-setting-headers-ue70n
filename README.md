# Node.js Server Hang with Delayed Response

This repository demonstrates a subtle bug in a Node.js HTTP server where a delayed response can lead to a hang and ECONNRESET errors on the client side if the response headers aren't set before the delay.

## Bug Description

The issue arises when a significant delay occurs before sending the response headers and body.  Without setting `res.writeHead(200)` before the delay, the connection might be prematurely closed by the client or the server due to inactivity. This leads to an ECONNRESET error on the client side, and the server might appear unresponsive.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`
3. Make a request to `http://localhost:3000` using a tool like curl or a browser.
4. Observe that the response takes about 10 seconds and might fail with ECONNRESET

## Solution

The solution involves ensuring that `res.writeHead()` is called *before* any potentially long-running operations that might delay the response.  This sets the headers and starts the response process promptly.

## Lessons Learned

- Always set response headers early in the request handling process to prevent connection issues.
- Be mindful of long-running tasks within request handlers and consider using asynchronous patterns to avoid blocking the event loop.