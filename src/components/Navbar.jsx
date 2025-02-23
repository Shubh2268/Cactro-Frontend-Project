import { useState } from "react";
import { FiMenu, FiX, FiBell } from "react-icons/fi"; 
import { FaUserCircle } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-200 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest"><span className="text-cyan-300">H</span>OURS</h1>

        {/* Desktop Links (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:border-b-4 border-cyan-300">Dashboard</a></li>
          <li><a href="#" className="hover:border-b-4 border-cyan-300">Projects</a></li>
          <li><a href="#" className="hover:border-b-4 border-cyan-300">Team</a></li>
          <li><a href="#" className="hover:border-b-4 border-cyan-300">Clients</a></li>
          <li><a href="#" className="hover:border-b-4 border-cyan-300">Reports</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="text-2xl relative">
            <FiBell />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1 rounded-full">3</span>
          </button>
          
          <button className="text-3xl">
            <FaUserCircle />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 p-4 mt-2 space-y-4">
          <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
          <li><a href="#" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#" className="hover:text-gray-300">Team</a></li>
          <li><a href="#" className="hover:text-gray-300">Clients</a></li>
          <li><a href="#" className="hover:text-gray-300">Reports</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
