import { useState } from "react";
import { FaLinkedinIn, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const options = [
    {
        title: 'Home',
        link: "/"
    },
    {
        title: 'Projects',
        link: "/project"
    },
    {
        title: 'About',
        link: "/about",
    },
    {
        title: 'Contact',
        link: "/contact"
    }
]

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="h-auto w-full fixed backdrop-blur-lg px-4 md:px-32 z-50">
                <div className="py-6 flex items-center">
                    {/* Sidebar Toggle Button */}
                    <button onClick={toggleSidebar} className="md:hidden">
                        <FaBars className="text-xl hover:text-blue-500" />
                    </button>

                    {/* Navbar Links */}
                    <div className="hidden md:flex">
                        {options.map((items, id) => (
                            <a href={items.link} key={id}>
                                <label className="px-4 font-medium text-lg cursor-pointer hover:text-blue-500 ">
                                    {items.title}
                                </label>
                            </a>
                        ))}
                    </div>

                    {/* LinkedIn Icon */}
                    <div className="ms-auto px-4">
                        <a href="https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-xl hover:text-blue-500" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white backdrop-blur-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
                <div className="py-6 px-4">
                    {options.map((items, id) => (
                        <a href={items.link} key={id}>
                            <label className="block py-2 font-medium text-lg cursor-pointer hover:text-blue-500">
                                {items.title}
                            </label>
                        </a>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    )
}
export default Navbar;