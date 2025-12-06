import { io } from 'socket.io-client';

export function connectWS() {
    const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'https://websocket-chat-at6c.onrender.com/' || 'http://localhost:4600';
    return io(SOCKET_URL);
}