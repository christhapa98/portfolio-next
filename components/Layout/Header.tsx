import React from 'react'
import { Link } from 'react-scroll';

export default function Header() {
    const links = [{ title: 'About', link: "introduction" }, { title: "Contact", link: "contact" }, { title: "Skills", link: "skills" }, { title: "Projects", link: "projects" }];
    return (
        <header className="fixed z-50 transform -translate-x-1/2 bg-white shadow top-2 left-1/2 rounded-3xl">
            <nav className="flex items-center justify-between gap-5 p-2 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                {links.map((item: any, index: number) => {
                    return (
                        <Link to={item.link} smooth={true} duration={500} key={index} className={`px-4 py-1 cursor-pointer hover:bg-gray-100  rounded-full ${index === 2 && "bg-gray-200"}`}>
                            <span className="text-gray-800">{item.title}</span>
                        </Link>
                    )
                })}
            </nav>
        </header >
    )
}
