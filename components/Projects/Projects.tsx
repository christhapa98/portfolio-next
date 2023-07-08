import React from 'react'
import { projects } from '@/constants/projexts'
import { Carousel } from 'react-responsive-carousel'

export default function Projects() {
  return (
    <div id="projects" className="flex items-center justify-center h-screen p-40 bg-gradient-to-r from-indigo-500 to-purple-500">
      <Carousel>
        {projects.map((item, i) => <div className='p-5 transition-all shadow opacity-50 cursor-pointer hover:bg-white hover:opacity-100 rounded-xl hover:-translate-y-6' >
          <h2 className='font-bold '>{item.title}</h2>
          <img className='w-40 rounded-full shadow' src='https://play-lh.googleusercontent.com/91yKQuGhCHRhrQ0QaIGrBZT4gaWBmrR3yn_x4PbEVmpM0jdLceVV9DbopB32Ka7ujIk=w240-h480-rw' />
        </div>)}
      </Carousel>
    </div>
  )
}