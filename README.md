# WebSocket Chat Application
A real-time chat application built with **Node.js/Express** backend and **React/Vite** frontend, using **Socket.IO** for WebSocket communication.

## Technologies Used

- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: React 19, Vite, Tailwind CSS
- **Communication**: WebSocket (Socket.IO)


## Features

✨ Real-time messaging using WebSocket  
✨ Live typing indicators  
✨ Join/leave notification
✨ Beautiful UI with Tailwind CSS  
✨ React 19 with Vite for fast development  
---

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (version 14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

---

## Installation & Setup

### Step 1: Clone this Repository

Please clone this repository

### Step 2: Install Backend Dependencies

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

This will install:
- `express` - Web framework for Node.js
- `socket.io` - Real-time communication library

### Step 3: Install Frontend Dependencies

Navigate to the frontend folder and install dependencies:

```bash
cd ../frontend
npm install
```

This will install:
- `react` - UI library
- `vite` - Fast build tool
- `socket.io-client` - WebSocket client
- `tailwindcss` - CSS framework

---

## Running the Application

### Step 1: Start the Backend Server

Open a terminal and run:

```bash
cd backend
node server.js
```

The server will start on **http://localhost:3000** (adjust port if different in your server configuration)

### Step 2: Start the Frontend Development Server

Open another terminal and run:

```bash
cd frontend
npm run dev
```

The frontend will typically start on **http://localhost:5173** (Vite's default port)

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

---

## Usage
IMP: **Open 2 or more broswser windows in parallel** 
1. **Enter Username**: When you first open the app, enter your username in the popup
2. **Send Messages**: Type your message and press Enter to send
3. **See Typing Indicators**: When someone is typing, you'll see a notification
4. **Real-time Updates**: All messages and typing indicators update in real-time across all connected clients.

---

## Project Structure

```
websocket-chat/
├── backend/
│   ├── package.json
│   └── server.js           # Express server with Socket.IO setup
│
└── frontend/
    ├── package.json
    ├── vite.config.js      # Vite configuration
    ├── index.html
    ├── src/
    │   ├── App.jsx         # Main React component
    │   ├── App.css         # Styles
    │   ├── main.jsx        # React entry point
    │   ├── ws.js           # WebSocket client setup
    │   └── assets/
    └── public/
```

---

### Frontend API Connection
To change the WebSocket connection URL, edit `frontend/src/ws.js` and update the socket.io-client connection.

***The End***