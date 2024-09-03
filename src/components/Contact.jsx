import React from 'react';
import Gmail from "../assets/icons/gmail.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Telegram from "../assets/icons/telegram.png";

const Contact = () => {
    return (
        <div className="bg-custom-primary text-white max-w-screen-xl mx-auto px-5 sm:px-20 py-14 relative" id="contact">
            <h3 className="text-lg sm:text-2xl font-bold text-center">Interest to hire me?</h3>
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-custom-secondary mb-5">Contact Now</h2>
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-2">
                <div className="lg:w-4/6">
                    <form>
                        <div className='my-2 text-black'>
                            <input type="text" placeholder="Name" className="w-full py-7 bg-custom-primary text-white focus:border-white" />
                        </div>
                        <div className='my-2 text-black'>
                            <input type="text" placeholder="Email" className="w-full py-7 bg-custom-primary text-white focus:border-white" />
                        </div>
                        <div className='my-2 text-black'>
                            <textarea placeholder="Subject" className="w-full py-14 bg-custom-primary text-white focus:border-white" />
                        </div>
                        <button className="w-full bg-black flex justify-center py-3 hover:bg-neutral-950">
                            <img src={Whatsapp} alt='Whatsap' width={30} />
                        </button>
                    </form>
                </div>
                <div className='lg:w-2/6 bg-black border-8 border-custom-secondary'>
                    <div className='flex flex-col justify-center h-full p-5'>
                        <h4 className='text-2xl sm:text-3xl text-center font-bold border-b-4 border-white pb-5'>Contact <br /> Information</h4>
                        <div className='flex text-md font-bold mt-5'>
                            <img src={Whatsapp} alt='Whatsapp' width={20} />
                            <p className='ms-1'>
                                +62 821-4276-2543
                            </p>
                        </div>
                        <div className='flex text-md font-bold mt-3'>
                            <img src={Telegram} alt='Telegram' width={20} />
                            <p className='ms-1'>
                                dev43xd
                            </p>
                        </div>
                        <div className='flex text-md font-bold mt-3'>
                            <img src={Gmail} alt='Gmail' width={20} />
                            <p className='ms-1'>
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