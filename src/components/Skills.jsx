import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SiVite, SiLaravel, SiTailwindcss, SiGithub, SiFigma, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section className="bg-primary text-default py-16 w-screen" id="skills">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-16">
        <span className="text-default text-lg">-Skills</span>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-default">Skills Possessed</h2>
        <div className='flex flex-col divide-y divide-gray-200'>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiLaravel size={30} />
              Laravel
            </div>
            <a href='https://laravel.com/'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiVite size={30} />
              Vite
            </div>
            <a href='https://vite.dev/'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiTailwindcss size={30} />
              Tailwind
            </div>
            <a href='https://tailwindcss.com/'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiMysql size={30} />
              MySQL
            </div>
            <a href='https://www.mysql.com/'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiGithub size={30} />
              Github
            </div>
            <a href='https://github.com/'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
          <div className='w-full flex justify-between px-6 py-6 hover:bg-white/5'>
            <div className='flex items-center gap-4'>
              <SiFigma size={30} />
              Figma
            </div>
            <a href='https://www.figma.com'>
              <HiOutlineArrowNarrowRight size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;