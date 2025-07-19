# 🖊 Collaborative Whiteboard Backend

## 📚 Overview
This is the backend service for the Collaborative Whiteboard App. It uses Express.js, MongoDB, and Socket.io to support real-time whiteboard collaboration and persistent room management.

---

## 🚀 Tech Stack
- **Server:** Node.js + Express.js
- **Database:** MongoDB with Mongoose
- **Real-time:** WebSocket with Socket.io
- **API:** RESTful

---

## 🔌 API Endpoints

### `POST /api/rooms/join`
Create or join a whiteboard room.
```json
{
  "roomId": "abc123"
}
```
Response:
```json
{
  "roomId": "abc123",
  "drawingData": [...],
  "createdAt": "..."
}
```

### `GET /api/rooms/:roomId`
Get existing room data.
```json
{
  "roomId": "abc123",
  "drawingData": [...]
}
```

---

## 📡 Socket Events
| Event         | Direction       | Description                         |
|---------------|------------------|-------------------------------------|
| `join-room`   | Client → Server  | Join room by roomId                 |
| `leave-room`  | Client → Server  | Leave the room                      |
| `draw-start`  | Client → Server  | Start drawing stroke                |
| `draw-move`   | Client → Server  | Continue stroke path                |
| `draw-end`    | Client → Server  | End the drawing stroke              |
| `cursor-move` | Bidirectional    | Track and sync cursor position      |
| `clear-canvas`| Client → Server  | Clears the entire canvas            |
| `user-joined` | Server → Client  | Notifies others of a new user       |
| `user-left`   | Server → Client  | Notifies others when user leaves    |

---

## 🗃 Folder Structure
```
server/
├── config/          # MongoDB connection
│   └── db.js
├── models/          # Mongoose schemas
│   └── Room.js
├── routes/          # REST API routes
│   └── roomRoutes.js
├── socket/          # Socket logic
│   └── socketHandlers.js
├── server.js        # App entry
└── README.md
```

---

## ⚙️ Setup Instructions
1. Install packages:
```bash
npm install
```
2. Start MongoDB locally (in a separate terminal):
```bash
mongod
```
3. Run the server:
```bash
node server.js
```

> Server starts on `http://localhost:5000`

---

## 📌 Notes
- No authentication required
- Room and drawing data are persisted in MongoDB
- Cursor and stroke updates are broadcasted via WebSocket
- Room schema is extendable for future features like chat, saving history, etc.

---

# 🎨 Collaborative Whiteboard Frontend

## 📚 Overview
This is the frontend client of the Collaborative Whiteboard App built with React, Redux Toolkit, Tailwind CSS, and Socket.io-client. It allows multiple users to draw together on a shared canvas in real-time.

---

## 🚀 Tech Stack
- **Frontend:** React.js (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Real-time Communication:** Socket.io-client
- **Animation:** Framer Motion

---

## 📁 Folder Structure
```
client/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components (Canvas, Toolbar, etc.)
│   ├── features/          # Redux slices
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Pages (Home, Room, etc.)
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Root component
│   ├── main.jsx           # App entry
│   └── index.css          # Tailwind styles
├── tailwind.config.js     # Tailwind config
├── vite.config.js         # Vite config
└── README.md
```

---

## 🧠 Key Features
- Real-time whiteboard drawing
- Multiple users per room
- Unique Room ID management
- Live cursor sharing
- Clear canvas functionality
- Responsive UI with Tailwind

---

## ⚙️ Setup Instructions
1. Navigate to the frontend directory:
```bash
cd client
```
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```

> App starts on `http://localhost:5173`

Make sure the backend is also running on `http://localhost:5000`.

---

## 📌 Notes
- Built using industrial best practices
- Socket.io integrated with Redux state
- Components structured for reusability and scalability
- Ready for feature extensions like chat, history, or saving snapshots
