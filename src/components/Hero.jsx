import React from 'react';
import Profile from "../assets/images/profile.jpg";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row h-screen text-white justify-center items-center max-w-screen-xl mx-auto lg:px-20 gap-5" id="hero">
            <div className="w-1/2 text-center sm:text-start">
                <h2 className="font-semibold text-lg sm:text-2xl text-custom-secondary">
                    Hi, I'm  Deva Rahma Nugroho
                </h2>
                <h1 className="font-bold text-2xl sm:text-4xl">
                    Full-Stack Web Developer
                </h1>
                <p className="font-light text-base">
                    I live in Indonesia. Has approximately 2 years experience in building a website. I’m a responsible person, so the application I make will not exceed the specified time limit. <br /><br /> Visit:
                </p>
                <div className="mt-2">
                    <a href="#project" className="focus:outline-none font-bold text-custom-primary bg-custom-secondary hover:bg-green-300 rounded-lg text-sm px-5 py-2.5">My Project</a>
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={Profile} alt='Profile' className='rounded-full lg:h-96 z-0' />
            </div>
        </div>
    )
}

export default Hero;