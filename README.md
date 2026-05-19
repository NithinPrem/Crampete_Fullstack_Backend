# RaNdOm - Express Backend

A Node.js/Express REST API backend for the RaNdOm full stack application, using MongoDB for data persistence and JWT for authentication. Integrates with external APIs for movies, news, YouTube, and quotes.

---

## Features

- User registration and login with bcrypt password hashing
- JWT-based authentication for protected routes
- Movie data via TMDB API (top rated + search)
- News data via News API (top headlines + search)
- YouTube video search via Google Data API
- Random quotes
- HTTP security headers via Helmet
- CORS configured for the frontend origin

---

## Tech Stack

- **Node.js v20+** - runtime
- **Express 5** - web framework
- **Mongoose 9** - MongoDB ODM
- **bcryptjs** - password hashing
- **jsonwebtoken 9** - JWT authentication
- **helmet** - HTTP security headers
- **cors** - cross-origin request handling
- **dotenv** - environment variable management
- **body-parser** - request body parsing
- **Axios** - HTTP client for external API calls

---

## Project Structure

```
.
├── routes/          # API route handlers (login, signUp, update, delete, quotes, news, movies, YouTube)
├── database.js      # MongoDB connection and user schema
├── server.js        # Express app entry point
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v20 or higher
- MongoDB instance (local or cloud)
- API keys for TMDB, News API, and YouTube Data API v3

### Installation

```bash
git clone https://github.com/NithinPrem/Crampete_Fullstack_Backend.git
cd Crampete_Fullstack_Backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_DB_CONNECTION_KEY=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
NEWS_API_KEY=your_newsapi_key
TMDB_API_KEY=your_tmdb_key
YOUTUBE_API_KEY=your_youtube_data_api_key
```

### Running Locally

Development (with Node.js watch mode):

```bash
npm run dev
```

Production:

```bash
npm start
```

The server will run at `http://localhost:5000`.

---

## API Routes

All routes are prefixed with `/api`.

- `POST /api/login` - user login, returns JWT
- `POST /api/signup` - user registration
- `POST /api/update` - update user profile (JWT protected)
- `POST /api/delete` - delete user account (JWT protected)
- `GET /api/quotes` - random quotes
- `GET /api/news` - top headlines
- `GET /api/newssearch` - news search by keyword
- `GET /api/movies` - top rated movies
- `GET /api/moviesearch` - movie search by title
- `GET /api/youtube` - YouTube search by keyword

---

## Deployment

Requirements for any Node.js hosting platform:

- Node.js v20+
- Start command: `node server.js`
- All environment variables from the section above must be configured in your platform's settings

---

## Related Repository

Frontend: [Crampete_Fullstack_Frontend](https://github.com/NithinPrem/Crampete_Fullstack_Frontend)
