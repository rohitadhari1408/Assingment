import React from "react";
import Image from '../assets/legacy.jpg' 

const LegacySection = () => {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Leave a lasting legacy
          </h2>
          <p className="text-gray-700 mb-4">
            We’re on a mission to help people plan for the future while doing the
            most good for the people and causes they care about.
          </p>
          <p className="text-gray-700 mb-6">
            By using FreeWill, you help keep this service free for everyone no
            matter their circumstances. If you choose to commit a small gift to a
            nonprofit, you’ll also be helping them continue their work for
            generations to come, all at no cost to you during your lifetime.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-pink-700 transition">
            Make my will today
          </button>
        </div>
  
        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 hidden md:block"></div>
            <img
              src={Image} // Replace with actual image URL
              alt="Family legacy"
              className="rounded-md shadow-lg relative"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 hidden md:block"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LegacySection;
  