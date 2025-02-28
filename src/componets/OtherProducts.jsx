import React from "react";


const OtherProducts = () => {
    const products = [
      {
        title: "Living Will",
        description:
          "Use an advance healthcare directive, or living will, to specify your healthcare wishes and appoint someone to make decisions on your behalf if you’re unable.",
        buttonText: "Learn about living wills",
        icon: "❤️",
        bgColor: "bg-pink-100",
      },
      {
        title: "Durable Financial Power of Attorney (DFPOA)",
        description:
          "Keep your financial accounts accessible and bills paid by appointing someone to make financial decisions on your behalf if you’re unable.",
        buttonText: "Learn about DFPOAs",
        icon: "💰",
        bgColor: "bg-yellow-100",
      },
      {
        title: "Beneficiary Designations",
        description:
          "Document and distribute assets that your last will and testament does not cover, including 401(k)s, IRAs, and life insurance policies.",
        buttonText: "Learn about beneficiary designations",
        icon: "📜",
        bgColor: "bg-green-100",
      },
      {
        title: "Revocable Living Trusts",
        description:
          "Create a revocable living trust and fulfill many functions of a last will and testament. Also, placing assets in a trust can avoid California’s lengthy probate process.",
        buttonText: "Learn about trusts",
        icon: "📁",
        bgColor: "bg-blue-100",
        tag: "Only in California",
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Other FreeWill products
        </h2>
        <hr className="mb-6 border-gray-300" />
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${product.bgColor} rounded-full text-xl`}
              >
                {product.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                {product.tag && (
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-md font-semibold mt-1">
                    {product.tag}
                  </span>
                )}
                <p className="text-gray-600 mt-2">{product.description}</p>
                <button className="mt-3 border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition">
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OtherProducts;
  