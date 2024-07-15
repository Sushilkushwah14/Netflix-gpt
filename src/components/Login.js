import React ,{ useRef, useState } from 'react'
import Header from './Header'
import { checkvalidadata } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BGR_URl, USER_AVATAR } from '../utils/constant'


const Login = () => {

  const [isSignInForm,setisSignInForm]=useState(true)
  const [errormessage,seterrormessage]=useState(null)

  const dispatch=useDispatch()
  
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
  
  if(message) return; //message means any error message
  
  //SignIn and SignUp logic

  if(!isSignInForm){
 //not signin so we write signup logic
 createUserWithEmailAndPassword(
  auth,
   email.current.value,
   password.current.value,
   name.current.value,
  )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

    updateProfile(user, {
      displayName:name.current.value,
     photoURL:USER_AVATAR
    })
    .then(() => {
 // Profile updated! Again updating our store after photourl and name
      const{ uid,email ,displayName,photoURL} = auth.currentUser;
      dispatch(                        //auth.currentUser ko samajhna hai????
        addUser({
          uid:uid,
          email:email ,
          display:displayName,
          photoURL:photoURL,
        })
      )
    
    })
    .catch((error) => {
      // An error occurred while updating
      seterrormessage(error.message)
    });
   console.log(user)
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrormessage(errorCode+"-"+errorMessage)
  });
  }


  else{
 //  we write sigin logic
 signInWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
console.log(user);
  
updateProfile(user, {
  displayName:name.current.value,
 photoURL:USER_AVATAR
})
.then(() => {
// Profile updated! Again updating our store after photourl and name
  const{ uid,email ,displayName,photoURL} = auth.currentUser;
  dispatch(                        //auth.currentUser ko samajhna hai????
    addUser({
      uid:uid,
      email:email ,
      display:displayName,
      photoURL:photoURL,
    })
  )

})
.catch((error) => {
  // An error occurred while updating
  seterrormessage(error.message)
});

})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
  });
  }

  }
 

  return (
    <div  >
    <Header/>
    <div className='absolute ' >
        <img
        src={BGR_URl}
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
      <p
       className='text-red-600 font-bold text-lg p-2'>
       {errormessage}
      </p>
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
