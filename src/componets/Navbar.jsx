import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate("/form"); 
  }
 
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-gray-800 flex items-center">
        FREEWILL<span className="text-blue-500 text-2xl">✒️</span>
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">For individuals</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">For nonprofits</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">For advisors</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="text-gray-700">Log in</button>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md" onClick={handleclick}>Get Started</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-2xl">&#9776;</button>
    </nav>
  );
};

export default Navbar;
