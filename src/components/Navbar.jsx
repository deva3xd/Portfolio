import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            name: "Project",
            link: "#project"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Contact",
            link: "#contact"
        }
    ]

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-default text-primary max-w-screen-lg w-screen font-normal fixed top-0 z-10">
            <div className="flex flex-wrap items-center justify-between py-3 px-5 lg:px-20">
                <a href="#header" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-lg whitespace-nowrap">
                        DRN
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:underline focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M1 13l15-12M1 1l15 12" : "M1 1h15M1 7h15M1 13h15"}
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className="text-lg font-normal block py-2 px-3 rounded hover:underline md:border-0 md:p-0"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;