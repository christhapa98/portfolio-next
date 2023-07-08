import React, { useState } from 'react'
import { Link } from 'react-scroll';
import post from "../../assets/pose.png";

export default function Header() {
    const [selected, setSelected] = useState("introduction");
    return (
        <header className="fixed z-50 transition-all transform -translate-x-1/2 bg-white shadow hover:scale-110 top-2 left-1/2 rounded-3xl">
            <nav className="flex items-center justify-between gap-5 p-2 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <Link onClick={() => setSelected("introduction")} to={"introduction"} smooth={true} duration={500} className="cursor-pointer">
                    <img src={post.src} height={40} width={40} alt={''} />
                </Link>
                {links.map((item: any, index: number) => {
                    return (
                        <Link
                            onClick={() => setSelected(item.link)}
                            to={item.link}
                            smooth={true}
                            duration={500}
                            key={index}
                            className={`px-4 py-1 cursor-pointer hover:bg-gray-100  rounded-full ${item.link === selected && "bg-gray-200"}`}>
                            <span className="text-gray-800">{item.title}</span>
                        </Link>
                    )
                })}
            </nav>
        </header >
    )
}

const links = [
    { title: 'About', link: "about" },
    { title: "Skills", link: "skills" },
    { title: "Services", link: "services" },
    { title: "Projects", link: "projects" },
];