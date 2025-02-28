import React from "react";

const StatsSection = () => {
    return (
      <section className="bg-rose-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          
          {/* Statistic 1 */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">1.2M+</h2>
            <p className="text-gray-600 text-lg">Wills created</p>
          </div>
  
          {/* Statistic 2 */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">$11.3B+</h2>
            <p className="text-gray-600 text-lg">Committed to nonprofits</p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default StatsSection;

  