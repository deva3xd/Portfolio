import React from "react";
import Profile from "../images/profile.png";
import { Accordion } from "flowbite-react";

const About = () => {
    return (
        <div className="bg-primary text-default px-5 sm:px-20 py-14 relative border-t-2" id="about">
            <div data-aos="fade-right">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-5">what about me?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="order-2 sm:order-1">
                        <p className=" font-light text-lg text-justify">
                            I am a programmer, who is always looking for new challenges to develop myself. I was born and raised in Kediri, Indonesia. I graduated with a degree in Informatics Engineering from Nusantara University PGRI Kediri in 2025. I can work as a team or individually. I am the person responsible and I can work under pressure.
                        </p>
                    </div>
                    <div className="flex justify-center sm:justify-end order-1 sm:order-2 my-2 sm:my-0">
                        <img src={Profile} alt="profile" className="rounded-sm w-52 sm:w-64 h-52 sm:h-64" />
                    </div>
                </div>
                <h3 className="text-lg font-bold mt-6 underline">Services</h3>
                <Accordion collapseAll className="mt-2 border-none">
                    <Accordion.Panel>
                        <Accordion.Title className="text-default hover:text-primary focus:outline-none focus:ring-0 focus:border-0 bg-transparent focus:bg-default focus:text-primary !rounded-none">Web Design</Accordion.Title>
                        <Accordion.Content className="border border-none py-2">
                            <p className="mb-2 text-default text-justify">
                                Creating visually appealing and user-friendly designs that focus on enhancing user experience. Emphasis is placed on clean layouts, intuitive navigation, and responsive design across all devices.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-default hover:text-primary focus:outline-none focus:ring-0 focus:border-0 bg-transparent focus:bg-default focus:text-primary !rounded-none">Frontend</Accordion.Title>
                        <Accordion.Content className="border border-none py-2">
                            <p className="mb-2 text-default text-justify">
                                Transforming designs into functional, interactive, and responsive user interfaces. The goal is to create web experiences that are fast-loading, SEO-friendly, and optimized for seamless performance across a wide range of devices, from desktops to mobile devices.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-default hover:text-primary focus:outline-none focus:ring-0 focus:border-0 bg-transparent focus:bg-default focus:text-primary !rounded-none">Backend</Accordion.Title>
                        <Accordion.Content className="border border-none py-2">
                            <p className="mb-2 text-default text-justify">
                                Building and maintaining server-side applications, APIs, and databases. Ensuring secure and scalable server environments, integrating data flow between frontend and backend, and optimizing performance for large-scale applications.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default About;
