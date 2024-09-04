import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-custom-primary border-gray-200 text-white sm:fixed sm:top-0 sm:left-0 sm:right-0 w-screen z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-5 lg:px-20">
                <a
                    href="#hero"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-xl font-bold whitespace-nowrap text-custom-secondary">
                        Raved
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
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
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default font-bold">
                    <ul className="text-white font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a
                                href="#about"
                                className="text-xl font-medium block py-2 px-3 rounded hover:bg-custom-secondary md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className="text-xl font-medium block py-2 px-3 rounded hover:bg-custom-secondary md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-xl font-medium block py-2 px-3 rounded hover:bg-custom-secondary md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 "
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;