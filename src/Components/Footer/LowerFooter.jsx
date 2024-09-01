import React from 'react';

function LowerFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Column 1 */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold">FOOTER</h3>
            <p className="text-gray-400 mt-4">Complete your style with awesome clothes from us.</p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-300"><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-300"><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300"><i className="fa-brands fa-twitter fa-lg"></i></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-300"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
            </div>
          </div>
          {/* Column 2 */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="text-lg font-serif">Company</li>
              <li className="text-gray-400">About Us</li>
              <li className="text-gray-400">Contact Us</li>
              <li className="text-gray-400">Support</li>
              <li className="text-gray-400">Careers</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="text-lg font-serif">Resource Hub</li>
              <li className="text-gray-400">Locate Us</li>
              <li className="text-gray-400">Track My Journey</li>
              <li className="text-gray-400">Navigator</li>
              <li className="text-gray-400">Common Queries</li>

            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-center md:text-left">
            <ul className="space-y-2">
            <li className="text-lg font-serif">Legalities</li>
<li className="text-gray-400">Usage Guidelines</li>
<li className="text-gray-400">Privacy & Policy </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LowerFooter;
