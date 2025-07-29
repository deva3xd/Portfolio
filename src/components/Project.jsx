import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Aos from "aos";
import Github from "../assets/icons/github.png";
import Movieflix from "../assets/images/movieflix.png";
import Jms from "../assets/images/jms.png";
import Beatwave from "../assets/images/beatwave.png";
import Advertising from "../assets/images/advertising.png";

const Project = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="bg-custom-tertiary text-white px-5 lg:px-20 pt-14 relative" id="project">
            <div data-aos="fade-right">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-5">Project</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-5 px-10 lg:px-0">
                    <div className="lg:max-w-md bg-white border border-white rounded-sm shadow">
                        <span className="h-full">
                            <img className="lg:h-60" src={Advertising} alt="advertising" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-xl font-medium tracking-tight text-custom-tertiary">Advertising</h5>
                                <a href="https://github.com/deva3xd/Advertising.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-sm shadow">
                        <span className="h-full">
                            <img className="lg:h-60" src={Jms} alt="jms" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-xl font-medium tracking-tight text-custom-tertiary">Job Management System</h5>
                                <a href="https://github.com/deva3xd/Capstone-Project.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-sm shadow">
                        <span className="h-full">
                            <img className="lg:h-60" src={Movieflix} alt="movieflix" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-xl font-medium tracking-tight text-custom-tertiary">Movie App</h5>
                                <a href="https://github.com/deva3xd/Movie-App.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-sm shadow">
                        <span className="h-full">
                            <img className="lg:h-60" src={Beatwave} alt="beatwave" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-xl font-medium tracking-tight text-custom-tertiary">Music App</h5>
                                <a href="https://github.com/deva3xd/Music-App.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;