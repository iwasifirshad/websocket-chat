import {createServer} from 'node:http';
import express from 'express';
import {Server} from 'socket.io';

const allowedOrigins = [
'http://localhost:5173',
    'http://localhost:3000',
    'https://websocket-chat-red.vercel.app',
    process.env.FRONTEND_URL || ''
].filter(Boolean);

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST'],
        credentials: true
    }
});  
const ROOM = 'group';

io.on('connection', (socket) => {
    socket.on('joinRoom', async(userName) =>{
        console.log(`${userName} joined the chat.`);
        await socket.join(ROOM);
        socket.to(ROOM).emit('roomNotice', userName);
    });

    socket.on('chatMessage', (msg)=>{
        socket.to(ROOM).emit('chatMessage', msg);
    })

    socket.on('typing', userName =>{
        socket.to(ROOM).emit('typing', userName);
    })

    socket.on('stopTyping', userName =>{
        socket.to(ROOM).emit('stopTyping', userName);
    })
});

app.get('/', (req, res) => {
    res.send('WebSocket Chat Server is running');
});

const PORT = process.env.PORT || 4600;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
