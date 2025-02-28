import React from "react";
import { Check } from "lucide-react";

const FreeWillCTA = () => {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Text & Checkmarks */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-900">
            Try FreeWill today
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mt-2 text-gray-700">
            <span className="flex items-center gap-1">
              <Check size={18} className="text-pink-500" />
              100% free
            </span>
            <span className="flex items-center gap-1">
              <Check size={18} className="text-pink-500" />
              Done in under 20 minutes
            </span>
          </div>
        </div>

        {/* Right Section: CTA Button */}
        <button className="bg-pink-600 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition">
          Create a will now—it’s free!
        </button>
      </div>

      {/* Decorative Blocks */}
      <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2">
        <div className="w-4 h-4 bg-pink-500"></div>
        <div className="w-4 h-4 bg-green-300 mt-2"></div>
        <div className="w-4 h-4 bg-orange-300 mt-2"></div>
      </div>
    </section>
  );
};

export default FreeWillCTA;
