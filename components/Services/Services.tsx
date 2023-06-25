import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Services() {
  return (
    <div id="services" className="flex items-center justify-center h-screen p-40 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className='p-10 bg-white rounded-2xl'>
        <div className='grid items-end grid-cols-1'>
          <p className="pb-5 mt-4 text-4xl font-bold">Services I Provide</p>
          <Typewriter
            options={{
              cursorClassName: "text-xl tracking-tight text-gray-900 font",
              wrapperClassName: "text-xl  tracking-tight text-gray-900 font ",
              strings: ['Web Development', 'Mobile Development'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}
