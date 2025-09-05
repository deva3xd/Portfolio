import React from 'react'
import { BsArrowDown } from 'react-icons/bs';

const Hero = () => {
    return (
        <div className="pt-24" id="header">
            <div className="bg-primary px-10 sm:px-20 py-8 sm:py-16 text-default flex flex-col justify-center">
                <h1 className="underline font-semibold text-xl sm:text-5xl uppercase">Deva Rahma Nugroho</h1>
                <p className="text-lg sm:text-2xl lowercase mb-4">Web Developer</p>
                <div className="flex flex-row items-center justify-end gap-2">
                    <a href="#about" className="py-0 px-2 sm:py-1 sm:px-3 bg-default text-primary rounded-sm capitalize text-lg sm:text-2xl hover:bg-opacity-95">About Me</a>
                    <BsArrowDown size={30} />
                </div>
            </div>
        </div>
    )
}

export default Hero;