const express = require('express');
const socketio = require('socket.io');
const http = require('http')
const{ addUser ,removeUser, getUser , getUserInRoom} = require('./user.js')

const router = require('./router');
const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);

 io.on('connection',(socket)=>{
     console.log('We have new connection');
     socket.on('join',({name, room},callback)=>{
         const {error , user }= addUser({ id:socket.id,  name ,room})
         if(error){
             return callback(error);
         }   
         socket.emit('message',{user:'admin',text:`${name}, welcome to the room  ${room}`})
         socket.broadcast.to(room).emit('message',{user:'admin',text:`${name}, has joined`})

       socket.join(room);   
       callback();    
     })
     socket.on('sendMessage',(message,callback)=>{
         const user = getUser(socket.id);
         io.to(user.room).emit('message',{user:name,text:message})
         callback();
     })
 socket.on('disconnection',()=>{
    console.log('User has left!');
})
})

app.use(router);

server.listen(PORT,()=> {console.log('server is working');});
