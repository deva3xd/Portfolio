import { SiDiscord, SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si';

const Contact = () => {
    return (
        <section className="bg-default text-primary pb-16 relative max-w-screen-xl mx-auto px-5 sm:px-16" id="contact">
            <span className="text-primary text-lg">-Contact</span>
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-primary">Let's Connect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0">
                <p className="text-gray-600">I'm always open to discussing new projects, creative ideas, playing game, or opportunities to be part of your vision.</p>
                <div className="flex flex-row items-center gap-2 justify-center sm:justify-end">
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
        </section>
    )
}

export default Contact;