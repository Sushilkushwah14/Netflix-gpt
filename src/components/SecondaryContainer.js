import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='w-screen bg-black bg-gradient-to-r from-black via-purple-600 to-black '> 
    <div className='-mt-28 pl-2 relative z-20  '>   
    <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
    <Movielist title={"Top Rated"} movies={movies?.TopRatedMovies}/>
    <Movielist title={"Popular"} movies={movies?.PopularMovies}/>
    <Movielist title={"Upcomming Movies"} movies={movies?.UpcommingMovies}/>
    {/* <Movielist title={"Highest Rated"} movies={movies?.nowPlayingMovies}/> */}
    </div>
 
    </div>
  )
}

export default SecondaryContainer
