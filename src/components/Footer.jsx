import { SiGithub } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="border-t border-primary w-screen">
            <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-between px-5 sm:px-16">
                <a href="https://github.com/deva3xd" className="bg-primary p-2">
                    <SiGithub size={30} className='text-default' />
                </a>
                <p className='text-gray-600'>2025-deva</p>
            </div>
        </footer>
    )
}

export default Footer;