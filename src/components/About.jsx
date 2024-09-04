import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Aos from "aos";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    
    return (
        <div className="bg-custom-tertiary text-white max-w-screen-xl mx-auto px-5 lg:px-20 pt-14 relative border-t-2 border-white" id="about">
            <div data-aos="fade-right">
                <div className="text-center lg:px-36">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-5">About</h2>
                    <p className=" font-light text-base">
                        I am an informatics engineering student at Nusantara University PGRI
                        Kediri. Now I am in my 7th semester. I am a web developer whose
                        favorite framework is Laravel. Design and build applications to suit
                        everyone's needs. I can work as a team or individually.
                    </p>
                </div>
                <div className="flex mt-10">
                    <div className="w-1/2 ">
                        <h3 className="text-lg font-bold">Education</h3>
                        <ul className="list-inside font-normal text-sm sm:text-base">
                            <li className="flex items-center">
                                <svg
                                    className="w-3.5 h-3.5 me-1 sm:me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                SMPN 1 KEPUNG (2015 - 2018)
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-3.5 h-3.5 me-1 sm:me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                SMK PALAPA PARE (2018 - 2021)
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-3.5 h-3.5 me-1 sm:me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="gray"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                UNIVERSITAS NUSANTARA PGRI KEDIRI (2021 - Now)
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-lg font-bold text-end">Skills</h3>
                        <div className="flex flex-wrap w-full uppercase justify-end text-sm sm:text-base">
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                Laravel
                            </span>
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                React
                            </span>
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                MySQL
                            </span>
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                Tailwind
                            </span>
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                Web Design
                            </span>
                            <span className="rounded-lg bg-white font-bold text-custom-tertiary px-3 ms-1 mt-1">
                                Linux
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
