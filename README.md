# Full-stack JWT Auth (Node + React)

This project contains a minimal JWT authentication backend (Node.js + Express + MongoDB) and a React frontend (Vite + React Router + Axios + Tailwind).

## Setup

Prerequisites: Node.js 18+, npm, MongoDB running locally or via Docker.

### Backend

1. Open a terminal:
   - `cd backend`
   - `npm install`
   - Copy env file: PowerShell → `copy .env.example .env`
   - Edit `.env` (set `MONGO_URI` and `JWT_SECRET`)
   - Start: `npm run dev`

API runs at `http://localhost:5000`.

### Frontend

1. Open another terminal:
   - `cd frontend`
   - `npm install`
   - Optional: create `frontend/.env` with `VITE_API_URL=http://localhost:5000`
   - Start: `npm run dev`

App runs at `http://localhost:5173`.

## Endpoints

- `POST /auth/signup` → { name, email, password } → returns `{ token, user }`
- `POST /auth/login` → { email, password } → returns `{ token, user }`
- `GET /auth/profile` (protected) → Authorization: Bearer `<token>` → returns `{ user }`

## Do we need a database for auth tokens?

- For verifying JWTs: no database is required. JWTs are self-contained and verified using `JWT_SECRET`.
- For users and credentials: yes, a database is recommended to persist users and check passwords during login. This repo uses MongoDB via Mongoose.
- For token revocation/blacklist (logout everywhere, forced logout): a datastore (DB/Redis) is needed to track invalidated tokens or use short-lived JWTs with refresh tokens stored server-side.

## Switch to MySQL

Use an ORM (Prisma/Sequelize). Replace Mongoose calls in `backend/models/User.js` and DB connection in `backend/config/db.js` with ORM equivalents. Keep fields: `id, name, email (unique), password (hashed), createdAt, updatedAt`.

