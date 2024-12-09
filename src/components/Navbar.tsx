import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Upper Header */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2 px-4 flex justify-between">
      
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="/vector.png" // Replace with your Nike logo path
              alt=" Logo"
              className="h-8"
            />
          </a>
        </div>
       

        {/* Right Section */}
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Find a Store
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Join Us
          </a>
          <a href="#" className="hover:underline">
            Sign In
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src="/nike-logo.png" // Replace with your Nike logo path
              alt="Nike Logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Center Section: Navigation */}
        <nav className="flex space-x-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-gray-500">
            New & Featured
          </a>
          <a href="#" className="hover:text-gray-500">
            Men
          </a>
          <a href="#" className="hover:text-gray-500">
            Women
          </a>
          <a href="#" className="hover:text-gray-500">
            Kids
          </a>
          <a href="#" className="hover:text-gray-500">
            Sale
          </a>
          <a href="#" className="hover:text-gray-500">
            SNKRS
          </a>
        </nav>

        {/* Right Section: Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.293-4.293l3.757 3.757"
                />
              </svg>
            </button>
          </div>

          {/* Favorite Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 19.121a4 4 0 005.657 0L12 17.899l1.222 1.222a4 4 0 005.657 0 4 4 0 000-5.657l-7.071-7.071a4 4 0 00-5.657 0l-7.071 7.071a4 4 0 000 5.657z"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18l-2 9H5L3 3zm0 0h18M16 16a3 3 0 11-6 0"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;