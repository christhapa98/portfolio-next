import React, { useState } from 'react'
import { projects } from '@/constants/projexts'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [selectedData, setSelectedData] = useState<any>(null);

  return (
    <div id="projects" className="flex items-center justify-center h-screen p-40 bg-gradient-to-r from-indigo-500 to-purple-500 ">
      <section className='grid grid-cols-3 p-5 gap-5 max-h-[70Vh] overflow-auto'>
        {projects.map((item: any, index: number) => (
          <motion.div className="bg-white p-5 rounded-xl transition-all cursor-pointer hover:scale-105 flex gap-4 items-center justify-center" layoutId={item.id} key={index} onClick={() => {
            setSelectedData(item)
          }}>
            {item.image !== "" ? < img className='rounded-xl w-20 ' src={item?.image} /> : null}
            <motion.h2 clasName="text-xl font-bold">{item.title}</motion.h2>
          </motion.div>
        ))}
      </section>
      <AnimatePresence>
        {selectedData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedData(null)}
              className='bg-gray-800  absolute h-screen w-screen ' />
            <motion.div
              className="absolute bg-white p-5 rounded-xl" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} layoutId={selectedData.id}>
              <div className='grid grid-cols-3 max-w-6xl max-h-[70VH] gap-5 items-center'>
                <div className='p-5'>
                  {selectedData.image !== "" && < img className='rounded-xl ' src={selectedData?.image} />}
                </div>
                <div className='col-span-2 '>
                  <div className='overflow-y-auto'>
                    <h2 className="text-xl font-semibold">{selectedData?.title}</h2>
                    <p>{selectedData.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}