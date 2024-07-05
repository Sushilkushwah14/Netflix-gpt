import React ,{ useRef, useState } from 'react'
import Header from './Header'
import { checkvalidadata } from '../utils/validate'


const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true)
  const [errormessage,seterrormessage]=useState(null)
  const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm)
  }
  const name=useRef([])
  const email=useRef([])
  const password=useRef([])

  const HandleButtonClick=()=>{
    //validate the form data
   //checkvalidadata(email,password)
    // console.log(email)
   console.log(email.current.value)
   console.log(password.current.value)
   console.log(name.current.value)
   const message=checkvalidadata(email.current.value,password.current.value,name.current.value )
  // console.log(message);
  seterrormessage(message)
  
  }
 

  return (
    <div  >
    <Header/>
    <div className='absolute ' >
        <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg'
        alt='logo'
        />
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute rounded-lg text-white p-7 my-24 mx-auto right-0 left-0 bg-gradient-to-b from-indigo-300 '> 
     
      <h1 className='font-bold text-3xl py-2 my-4 text-black'> {isSignInForm?"Sign In":"Sign Up"}</h1>
      
      {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-xl'/>}
      
      <input  
      ref={email}
      type='text'
       placeholder='Email Address' 
       className='p-2 my-4 w-full bg-gray-600 rounded-xl'

       />
      <input 
       ref={password }
      type='password' 
      placeholder='Password'
       className='p-2 my-4 w-full bg-gray-600 rounded-xl'

       />
      {/* <input 
      ref={password }
      type='password' 
      placeholder='Confirm Password' 
      className='p-2 my-4 w-full bg-gray-600 rounded-xl'

      /> */}
      <p className='text-red-600 font-bold text-lg p-2'> {errormessage}</p>
      <button
       className='p-4 my-4 bg-red-700 w-full rounded-xl
        bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
        onClick={HandleButtonClick}
        >
        {isSignInForm?"Sign In":"Sign Up"}
      </button>
        
        <p className= ' cursor-pointer py-4 font-bold text-white text-lg' onClick={toggleSignInForm}>
        {isSignInForm
        ?"New to Netflix? Sign Up Now."
        :"Already registered! Signed In Now"}
        </p>

    </form>
    </div>
  )
}

export default Login
