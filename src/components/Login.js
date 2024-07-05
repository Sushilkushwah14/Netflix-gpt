import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true)

  const toggleSignInForm=()=>{
   setisSignInForm(!isSignInForm)
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
    <form className=' w-3/12 absolute text-white p-7 my-24 mx-auto right-0 left-0 bg-gradient-to-b from-indigo-300 '> 
      <h1 className='font-bold text-3xl py-2 my-4 text-black'> {isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-xl'/>}
      <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 rounded-xl'/>
      <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-600 rounded-xl'/>
      <input type='password' placeholder='Confirm Password' className='p-2 my-4 w-full bg-gray-600 rounded-xl'/>
      <button className='p-4 my-4 bg-red-700 w-full rounded-xl
        bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
        >{isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className= ' cursor-pointer py-4 font-bold text-white text-lg' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now.":"Already registered! Signed In Now"}</p>
    </form>
    </div>
  )
}

export default Login
