# LostIt

LostIt is a community-driven Lost & Found platform built with React Native, Node.js, MongoDB Atlas, and Render.

The application helps users report, discover, and recover lost items through a simple mobile-first experience.

## Features

* Report lost items
* Report found items
* Search items
* Match lost and found items
* View possible matches
* Mark items as claimed
* Delete your own posts
* My Posts filter
* Direct call to item owner
* Pull-to-refresh support
* Cloud-hosted backend using Render
* MongoDB Atlas database

## Tech Stack

### Frontend

* React Native
* Expo
* AsyncStorage
* Expo Image Picker

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Render
* MongoDB Atlas

## Project Structure

```text
lostit-client/
lostit-server/
```

## Installation

### Backend

```bash
cd lostit-server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run:

```bash
npm run dev
```

### Frontend

```bash
cd lostit-client
npm install
```

Create a `.env` file:

```env
EXPO_PUBLIC_API_URL=http://<ip>/api  
```

Run:

```bash
npx expo start
```

## API Endpoints

### Get Items

```http
GET /api/items
```

### Create Item

```http
POST /api/items
```

### Mark Claimed

```http
PATCH /api/items/:id/claim
```

### Delete Item

```http
DELETE /api/items/:id
```

### Get Matches

```http
GET /api/items/:id/matches
```

## Roadmap

### Version 1.0

* Lost and found reporting
* Matching system
* Ownership protection
* Mobile app deployment

### Future Versions

* Push notifications
* Smarter matching algorithm
* Cloud image storage
* Community moderation tools

## Contributing

Contributions are welcome.

Please read CONTRIBUTING.md before submitting pull requests.

## License

This project is licensed under the MIT License.
