import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import Typewriter from 'typewriter-effect';

import { Model } from '../../assets/Model';

export default function Introduction() {

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-100 via-gray-300 to-neutral-400' id="introduction">
            <div className="relative h-screen overflow-hidden ">
                <div className="relative grid items-center grid-cols-2 px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <Typewriter
                            options={{
                                cursorClassName: "text-xl tracking-tight text-gray-900 font sm:text-6xl",
                                wrapperClassName: "text-4xl  font-bold tracking-tight text-gray-900 font sm:text-6xl",
                                strings: ['Hello', 'Namaste'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p className="mt-4 text-xl text-gray-500">
                            I'm Chris Thapa, a developer with about 4 years of experience.
                            I'm passionate about creating elegant, efficient code that solves real-world problems.
                            Let's work together to bring your ideas to life.
                        </p>
                    </div>
                    <div>
                        <div className="h-screen">
                            <Canvas
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
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
