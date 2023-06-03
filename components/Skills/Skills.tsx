import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.section
      style={{ backgroundImage: "url(https://www.imaginefactory.com/wp-content/uploads/2017/04/SPACES_BG-2.jpg)", }}
      className='flex items-center justify-center min-h-screen'
      id="skills">
      <div className='absolute w-screen h-screen bg-black opacity-75' />
      <motion.div
        layout
        data-isOpen={isOpen}
        style={{ backgroundImage: "url(https://www.imaginefactory.com/wp-content/uploads/2017/04/SPACES_BG-2.jpg)", }}
        whileHover={{ scale: isOpen ? 1 : 1.2 }}
        className={`parent z-10 ${!isOpen && " hover:animate-pulse"} cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          initial={{ opacity: 0, scale: isOpen ? 1 : 0 }}
          animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
          transition={{ duration: 2 }} className={`child  mx-auto  ${isOpen ? "" : "hidden"} flex flex-col justify-between`}>
          <h2 className="pb-8 font-mono text-2xl font-bold text-center text-gray-900 uppercase border-b-2 sm:text-3xl">
            Skills
          </h2>
          <div className="grid grid-cols-4 gap-5 mt-6 md:gap-x-16 md:grid-cols-7 lg:mt-8">
            {skills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                description={""}
                icon={skill.icon}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export const skills = [
  {
    name: 'ReactJs',
    icon: "https://reactjs.org/logo-og.png",
    category: "Frontend"
  },
  {
    name: 'Flutter',
    icon: "https://res.cloudinary.com/teepublic/image/private/s--lxNXHPN3--/c_fit,g_north_west,h_840,w_679/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1585726530/production/designs/8796655_0.jpg",
    category: "Mobile"
  },
  {
    name: 'MERN',
    icon: "https://gossett.dev/static/b52512d9402df77db7e9436af0bb44d0/b53ef/mern.png",
    category: "Full Stack"
  },
  {
    name: 'NextJs',
    icon: "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
    category: "ReactJS Framework"
  },
  {
    name: 'Dart',
    icon: "https://www.fluttericon.com/logo_dart_192px.svg"
  },
  {
    name: 'Firebase',
    icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
  },
  {
    name: 'NestJS',
    icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--xfAYl4Wt--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/899zzeo7c2i92zv9ukyr.png"
  },
];

export const Skill = ({ name, description, icon }: any) => (
  <div className="flex items-center mb-6">
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={icon} className="object-cover w-16 h-16 rounded-full hover:scale-110" />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  </div>
);
