 import React from 'react'
 import GptMovieSuggestins from './GptMovieSuggestins'
 import GptSearchBar from './GptSearchBar'
import {  BGR_URl } from '../utils/constant'



 const GptSearch = () => {
   return (
     <div>
      <div className='fixed -z-10' >
        <img
        src={BGR_URl}
        alt='logo'
        />
    </div>
       <GptSearchBar/>
       <GptMovieSuggestins/>
     </div>
   )
 }
 
 export default GptSearch
 