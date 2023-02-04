
import { useEffect, useState } from 'react';
import { addDoc,collection, serverTimestamp,onSnapshot,query,where, orderBy} from "firebase/firestore"
import '../App.css';
import { auth, db } from '../firebase-config';
export const Chat =(props)=>{
    const {room}=props
    const[newMessage,setNewMessage]=useState("")
    const[messages,setMessages]=useState([])
    const messagesRef=collection(db,"messages")

    useEffect(()=>{
     const queryMessage=query(messagesRef,where("room" , "==" ,room),orderBy("createdAt"))
    const suscribe= onSnapshot(queryMessage,(snapShot)=>{
        let messages=[]
        snapShot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id})
        })
        setMessages(messages);
     })
     return ()=>suscribe()
    },[])
    const handleSubmit=async(e)=>{
   e.preventDefault()
   if(newMessage==="") return;
   await addDoc(messagesRef,{
    text:newMessage,
    createdAt:serverTimestamp(),
    user:auth.currentUser.displayName,
    room,
   })
   setNewMessage("")
    }

    return(
        <div className="chat-app">
            <div className='header'>
                <h2>Welcome to:{room.toUpperCase()}</h2>
            </div>
            <div className='messages'>{messages.map((message)=> (
            
            <div className='message' key={message.id}>
                <span className='user'>{message.user}</span>
                
                {message.text}</div>))}</div>
            <form className="new-message-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter message here"className="new-message-input"
                onChange={(e)=>setNewMessage(e.target.value)}
                value={newMessage}
                />
                <button type="submit" className="send-button">send</button>
            </form>
        </div>
    )
}