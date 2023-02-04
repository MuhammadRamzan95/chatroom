import { useState ,useRef} from 'react';
import './App.css';
import { Auth } from './component/Auth'
import Cookies from 'universal-cookie'
import { Chat } from './component/Chat';
const cookies = new Cookies();

function App() {
  const[isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const[room,setRoom]=useState(null)
  const inputRef=useRef(null)
  if(!isAuth){
  return (
    <div>
      <Auth setIsAuth={setIsAuth} />
    </div>
  )
  };
  return( 
  <div> 
    {room ? (<Chat room={room} />)
  
  :( 
    <div className='room'>
      <label>Enter Room Name</label>
    <input type="text"ref={inputRef} />
    <button onClick={()=>setRoom(inputRef.current.value)}>Enter chat</button>
    </div>
  )}
     </div>
     )
}

export default App

