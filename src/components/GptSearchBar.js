import React, { useRef } from 'react'
import lang from '../utils/langaugeConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSice'

const GptSearchBar = () => {
    const dispatch=useDispatch()
    
    const langKey=useSelector((store)=>store.config.lang)
    
    const searchText=useRef(null)//( reference Dena )to get text written in a any box

    //search for got movies from gpt in TMDB database
    const searchMovieTMDB=async (movie) => {

      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
        + movie +
        '&include_adult=false&language=en-US&page=1',
         API_OPTIONS
        );
        const json=await data.json()
       
        return json.results;
   
    }

    const handleGptSearchClick = async ()=>{
      console.log(searchText.current.value );
      //Make an api call to Gpt Api and get Movie Result as Text Written
    
      const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query:"
          +searchText.current.value
          +".only give me names of 5 movies,comma seperated like the example result given ahead.Example result:Gadar,Sholay,Don,Koi mil gaya ";

      const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices){
        //TODO:Write Error handling
      }
      console.log(gptResults.choices?.[0]?.message?.content);
     
      //Andaz apna apna ,Hera pheri,chup chup ke,jane bhi do yarron,Padosan
       const gptMovie=gptResults.choices?.[0]?.message?.content?.split(",")

       //split will give an array=[Andaz apna apna ,Hera pheri,chup chup ke,jane bhi do yarron,Padosan]
        
      //for each movie I will search TMDB API
 
      const promiseArray=gptMovie.map((movie)=>searchMovieTMDB(movie));
     //[promise,promise,promise,promise,promise]

     const tmdbResults=await Promise.all(promiseArray)
     console.log(tmdbResults);

     dispatch(addGptMovieResult({movieNames:gptMovie ,movieResults:tmdbResults}) )
    
      } 


  return (
    <div className='pt-[10%] flex justify-center rounded-xl'>
      <form 
      className='rounded-xl w-1/2 bg-black grid grid-cols-12 '
      onSubmit={(e)=>e.preventDefault()}
      >
        <input 
         ref={searchText}//( reference Banana)
         type='text'
         className='p-4 m-4 col-span-9 rounded-xl' 
         placeholder={lang[langKey].gptSearchPlaceholder} >
        </input>

        <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-xl '
         onClick={handleGptSearchClick}>
          
          {lang[langKey].search}
        </button>
     
      </form>
    </div>
  )
}

export default GptSearchBar
