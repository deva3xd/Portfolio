import React from "react";
import Profile from "../images/profile.png";

const About = () => {
    return (
        <div className="bg-primary text-default px-5 sm:px-20 py-14 relative border-t-2" id="about">
            <div data-aos="fade-right">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-5">what about me?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="order-2 sm:order-1">
                        <p className=" font-light text-lg text-justify sm:text-start">
                            I'm a programmer, who is always looking for new challenges to develop myself. I was born and raised in Kediri, Indonesia. I can work as a team or individually. I'm a responsible person and I can work under pressure.
                        </p>
                        <h3 className="text-lg font-bold mt-6 underline">Services</h3>
                        <ul className="list-disc pl-5">
                            <li className="font-light">Web Design</li>
                            <li className="font-light">Frontend</li>
                            <li className="font-light">Backend</li>
                        </ul>
                    </div>
                    <div className="flex justify-center sm:justify-end order-1 sm:order-2">
                        <img src={Profile} alt="profile" className="rounded-sm w-52 sm:w-64 h-52 sm:h-64" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
