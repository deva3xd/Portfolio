import React from 'react';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="border-t border-primary px-5 sm:px-20 flex flex-row items-center justify-between">
            <a href="https://github.com/deva3xd" className="bg-primary p-2">
                <SiGithub size={30} className='text-default' />
            </a>
            <p className='text-primary'>2025-deva</p>
        </footer>
    )
}

export default Footer;