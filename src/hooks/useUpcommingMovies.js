import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUpcommingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const useUpcommingMovies=()=>{
    
  const dispatch=useDispatch()

  const getUpcommingMovies= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming'
        , API_OPTIONS
    )
    const json=await data.json();
    // console.log(json);
    // console.log(json.results );
    dispatch(addUpcommingMovies(json.results))
  }
  
  useEffect(()=>{ 
    getUpcommingMovies()
  },[])
  
}

export default useUpcommingMovies