import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const navLinks = [
        { name: "Profile", path: "/profile" },
        { name: "Account Status", path: "/account-status" },
        { name: "Course Registration", path: "/course-registration" },
        { name: "Faculty Profile", path: "/faculty-profile" },
        { name: "Wished Courses", path: "/wished-courses" },
        { name: "My Courses", path: "/my-courses" },
    ];

    return (
        <nav className="bg-gradient-to-r from-purple-800 via-pink-600 to-indigo-700 shadow-lg fixed w-full top-0 left-0 z-50 border-b border-pink-500/30">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <Link
                    to="/"
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 tracking-wider hover:scale-110 transition duration-300"
                >
                    RDS<span className="text-white">Portal</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-white font-medium text-lg relative group transition"
                        >
                            <span className="group-hover:text-yellow-300">{link.name}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNav}
                    className="md:hidden text-3xl text-yellow-300 focus:outline-none"
                >
                    {navOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {navOpen && (
                <div className="md:hidden bg-gradient-to-b from-purple-800 via-pink-600 to-indigo-700 backdrop-blur-xl shadow-2xl p-6 space-y-4 animate-slideDown absolute w-full left-0 top-[64px] border-t border-pink-500/30">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="block text-white text-xl font-semibold hover:text-yellow-300 transition duration-200"
                            onClick={() => setNavOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
