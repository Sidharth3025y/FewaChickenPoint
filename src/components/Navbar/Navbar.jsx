import React from 'react';
import { FaHamburger, FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';
import { GiChickenOven } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="bg-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <GiChickenOven className="text-3xl text-amber-200" />
            <span className="text-xl font-bold font-serif">Fewa Chicken Point</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-amber-200 transition duration-300 flex items-center">
              <FaHamburger className="mr-1" /> Menu
            </a>
            <a href="#" className="hover:text-amber-200 transition duration-300">About Us</a>
            <a href="#" className="hover:text-amber-200 transition duration-300">Locations</a>
            <a href="#" className="hover:text-amber-200 transition duration-300">Contact</a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-amber-200 transition duration-300">
              <FaPhone className="text-lg" />
            </a>
            <a href="#" className="hover:text-amber-200 transition duration-300">
              <FaUser className="text-lg" />
            </a>
            <a href="#" className="hover:text-amber-200 transition duration-300 relative">
              <FaShoppingCart className="text-lg" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;