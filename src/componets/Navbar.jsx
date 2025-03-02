import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-gray-800 flex items-center">
        FREEWILL<span className="text-blue-500 text-2xl">✒️</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button className="text-gray-600 hover:text-gray-900">For individuals</button>
        <button className="text-gray-600 hover:text-gray-900">For nonprofits</button>
        <button className="text-gray-600 hover:text-gray-900">For advisors</button>
        <button className="text-gray-600 hover:text-gray-900">About us</button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-gray-700">Log in</button>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md" onClick={handleClick}>
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-4 px-6">
          <button className="text-gray-600 hover:text-gray-900">For individuals</button>
          <button className="text-gray-600 hover:text-gray-900">For nonprofits</button>
          <button className="text-gray-600 hover:text-gray-900">For advisors</button>
          <button className="text-gray-600 hover:text-gray-900">About us</button>
          <button className="text-gray-700">Log in</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md" onClick={handleClick}>
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
