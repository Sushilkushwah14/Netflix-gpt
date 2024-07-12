import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

 
const Header = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
  
          
  }).catch((error) => {
    // An error happened.
          navigate("/error")
  });
}

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(
        addUser({
          Uid:uid,
          Email:email,
          Displayname:displayName,
          Photo:photoURL
        })
      )
      navigate("/browse")
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    }
  }); 

  //Unsubscribing when component unmounts
  return ()=>unsubscribe()
 },[]);
  

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-2/12 '
      src={LOGO}
        alt='netflix-logo'
      />
      { user && (<div className='flex p-2'>
        <img className='w-12 h-12 rounded-xl' src={user.photoURL }  alt='usericon'/>
        <button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>
      </div>)}
    
    </div>
  )
}

export default Header
