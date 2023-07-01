import { useState, useEffect } from 'react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(true);

    function handleScroll() {
        const isScrolledDown = window.scrollY > window.innerHeight / 2;
        setIsVisible(isScrolledDown);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (

        <button onClick={handleClick} className={`fixed hover:scale-105 bottom-20  md:bottom-4 right-4 bg-white-500 text-black border border-gray-500 bg-white rounded-full p-3 shadow-xl transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
    );
}
