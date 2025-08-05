import React from 'react';
import { SiGmail, SiInstagram, SiLinkedin, SiTelegram } from 'react-icons/si';

const Contact = () => {
    return (
        <div className="bg-default text-primary px-5 sm:px-20 py-14 relative" id="contact">
            <h2 className="text-4xl font-bold mb-2 sm:mb-5">wanna talk?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0">
                <div>
                    <p className='font-light text-lg'>Need help, consultation, talk about random things, playing games, and connect with me.</p>
                </div>
                <div className='flex flex-row items-center justify-start sm:justify-end'>
                    <a href="mailto:devarn05@gmail.com" className="flex flex-row items-center border border-primary p-2">
                        <SiGmail size={30} />
                    </a>
                    <a href="https://www.instagram.com/deva3xd_" className="flex flex-row items-center border border-primary p-2">
                        <SiInstagram size={30} />
                    </a>
                    <a href="http://linkedin.com/in/deva-rahma-nugroho" className="flex flex-row items-center border border-primary p-2">
                        <SiLinkedin size={30} />
                    </a>
                    <a href="https://t.me/deva3xd" className="flex flex-row items-center border border-primary p-2">
                        <SiTelegram size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;