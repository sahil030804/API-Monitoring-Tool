# API Monitoring Tool

## What this project is

This is a small project that sets up a web server so you can check if an API is alive and working.

It has one main endpoint:
- `GET /health-check` returns a simple success message so you know the server is responding.

## What I built so far

As the developer, I have:
- Created a Node.js backend with Express.
- Added a health check route (`/health-check`) to verify the app is running.
- Configured port and environment settings through `dotenv-safe` so it can run in different modes (development/production).
- Added logging with `pino` and `pino-http` to record incoming requests and status. Errors are logged as `error`, client problems as `warn`, and normal requests as `info`.
- Made the code simple and modular across these files:
  - `server.js`: starts the server and connects all middleware and routes.
  - `components/indexRoute.js`: has the health-check endpoint.
  - `config/index.js`: sets up app settings (port, environment).
  - `lib/logger.js`: sets up clean, readable logs.

## How to run it

1. Copy `.env.example` to `.env` and set values (if you add one).
2. Install packages: `npm install`
3. Start server: `npm run start`
4. Open `http://localhost:3120/health-check` in browser or use curl:
   - `curl http://localhost:3120/health-check`

## What this means in simple terms

If you or another developer wants to know whether the API is up, just call the single route above. If the response is positive, the app is working. This is the foundation for a monitoring tool and can be extended for more checks.
