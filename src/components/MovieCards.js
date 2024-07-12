import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-40 pr-3 shadow-xl shadow-slate-50 '>
      <img className='h-30 rounded-xl' alt='Movie Card' src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCards
