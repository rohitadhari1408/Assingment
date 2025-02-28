import React from "react";

const HowItWorks = () => {
    return (
      <section className="bg-blue-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">How FreeWill works</h2>
  
          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Step 1 */}
            <div>
              <h3 className="text-xl font-semibold">1. Fill out online</h3>
              <p className="text-gray-200 mt-2">
                Just follow the step-by-step instructions to fill out the necessary information for your forms.
              </p>
            </div>
  
            {/* Step 2 */}
            <div>
              <h3 className="text-xl font-semibold">2. Print out documents</h3>
              <p className="text-gray-200 mt-2">
                The information you provide is turned into precise legal language, and provided back to you as a printable document.
              </p>
            </div>
  
            {/* Step 3 */}
            <div>
              <h3 className="text-xl font-semibold">3. Sign and keep safe</h3>
              <p className="text-gray-200 mt-2">
                Follow attached instructions to print, sign, and make your document official. Keep it somewhere safe, but accessible.
              </p>
            </div>
          </div>
        </div>
  
        {/* Legal Disclaimer Section */}
        <div className="bg-blue-900 text-white mt-12 py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <span className="text-blue-700 text-2xl">⚖️</span>
            </div>
            <p className="text-gray-200 text-center md:text-left">
              We understand that online estate planning isn’t suitable for everyone. If you have complex needs, we encourage you to seek legal counsel. As you answer questions on FreeWill, we’ll point out where an attorney may be a better fit. We’ll also provide your responses in an easy-to-read summary, which you can print and bring to your attorney to save time.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  