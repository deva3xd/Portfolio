import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="pt-24" id="header">
            <div className="bg-primary px-10 sm:px-20 py-6 sm:py-12 text-default flex flex-col justify-center">
                <h1 className="underline font-semibold text-2xl sm:text-5xl uppercase">Deva Rahma Nugroho</h1>
                <p className="text-lg sm:text-2xl lowercase mb-4">Web Developer</p>
                <div className="flex flex-row items-center justify-end gap-2">
                    <a href="#about" className="py-0 px-2 sm:py-1 sm:px-3 bg-default text-primary rounded-sm text-lg sm:text-xl hover:bg-opacity-90">scroll</a>
                    <FaLongArrowAltDown size={28} />
                </div>
            </div>
        </div>
    )
}

export default Hero;