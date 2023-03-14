import Image from 'next/image';
import React from 'react'
import post from "../../assets/pose.png";

export default function Contact() {
  return (
    <div className='min-h-screen bg-red-400' id="contact">
      <Image src={'/pose.png'} height={200} width={200} loader={(load) => ""} alt={''} />
    </div>
  )
}
