import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="footer-container min-h-[96px] bg-gray-800 text-white flex flex-col gap-3 justify-center items-center overflow-hidden">
      {/* Some additional information blocks */}
      <div className="flex space-x-6">
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
      <div className="copyRightSection flex">
        {/* Language and Language Button */}
        <span className="lang self-center">English</span>
        <button className="bg-gray-700 text-white mr-3 px-1 py-0.5 rounded-md hover:bg-gray-600 transition-colors">
          eng(UK)
        </button>

        {/* Copyright Symbol and Text */}
        <span className="copyright overflow-hidden whitespace-nowrap text-ellipsis self-center">
          © 2025 spread public. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
