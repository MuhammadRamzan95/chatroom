import { auth,provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies();


export const Auth = (props)=>{
    const {setIsAuth}=props
    const signinWithGoogle= async()=>{
    try{ 
    const result=await signInWithPopup(auth,provider)
    cookies.set("auth-token",result.user.refreshToken)
    setIsAuth(true)
    }catch(err){
        console.error(err)
    }
    }
    return(
        <div className="auth">
            <p>sign in with Google Continue</p>
            <button onClick={signinWithGoogle}>sign in with Gooogle</button>
        </div>
    )
}