import React from "react";
import Movieflix from "../images/movieflix.png";
import Beatwave from "../images/beatwave.png";
import YourTask from "../images/yourtask.png";
import Ishopee from "../images/ishopee.png";
import { SiLaravel, SiInertia, SiTailwindcss, SiMysql, SiShadcnui, SiNextdotjs, SiPrisma } from "react-icons/si";

const Project = () => {
    return (
        <div className="bg-default px-5 sm:px-20 pt-16 relative" id="projects">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-primary">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-primary text-default p-4 border-2 border-primary order-1">
                    <p className="underline font-medium text-xl sm:text-2xl">MovieFlix</p>
                    <p className="text-lg font-light">Movie App</p>
                    <img loading="lazy" className="my-2 border border-primary h-auto sm:h-52" src={Movieflix} alt="MovieFlix" />
                    <p className="text-xs mb-2 text-justify">A pay-per-movie streaming platform that
                        makes it easy for users to choose and watch
                        their favorite movies.
                    </p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/BeatWave.git" className="hover:underline bg-white text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiLaravel className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiInertia className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiTailwindcss className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiMysql className="text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-default text-primary p-4 border-2 border-primary order-2">
                    <p className="underline font-medium text-xl sm:text-2xl">BeatWave</p>
                    <p className="text-lg font-light">Music App</p>
                    <img loading="lazy" className="my-2 border border-primary h-auto sm:h-52" src={Beatwave} alt="BeatWave" />
                    <p className="text-xs mb-2 text-justify">A modern music player application that allows
                        users to upload their own songs and enjoy
                        them online anytime.
                    </p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center w-1/2">
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/BeatWave.git" className="hover:underline bg-primary text-white px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiNextdotjs className="text-default" />
                            </div>
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiShadcnui className="text-default" />
                            </div>
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiPrisma className="text-default" />
                            </div>
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiMysql className="text-default" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-default text-primary p-4 border-2 border-primary order-4 sm:order-3">
                    <p className="underline font-medium text-xl sm:text-2xl">YourTask</p>
                    <p className="text-lg font-light">To-do List</p>
                    <img loading="lazy" className="my-2 border border-primary h-auto sm:h-52" src={YourTask} alt="YourTask" />
                    <p className="text-xs mb-2 text-justify">A simple to-do list app that helps users
                        organize and track their daily activities.
                    </p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-1 items-center w-1/2">
                            <a target="_blank" rel="noreferrer" href="https://todo-list-deva3xd.vercel.app" className="hover:underline bg-primary text-white px-3 py-1 text-xs">demo</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/YourTask.git" className="hover:underline bg-primary text-white px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiNextdotjs className="text-default" />
                            </div>
                            <div className="bg-primary p-1 border border-primary rounded-sm">
                                <SiTailwindcss className="text-default" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary text-default p-4 border-2 border-primary order-3 sm:order-4">
                    <p className="underline font-medium text-xl sm:text-2xl">Ishopee</p>
                    <p className="text-lg font-light">E-commerce</p>
                    <img loading="lazy" className="my-2 border border-primary h-auto sm:h-52" src={Ishopee} alt="Ishopee" />
                    <p className="text-xs mb-2 text-justify">A simple e-commerce platform that makes it
                        easy for users to buy and sell goods
                        efficiently.
                    </p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/Ishopee.git" className="hover:underline bg-white text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiLaravel className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiInertia className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiTailwindcss className="text-primary" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiMysql className="text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
