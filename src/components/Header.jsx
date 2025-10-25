import React from 'react'
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Hero = () => {
    return (
        <div className="pt-24" id="header">
            <div className="bg-primary px-10 sm:px-20 py-6 sm:py-12 text-default flex flex-col justify-center">
                <h1 className="underline font-semibold text-2xl md:text-3xl lg:text-5xl capitalize">Deva Rahma Nugroho</h1>
                <p className="text-xs sm:text-base text-justify mb-4 mt-2">I craft beautiful, user-friendly web experiences with modern technologies. Passionate about clean code, innovative solutions, and continuous learning.</p>
                <div className="flex flex-row items-center justify-end gap-1">
                    <a href="#project" className="py-0 px-2 sm:py-1 sm:px-3 bg-default text-primary rounded-sm text-base sm:text-lg hover:bg-opacity-90">project</a>
                    <HiOutlineArrowNarrowDown size={28} />
                </div>
            </div>
        </div>
    )
}

export default Hero;