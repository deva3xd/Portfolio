import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { SiVite, SiLaravel, SiTailwindcss, SiGithub, SiPrisma, SiFigma } from "react-icons/si";

const Skill = () => {
  return (
    <div className="bg-default text-primary px-5 sm:px-20 py-14 relative border-b border-b-gray-200" id="skill">
      <h2 className="text-4xl font-semibold mb-2 sm:mb-5">skill</h2>
      <div className='flex flex-col divide-y divide-gray-200'>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiLaravel size={30} />
            Laravel
          </div>
          <a href='https://laravel.com/'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiVite size={30} />
            Vite
          </div>
          <a href='https://vite.dev/'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiTailwindcss size={30} />
            Tailwind
          </div>
          <a href='https://tailwindcss.com/'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiPrisma size={30} />
            Prisma
          </div>
          <a href='https://www.prisma.io/'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiGithub size={30} />
            Github
          </div>
          <a href='https://github.com/'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
        <div className='w-full flex justify-between px-8 py-6 hover:bg-primary/5'>
          <div className='flex items-center gap-4'>
            <SiFigma size={30} />
            Figma
          </div>
          <a href='https://www.figma.com'>
            <FaLongArrowAltRight size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skill;