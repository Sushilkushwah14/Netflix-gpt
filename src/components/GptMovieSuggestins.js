import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const GptMovieSuggestins = () => {
  const gpt=useSelector(store=>store.gpt)
  const {movieNames,movieResults}=gpt;
  if(!movieNames) return null;


  return (
    <div className='p-4 m-4 bg-opacity-90 text-white bg-black  '>
     <div>
     {movieNames.map((movieName,index)=> <Movielist key={movieName} title={movieName} movies={movieResults[index]}/>)}
  
     </div>
    </div>
  )
}

export default GptMovieSuggestins
 