import Profile from "../images/profile.png";
import Github from "../images/icons/github.png";
import Gmail from "../images/icons/gmail.png";
import Instagram from "../images/icons/instagram.png";
import LinkedIn from "../images/icons/linkedin.png";

const Hero = () => {
    return (
        <section className="pt-36 max-w-screen-xl mx-auto px-5 sm:px-16" id="header">
            <div className="bg-primary rounded-xl h-80 flex px-8">
                <div className="w-full md:w-2/5 relative hidden md:flex">
                    <img src={Profile} alt="Profile" className="w-80 absolute bottom-0" />
                </div>
                <div className="w-full md:w-3/5 text-default flex flex-col justify-center">
                    <span className="font-medium text-base lg:text-2xl">Hi, I'm Deva Rahma Nugroho</span>
                    <h1 className="font-bold text-2xl lg:text-5xl">Full-Stack Web Developer</h1>
                    <p className="font-light text-xs lg:text-base">I live in Indonesia, has more than 2 years experience in building websites. I'm a responsible person, so project what I make will not exceed the specified time limit.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 mt-2 gap-2">
                <a href="https://github.com/deva3xd" className="p-1 border-4 border-black rounded-xl flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={Github} alt="github" className="h-12 md:h-16" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center bg-black rounded-r-xl">
                        <span className="text-default -rotate-45 text-xs lg:text-lg">Github</span>
                    </div>
                </a>
                <a href="mailto:devarn05@gmail.com" className="p-1 border-4 border-[#c4221f] rounded-xl flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={Gmail} alt="gmail" className="h-12 md:h-16" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center bg-[#c4221f] rounded-r-xl">
                        <span className="text-default -rotate-45 text-xs lg:text-lg">Gmail</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/deva3xd_" className="p-1 border-4 border-[#c3266a] rounded-xl flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={Instagram} alt="instagram" className="h-12 md:h-16" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center bg-[#c3266a] rounded-r-xl">
                        <span className="text-default -rotate-45 text-xs lg:text-lg">Instagram</span>
                    </div>
                </a>
                <a href="http://linkedin.com/in/deva-rahma-nugroho" className="p-1 border-4 border-[#0077b5] rounded-xl flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={LinkedIn} alt="linkedin" className="h-12 md:h-16" />
                    </div>
                    <div className="w-1/2 flex justify-center items-center bg-[#0077b5] rounded-r-xl">
                        <span className="text-default -rotate-45 text-xs lg:text-lg">LinkedIn</span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero;
