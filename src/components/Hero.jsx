import Profile from "../assets/images/profile.png";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row h-screen text-white justify-center items-center max-w-screen-xl mx-auto lg:px-20 gap-5" id="hero">
            <div className="w-full lg:w-1/2 text-center sm:text-start px-5 sm:px-2">
                <h2 className="font-bold text-3xl lg:text-6xl text-custom-secondary uppercase">
                    Deva Rahma Nugroho
                </h2>
                <h1 className="font-bold text-xl lg:text-4xl border-b border-b-white">
                    Web Developer
                </h1>
                <p>Have knowledge with various frameworks such as Laravel and React, I offer the best project resulting in quality work</p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center px-2 lg:px-0">
                <img src={Profile} alt='Profile' className='rounded-full h-60 lg:h-80 z-0' />
            </div>
        </div>
    )
}

export default Hero;