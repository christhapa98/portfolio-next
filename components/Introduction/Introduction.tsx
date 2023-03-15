import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import Typewriter from 'typewriter-effect';
import post from "../../assets/pose2.png"

import { Model } from '../../assets/Model';

import { motion } from 'framer-motion'

export default function Introduction() {

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-100 via-gray-300 to-neutral-400' id="introduction">
            <div className="relative h-screen overflow-hidden ">
                <div className="relative grid items-center grid-cols-2 px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <div className='grid grid-cols-2 items-end'>
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
                            className="mt-4 text-xl text-gray-500 font-mono">
                            I'm Chris Thapa, feel free to know me
                        </motion.div>
                    </div>
                    <div>
                        <motion.div className="h-screen flex items-end" initial={{ scale: 1.5 }} animate={{ scale: 1 }} whileHover={{ scale: 1.02 }}>
                            <img src={post.src} height={800} className="" width={800} alt={''} />
                            {/* <Canvas
                                camera={{ position: [2, 0, 12.25], fov: 10 }}
                            >
                                <ambientLight intensity={1} />
                                <ambientLight intensity={0.1} />
                                <directionalLight intensity={0.4} />
                                <Suspense fallback={null}>
                                    <Model position={[0.025, -0.9, 0]} />
                                </Suspense>
                                <OrbitControls
                                    autoRotate={false}
                                    enableZoom={false}
                                    enablePan={false}
                                    enableRotate={true}
                                />
                            </Canvas> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
