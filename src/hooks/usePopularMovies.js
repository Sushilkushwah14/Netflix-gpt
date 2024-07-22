import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const usePopularMovies=()=>{
    
  const dispatch=useDispatch()

  const popularMovies=useSelector
  ((store)=>store.movies.PopularMovies
 );


  const getPopularMovies= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular'
        , API_OPTIONS
    )
    const json=await data.json();
    // console.log(json);
    // console.log(json.results );
    dispatch(addPopularMovies(json.results))
  }
  
  useEffect(()=>{ 
    !popularMovies && getPopularMovies()
  },[])
  
}

export default usePopularMovies