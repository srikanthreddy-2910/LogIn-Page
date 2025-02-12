import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="footer-container min-h-[15%] bg-gray-800 text-white flex flex-col justify-center items-center py-4">
      {/* Some additional information blocks */}
      <div className="flex space-x-6 mb-4">
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">
          About
        </a>
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">
          Terms
        </a>
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">
          Help
        </a>
        <a href="#" className="text-sm hover:text-gray-400 transition-colors">
          Developers
        </a>
      </div>

      {/* copy rights section */}
      <div className="flex items-center ">
        {/* Language and Language Button */}
        <span className="text-base ">English</span>
        <button className="bg-gray-700 text-white mr-3 px-1 py-0.5 rounded-md hover:bg-gray-600 transition-colors">
          eng(UK)
        </button>

        {/* Copyright Symbol and Text */}
        <span className="text-base">
          © 2025 spread public. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
