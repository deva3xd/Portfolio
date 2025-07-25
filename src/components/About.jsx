import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Aos from "aos";
import Lottie from "lottie-react";
import Programming from "../assets/animations/programming.json";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="bg-custom-tertiary text-white px-5 lg:px-20 pt-14 relative border-t-2 border-white" id="about">
            <div data-aos="fade-right">
                <h2 className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-5 text-center sm:text-start">About</h2>
                <div className="flex flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <p className=" font-light text-lg text-justify">
                            I'm a programmer, who is always looking for new challenges to develop myself. I was born and raised in Kediri, Indonesia. I can work as a team or individually. I'm a responsible person and I can work under pressure.
                        </p>
                        <h3 className="text-lg font-bold mt-6">Education</h3>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                                <h3 className="text-lg font-semibold text-white">Palapa Vocational School Pare</h3>
                                <p className="text-base font-normal text-gray-500 text-justify">I majored in Software Engineering. I learned a lot of things like hardware and software.</p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                                <h3 className="text-lg font-semibold text-white">Nusantara PGRI University Kediri</h3>
                                <p className="text-base font-normal text-gray-500 text-justify">I majored in Informatic Engineering. I studied basic programming and advanced programming until I was able to create a website.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <Lottie loop={true} animationData={Programming} className="h-72 sm:h-96" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
