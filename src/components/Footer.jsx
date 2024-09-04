import React from 'react';
import Github from "../assets/icons/github.png";
import Instagram from "../assets/icons/instagram.png";
import Linkedin from "../assets/icons/linkedin.png";

const Footer = () => {
    return (
        <footer className="border-t-2 border-white mb-0 px-5 lg:px-20 max-w-screen-xl mx-auto">
            <h5 className="text-center text-gray-500 font-extrabold mt-5">FOLLOW ME</h5>
            <div className="flex justify-center pb-5 mt-2">
                <a href="https://github.com/deva3xd">
                    <img src={Github} alt='Github' width={25} className="mx-2" />
                </a>
                <a href="https://www.instagram.com/deva3xd_">
                    <img src={Instagram} alt='Instagram' width={25} className="mx-2" />
                </a>
                <a href="http://linkedin.com/in/deva-rahma-nugroho">
                    <img src={Linkedin} alt='Linkedin' width={25} className="mx-2" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;