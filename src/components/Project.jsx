import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Aos from "aos";
import Cinetix from "../assets/images/cinetix.png";
import Kostly from "../assets/images/kostly.png";
import Jms from "../assets/images/jms.png";
import Poke from "../assets/images/poke.png";
import Github from "../assets/icons/github.png";

const Project = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    
    return (
        <div className="bg-custom-tertiary text-white max-w-screen-xl mx-auto px-5 lg:px-20 pt-14 relative" id="project">
            <div data-aos="fade-right">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-5">Project</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-5 px-10 lg:px-0">
                    <div className="lg:max-w-md bg-white border border-white rounded-lg shadow">
                        <span className="h-full">
                            <img className="rounded-t-lg lg:h-64" src={Cinetix} alt="Project 1" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-2xl font-bold tracking-tight text-custom-tertiary">Movie App</h5>
                                <a href="https://github.com/deva3xd/Movie-App.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-lg shadow">
                        <span className="h-full">
                            <img className="rounded-t-lg lg:h-64" src={Kostly} alt="Project 2" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-2xl font-bold tracking-tight text-custom-tertiary">Kostly</h5>
                                <a href="https://github.com/deva3xd/UAS-Web.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-lg shadow">
                        <span className="h-full">
                            <img className="rounded-t-lg lg:h-64" src={Jms} alt="Project 3" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-2xl font-bold tracking-tight text-custom-tertiary">Job Management System</h5>
                                <a href="https://github.com/deva3xd/Capstone-Project.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
                                    <img src={Github} alt='Github' width={15} />
                                    Source</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-md bg-white border border-white rounded-lg shadow">
                        <span className="h-full">
                            <img className="rounded-t-lg lg:h-64" src={Poke} alt="Project 4" />
                        </span>
                        <div className="p-2">
                            <span className='flex justify-between items-center'>
                                <h5 className="text-lg sm:text-2xl font-bold tracking-tight text-custom-tertiary">Pokemon List</h5>
                                <a href="https://github.com/deva3xd/Simple-Project.git" className='text-white bg-black text-xs flex items-center py-2 px-3 rounded-lg gap-1'>
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