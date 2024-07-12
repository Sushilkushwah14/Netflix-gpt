import React from 'react'
import MovieCards from './MovieCards'

const Movielist = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-5'>
    <h1 className='text-2xl py-3 text-white'>{title}</h1>
     <div className='flex overflow-x-scroll hide-scrollbar'>
        <div className='flex'>
        {movies && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCards key={movie?.id} posterPath={movie?.poster_path}/>
                        ))
                    ) : (
                        <p>No movies available</p>
                    )}
        </div>
     </div>
    </div>
  )
}

export default Movielist
