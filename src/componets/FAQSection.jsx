import React from "react";

const FAQSection = () => {
    const resources = [
      "Estate planning 101",
      "10 reasons to have a will",
      "Last will vs. living will",
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Can I edit my documents after I'm done?
            </h3>
            <p className="text-gray-600">
              You can update your documents on FreeWill at any time, free of
              charge. We know life is always changing, and we're here to help you
              keep your wishes up to date.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Where can I learn more?
            </h3>
            <p className="text-gray-600">
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Visit the FreeWill blog
              </a>{" "}
              to read articles about the important world of estate planning.
              Below are also some popular resources to help you get started:
            </p>
          </div>
  
          <div className="space-y-2">
            {resources.map((resource, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition bg-white"
              >
                <span className="text-gray-500 text-xl">📜</span>
                <span className="text-gray-800 font-medium">{resource}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  