import Movieflix from "../images/projects/movieflix.png";
import Beatwave from "../images/projects/beatwave.png";
import YourTask from "../images/projects/yourtask.png";
import Ishopee from "../images/projects/ishopee.png";
import { SiLaravel, SiInertia, SiTailwindcss, SiMysql, SiShadcnui, SiNextdotjs, SiPrisma, SiPostgresql } from "react-icons/si";

const Projects = () => {
    return (
        <section className="bg-default py-16 max-w-screen-xl mx-auto px-5 sm:px-16" id="projects">
            <span className="text-primary text-lg">-Projects</span>
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-primary">Selected Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary py-2 flex flex-col items-start justify-center rounded-sm px-2">
                    <span className="text-default text-lg">Movieflix</span>
                    <img src={Movieflix} alt="movieflix" loading="lazy" className="border border-default rounded-sm my-1" />
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row items-center">
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/MovieFlix.git" className="hover:underline bg-white text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiLaravel className="text-primary" title="Laravel" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiInertia className="text-primary" title="InertiaJs" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiTailwindcss className="text-primary" title="Tailwind" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiMysql className="text-primary" title="MySQL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary py-2 flex flex-col items-start justify-center rounded-sm px-2">
                    <span className="text-default text-lg">YourTask</span>
                    <img src={YourTask} alt="yourtask" loading="lazy" className="border border-default rounded-sm my-1" />
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row gap-1 items-center w-1/2">
                            <a target="_blank" rel="noreferrer" href="https://todo-list-deva3xd.vercel.app/" className="hover:underline bg-default text-primary px-3 py-1 text-xs">demo</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/YourTask.git" className="hover:underline bg-default text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiNextdotjs className="text-primary" title="NextJs" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiTailwindcss className="text-primary" title="Tailwind" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary py-2 flex flex-col items-start justify-center rounded-sm px-2">
                    <span className="text-default text-lg">Beatwave</span>
                    <img src={Beatwave} alt="beatwave" loading="lazy" className="border border-default rounded-sm my-1" />
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row gap-1 items-center w-1/2">
                            <a target="_blank" rel="noreferrer" href="https://beat-wave-nu.vercel.app/" className="hover:underline bg-default text-primary px-3 py-1 text-xs">demo</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/BeatWave.git" className="hover:underline bg-default text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiNextdotjs className="text-primary" title="NextJs" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiShadcnui className="text-primary" title="Shadcn" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiPrisma className="text-primary" title="Prisma" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiPostgresql className="text-primary" title="PostgreSQL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary py-2 flex flex-col items-start justify-center rounded-sm px-2">
                    <span className="text-default text-lg">Ishopee</span>
                    <img src={Ishopee} alt="ishopee" loading="lazy" className="border border-default rounded-sm my-1" />
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row items-center">
                            <a target="_blank" rel="noreferrer" href="https://github.com/deva3xd/Ishopee.git" className="hover:underline bg-white text-primary px-3 py-1 text-xs">code</a>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiLaravel className="text-primary" title="Laravel" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiInertia className="text-primary" title="InertiaJs" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiTailwindcss className="text-primary" title="Tailwind" />
                            </div>
                            <div className="bg-default p-1 border border-default rounded-sm">
                                <SiMysql className="text-primary" title="MySQL" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
