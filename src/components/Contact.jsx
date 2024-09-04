import React, { useState } from 'react';
import Gmail from "../assets/icons/gmail.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Telegram from "../assets/icons/telegram.png";

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
        <div className="bg-custom-tertiary text-white max-w-screen-xl mx-auto px-10 lg:px-20 py-14 relative" id="contact">
            <h3 className="text-xl sm:text-3xl font-bold text-center">Interest to hire me?</h3>
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-custom-secondary mb-5">Contact Now</h2>
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-2">
                <div className="lg:w-4/6 text-white">
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
                        <button type="submit" className="w-full bg-black flex justify-center py-2 md:py-3 hover:bg-neutral-950">
                            <img src={Whatsapp} alt='Whatsap' width={30} />
                        </button>
                    </form>
                </div>
                <div className='lg:w-2/6 bg-black border-8 border-custom-secondary'>
                    <div className='flex flex-col justify-center h-full p-5'>
                        <h4 className='text-xl sm:text-3xl text-center font-bold border-b-4 border-white pb-5'>Contact <br /> Information</h4>
                        <div className='flex text-base lg:text-xl items-center font-bold mt-5'>
                            <img src={Whatsapp} alt='Whatsapp' width={35} />
                            <p className='ms-3'>
                                +62 821-4276-2543
                            </p>
                        </div>
                        <div className='flex text-md items-center font-bold mt-3'>
                            <img src={Telegram} alt='Telegram' width={35} />
                            <p className='ms-3'>
                                deva3xd
                            </p>
                        </div>
                        <div className='flex text-md items-center font-bold mt-3'>
                            <img src={Gmail} alt='Gmail' width={35} />
                            <p className='ms-3'>
                                devarn05@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;