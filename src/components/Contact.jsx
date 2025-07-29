import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = `https://api.whatsapp.com/send?phone=6282142762543&text=Hello%2C%20I'm%20*${data.name}*%2C%0AEmail%20*${data.email}*%2C%0A%0A${data.message}`;

        window.open(
            url,
            "_blank",
        );
    };

    return (
        <div className="bg-custom-tertiary text-white px-10 lg:px-20 py-14 relative" id="contact">
            <h3 className="text-xl sm:text-4xl font-medium text-center">Interest to hire me?</h3>
            <h2 className="text-3xl sm:text-6xl font-bold text-center text-custom-secondary mb-5">Contact Now</h2>
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-2 justify-center">
                <div className="lg:w-3/4 text-white">
                    <form onSubmit={handleSubmit}>
                        <div className='my-2'>
                            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Your Name" className="w-full py-2 md:py-4 bg-custom-tertiary focus:border-white" required />
                        </div>
                        <div className='my-2'>
                            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email Address" className="w-full py-2 md:py-4 bg-custom-tertiary focus:border-white" required />
                        </div>
                        <div className='my-2'>
                            <textarea name="message" value={data.message} onChange={handleChange} placeholder="Message" className="w-full py-6 md:py-12 bg-custom-tertiary focus:border-white" required />
                        </div>
                        <div className='flex justify-between'>
                            <button type="submit" className="bg-black flex justify-center py-2 md:py-3 hover:bg-opacity-90 rounded-sm px-3">
                                Submit WhatsApp
                            </button>
                            <div className='flex'>
                                <a href='mailto:devarn05@gmail.com' type="submit" className="bg-red-800 flex justify-center py-2 md:py-3 hover:bg-opacity-90 rounded-sm px-3 items-center ms-1">
                                    Gmail
                                </a>
                                <a href='https://t.me/deva3xd' type="submit" className="bg-blue-800 flex justify-center py-2 md:py-3 hover:bg-opacity-90 rounded-sm px-3 items-center ms-1">
                                    Telegram
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;