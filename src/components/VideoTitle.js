import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-gray-950'>
     <h1 className='text-5xl font-bold'>{title}</h1>
     <p className='py-5 text-base w-1/4'> {overview}</p>
     <div className='-ml-3'>
        <button className='bg-white text-black p-4 px-8 text-xl  mx-2 rounded-lg hover:bg-opacity-80'>
        ▶️ Play</button>
        <button className='bg-gray-800 text-white p-4 px-8 text-xl  mx-2 rounded-lg hover:bg-opacity-80'>
        More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle
