import React , {useState , useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import './chat.css'
import InfoBar from "../InfoBar/Infobar.js"
import Input from '../Input/Input.js'
import Messages from '../Messages/messages.js'
let socket;

const Chat = ({ location })=>{
    const [name , setName] = useState("");
    const [room , setRoom] = useState("");
    const [messages,setMessages]=useState([]);
    const [message,setMessage]=useState('');
    const ENDPOINT ='localhost:5000' ;
    
    useEffect(()=>{
         const {name , room} = queryString.parse(location.search);
         socket = io(ENDPOINT)
         console.log(socket)
         setRoom(room);
         setName(name);

         socket.emit('join',{name , room },()=>{
          
         })
         return()=>{
             socket.emit('disconnection');
             socket.off()
         }
    },[ENDPOINT,location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        },[messages]);

    })
    
    const sendMessage =(event)=>{
        event.preventDefault()
        if(message){
        socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    
    console.log(message,messages)

    return(
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}>
                </InfoBar>
                <Messages messages={messages} name={name}> 
                </Messages>
                 <Input message={message} setMessage={setMessage} sendMessage={sendMessage}>
                 </Input>
            </div>
        </div>
    )
}
export default Chat;