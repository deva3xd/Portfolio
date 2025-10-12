import React from 'react';
import { SiDiscord, SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si';

const Contact = () => {
    return (
        <div className="bg-default text-primary px-5 sm:px-20 py-16 relative" id="contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0">
                <h2 className="text-4xl font-semibold">wanna talk?</h2>
                <div className='flex flex-row items-center justify-center sm:justify-end'>
                    <a href="discordapp.com/users/1121487954339176508" className="flex flex-row items-center border border-primary p-2 hover:bg-primary hover:text-white">
                        <SiDiscord size={30} />
                    </a>
                    <a href="mailto:devarn05@gmail.com" className="flex flex-row items-center border border-primary p-2 hover:bg-primary hover:text-white">
                        <SiGmail size={30} />
                    </a>
                    <a href="https://www.instagram.com/deva3xd_" className="flex flex-row items-center border border-primary p-2 hover:bg-primary hover:text-white">
                        <SiInstagram size={30} />
                    </a>
                    <a href="http://linkedin.com/in/deva-rahma-nugroho" className="flex flex-row items-center border border-primary p-2 hover:bg-primary hover:text-white">
                        <SiLinkedin size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;