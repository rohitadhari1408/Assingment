import React from "react";
import ImageT from '../assets/trust.jpg'

const TrustedSection = () => {
    return (
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Section - Image */}
          <div className="relative md:w-1/2 w-full flex justify-center">
            <div className="relative">
              {/* Decorative Squares */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-green-200 md:w-24 md:h-24 -z-10"></div>
              <div className="absolute bottom-0 left-6 w-16 h-16 bg-yellow-200 md:w-24 md:h-24 -z-10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-200 md:w-24 md:h-24 -z-10"></div>
              {/* Image */}
              <img 
                src={ImageT}
                alt="Grandmother and child"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
  
          {/* Right Section - Content */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Trusted by thousands
            </h2>
            <p className="text-gray-700 mb-4">
              Writing your own will can feel daunting — that’s why we worked with the nation's top legal experts to create our interactive online will maker. Enter your information and create a last will and testament customized to your wishes.
            </p>
            <p className="text-gray-700">
              We also have <a href="#" className="text-blue-600 hover:underline">other estate planning products</a> available to help you get all your affairs in order.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedSection;
  