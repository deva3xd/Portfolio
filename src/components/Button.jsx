import React from 'react';
import Arrow from "../assets/icons/up-arrow.png";

const Button = () => {
  return (
    <a href='#hero' className="fixed bottom-0 right-0 m-5 bg-black p-4 border border-white rounded-full hover:bg-gray-500"><img src={Arrow} alt="Arrow" /></a>
  )
}

export default Button