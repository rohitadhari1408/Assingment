import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react'; // Using Lucide React for the X icon

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
          FREEWILL<span className="text-blue-500 text-2xl">✒️</span>
        </Link>

        {/* Close (X) Button */}
        <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900 text-2xl">
          <X size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
