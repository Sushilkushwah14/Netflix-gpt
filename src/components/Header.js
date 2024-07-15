import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGAUGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSice';
import { changeLangauge } from '../utils/configSlice';

 
const Header = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const user=useSelector((store)=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
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
  
 const handleGptSearchClick=()=>{
  //make toogle 
  dispatch(toggleGptSearchView())
 }

 const handleLangaugeChange=(e)=>{
  dispatch(changeLangauge(e.target.value))
 }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-2/12 '
      src={LOGO}
        alt='netflix-logo'
      />
      { user && (
        <div className='flex p-2'>
       {showGptSearch &&
        <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLangaugeChange}>
        {SUPPORTED_LANGAUGES.map((lang)=>( 
          <option key={lang.identifier}  value={lang.identifier}>
          {lang.name}
        </option>
        ))}
        </select>}

        <button className='py-2 px-4 mx-4 my-2 bg-purple-400 text-white rounded-xl'
             onClick={handleGptSearchClick}>
       { showGptSearch?"Homepage":"GPT Search"}
        </button>
        <img className='w-12 h-12 rounded-xl' src={user.photoURL }  alt='usericon'/>
        <button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>
      </div>)}
    
    </div>
  )
}

export default Header
