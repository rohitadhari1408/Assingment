import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
            {/* Column 1 */}
            <div>
              <h2 className="text-xl font-semibold">FOR INDIVIDUALS</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Donate stock</a></li>
                <li><a href="#" className="hover:underline">Donate crypto</a></li>
                <li><a href="#" className="hover:underline">Glossary</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-semibold">FOR NONPROFITS</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Resources</a></li>
                <li><a href="#" className="hover:underline">Case studies</a></li>
                <li><a href="#" className="hover:underline">Webinars</a></li>
                <li><a href="#" className="hover:underline">Request a demo</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h2 className="text-xl font-semibold">ABOUT US</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Who we are</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h2 className="text-xl font-semibold">CONTACT US</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Help center</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook text-xl"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-linkedin text-xl"></i></a>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <hr className="my-6 border-gray-300" />
  
          {/* Bottom Section */}
          <div className="text-center text-gray-600 text-sm">
            <p>Copyright © 2025 FreeWill Co. All rights reserved.</p>
            <p>Use of FreeWill’s services is subject to the <a href="#" className="text-blue-500 underline">Terms of Service</a> & <a href="#" className="text-blue-500 underline">Privacy Notice</a>.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  