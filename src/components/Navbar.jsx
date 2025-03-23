import { useState } from "react";
import { FaSlack } from "react-icons/fa";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 bg-white z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left - Logo */}
                <div className="flex items-center gap-2 text-lg md:text-2xl font-bold text-gray-800">
                    <FaSlack className="text-purple-900" size={25} />
                    <span>Slack</span>
                </div>

                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="hover:text-purple-600 cursor-pointer">Product</li>
                    <li className="hover:text-purple-600 cursor-pointer">Enterprise</li>
                    <li className="hover:text-purple-600 cursor-pointer">Resources</li>
                    <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
                </ul>

                <div className="flex items-center gap-4">

                    <div className="relative">
                        {!searchOpen ? (
                            <FiSearch
                                className="text-gray-600 cursor-pointer hidden md:block"
                                size={20}
                                onClick={() => setSearchOpen(true)}
                            />
                        ) : (
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md px-3 py-1 w-48 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Search..."
                                autoFocus
                                onBlur={() => setSearchOpen(false)}
                            />
                        )}
                    </div>

                    <button className="text-gray-700 hidden md:block cursor-pointer font-medium">Sign In</button>

                    <button className="hidden md:block border-2 border-purple-800 text-purple-800 px-3 py-2 rounded-md cursor-pointer uppercase font-medium">Talk to Sales</button>

                    <button className="hidden md:block bg-purple-800 text-white px-4 py-2 rounded-md cursor-pointer uppercase">Try for Free</button>

                    {/* Hamburger for Mobile */}
                    <FiMenu
                        className="text-gray-700 text-2xl cursor-pointer md:hidden"
                        onClick={() => setMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="w-64 bg-white h-full shadow-lg p-6">

                        <FiX className="text-2xl cursor-pointer mb-4" onClick={() => setMenuOpen(false)} />

                        <ul className="flex flex-col gap-6 text-gray-700 font-medium">
                            <li className="hover:text-purple-600 cursor-pointer">Product</li>
                            <li className="hover:text-purple-600 cursor-pointer">Enterprise</li>
                            <li className="hover:text-purple-600 cursor-pointer">Resources</li>
                            <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
                            <li className="hover:text-purple-600 cursor-pointer">Sign In</li>
                        </ul>

                        <button className="w-full border-2 border-purple-900 font-medium text-purple-900 px-4 py-2 rounded-md mt-4 uppercase">Talk to Sales</button>
                        <button className="w-full bg-purple-900 text-white font-medium px-4 py-2 rounded-md mt-2 uppercase">Try for Free</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
