import React from 'react'
import './loginSignup.css'
import {useState} from 'react'
const LoginSignup = () => {
    const [action,setAction]=useState("Login");


  return (
    <div className='container'>
      <div className='signup'>
        <div className='sp'>{action}</div>
        <div className='underline'></div>
        {action==="Login"?<div></div>: <div className='input'>
            <input type="text" placeholder='Enter your name'/><br/>
        </div>}
        
        <div className='input'><input type='email' placeholder='Enter your email'/><br/>
        </div>
        <div className='input'>
            <input type='password' placeholder='Enter your password'/><br/>
        </div>
        {action==="Sign Up"? <div></div> : <div className='forgot-pass'>Forgot Password</div>}
             
        
        <div className='submit'>
            <label className={action==="Login"? "buttons": "gray"} onClick={(()=>{setAction("Login")})}>Login</label>
            <label className={action==="Sign Up"? "buttons": "gray"} onClick={(()=>{setAction("Sign Up")})}>SignUp</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
