# traceguard-core-service

A sample Express API service.

## Setup

```bash
npm install
```

## Running

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/posts` | Fetch posts from JSONPlaceholder |
| GET | `/api/posts/:id` | Fetch a single post by ID |

## Project Structure

```
src/
├── app.js              # Express app setup
├── config/             # Configuration
├── controllers/        # Route handlers
└── routes/             # Route definitions
```
