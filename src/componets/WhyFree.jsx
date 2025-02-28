import React from "react";

const WhyFree = () => {
    return (
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Why is FreeWill free?
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to enable you to do the most good for the people and causes you love, by providing free access to will-making services. We've partnered with 1900+ nonprofits and businesses who support our mission and help ensure you can create a will for free, while raising more than <strong>$11.3B+</strong> in bequests to charities.
            </p>
            <p className="text-gray-700 mb-6">
              One in six people who use FreeWill choose to leave a bequest to charity. They believe, as we do, that leaving a bequest to nonprofit organizations in your will can be an incredibly powerful way to make an impact for the causes you support.
            </p>
            <button className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition">
              Make your free will today
            </button>
          </div>
  
          {/* Right Section */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                📜
              </div>
              <p className="text-gray-800 font-medium">100% free — no credit card required</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                ❤️
              </div>
              <p className="text-gray-800 font-medium">Supported by nonprofits</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                🔒
              </div>
              <p className="text-gray-800 font-medium">
                We <strong>never</strong> sell your personal data
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyFree;
  