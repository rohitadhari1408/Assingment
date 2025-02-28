import React from "react";
const MediaMentions = () => {
    const mediaLogos = [
      { name: "AARP", imgSrc: "https://via.placeholder.com/100x50?text=AARP" },
      { name: "The New York Times", imgSrc: "https://via.placeholder.com/150x50?text=NY+Times" },
      { name: "Yahoo! Finance", imgSrc: "https://via.placeholder.com/120x50?text=Yahoo!+Finance" },
      { name: "Forbes", imgSrc: "https://via.placeholder.com/120x50?text=Forbes" },
      { name: "Good Housekeeping", imgSrc: "https://via.placeholder.com/150x50?text=Good+Housekeeping" },
      { name: "Marie Claire", imgSrc: "https://via.placeholder.com/130x50?text=Marie+Claire" },
    ];
  
    return (
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-center text-gray-700 text-lg font-semibold mb-4">MEDIA MENTIONS</h2>
          <div className="border-t w-20 mx-auto mb-6"></div>
  
          {/* Logos Section */}
          <div className="flex overflow-x-auto md:overflow-hidden space-x-8 md:justify-center items-center scrollbar-hide">
            {mediaLogos.map((media, index) => (
              <img 
                key={index} 
                src={media.imgSrc} 
                alt={media.name} 
                className="h-10 md:h-12 grayscale opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MediaMentions;
  