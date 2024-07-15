import React from 'react'
import lang from '../utils/langaugeConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center rounded-xl'>
      <form className='rounded-xl w-1/2 bg-black grid grid-cols-12 '>
        <input 
        type='text'
         className='p-4 m-4 col-span-9 rounded-xl' 
         placeholder={lang[langKey].gptSearchPlaceholder} >
         </input>
        <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-xl '>
       {lang[langKey].search}
        </button>
     
      </form>
    </div>
  )
}

export default GptSearchBar
