import React from 'react'
import ListVideo from './ListVideo'
import Player from './Player'

const VideoMain = () => {
  return (
    <section className='w-[100%] bg-gray-100'>
          <article className='w-[95%] m-auto flex' >
              <div className='basis-[70%]'>
                  <Player/>
              </div>
              <div className='w-[30%] '>
                  <ListVideo/>
              </div>
        </article>
          

    </section>
  )
}

export default VideoMain