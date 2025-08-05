import React from 'react'
import { BsArrowDown } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className="pt-24" id="header">
            <div className="bg-primary px-5 sm:px-20 py-16 text-default flex flex-col justify-center">
                <h1 className="underline font-semibold text-xl sm:text-5xl uppercase">Deva Rahma Nugroho</h1>
                <p className="text-lg sm:text-2xl lowercase">Web Developer</p>
                <p className="text-lg sm:text-2xl mt-2 mb-1 text-start sm:text-end">Hopefully Can Change The Future</p>
                <div className="flex items-center gap-2">
                    <a href="#about" className="py-0 px-2 sm:py-1 sm:px-3 bg-default text-primary rounded-sm capitalize text-lg sm:text-2xl hover:bg-opacity-95">About Me</a>
                    <BsArrowDown size={30} />
                </div>
            </div>
        </div>
    )
}

export default Hero;