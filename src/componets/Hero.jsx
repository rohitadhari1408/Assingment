import React from "react";
import heroImage from '../assets/mother.webp' // Add an actual image path

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-6 py-12 md:py-16">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Get peace of mind
        </h1>
        <p className="text-gray-600">
          It takes less than 20 minutes to write or update your legal will, for free.{" "}
          <a href="#" className="text-blue-500 underline">Why is it free?</a>
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-md text-lg">
          Make my will
        </button>
        <p className="text-gray-600">
          If you live in California, we also offer a{" "}
          <a href="#" className="text-blue-500 underline">Revocable Living Trust!</a>
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Family"
          className="w-full md:max-w-md rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
