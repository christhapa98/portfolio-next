import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import post from "../../assets/pose2.png"
import pose2 from "../../assets/pose.png"

import { motion, AnimatePresence } from 'framer-motion'

export default function Introduction() {
    const [isHovered, setIsHovered] = useState(false);
    const image = !isHovered ? post : pose2;
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-100 via-gray-300 to-neutral-400' id="introduction">
            <div className="relative h-screen overflow-hidden ">
                <div className="relative grid items-center grid-cols-2 px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                        <div className='grid items-end grid-cols-2'>
                            <Typewriter
                                options={{
                                    cursorClassName: "text-xl tracking-tight text-gray-900 font sm:text-6xl",
                                    wrapperClassName: "text-4xl  font-bold tracking-tight text-gray-900 font sm:text-6xl",
                                    strings: ['Hello', 'Namaste'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 0.5 }}
                            className="mt-4 font-mono text-xl text-gray-500">
                            Im Chris Thapa, feel free to know me
                        </motion.div>
                    </div>
                    <div>
                        <motion.div className="flex items-end h-screen"
                            transition={{ duration: 3 }}
                            initial={{ scale: 1.1 }} animate={{ scale: 1 }} whileHover={{ scale: 1 }}>
                            <AnimatePresence>
                                <motion.img src={image.src} initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.1 } }}
                                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                                    height={800} className="" width={800} alt={''} />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
