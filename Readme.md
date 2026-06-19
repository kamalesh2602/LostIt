# LostIt

LostIt is a React Native application that helps users report, discover, and recover lost and found items. Users can post lost or found items, search listings, find potential matches, and directly contact item owners.

## Features

* Create Lost and Found posts
* Search items by title
* Filter Lost, Found, Active, and Claimed items
* My Posts view
* Mark items as claimed
* Delete owned posts
* Match Finder for similar lost/found items
* Match Count badge on every item
* Direct phone call support
* Pull-to-refresh
* MongoDB persistence

## Tech Stack

### Frontend

* React Native
* Expo
* AsyncStorage
* Expo Image Picker

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
lostit-client/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── screens/
│   ├── services/
│   └── utils/
├── App.js
└── .env

lostit-server/
├── controllers/
├── models/
├── routes/
├── config/
└── server.js
```

## Environment Variables

Client `.env`

```env
EXPO_PUBLIC_API_URL=http://YOUR_IP:5000/api
```

Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Installation

### Backend

```bash
cd lostit-server
npm install
npm run dev
```

### Frontend

```bash
cd lostit-client
npm install
npx expo start
```

## Match Finder

LostIt automatically finds potential matches between Lost and Found posts based on:

* Category
* Title similarity
* Active status

Users can view potential matches and directly contact the poster.

## Future Improvements

* Image upload via Cloudinary
* Location-based filtering
* Campus hotspot analytics
* Better match ranking

## Author

Kamalesh G
