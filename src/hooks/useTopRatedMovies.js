import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const useTopRatedMovies=()=>{
    
  const dispatch=useDispatch()

  const topRatedMovies=useSelector((store)=>store.movies.TopRatedMovies)

  const getTopRatedMovies= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated'
        , API_OPTIONS
    )
    const json=await data.json();
    // console.log(json);
    // console.log(json.results );
    dispatch(addTopRatedMovies(json.results))
  }
  
  useEffect(()=>{ 
   !topRatedMovies && getTopRatedMovies()
  },[])
  
}

export default useTopRatedMovies