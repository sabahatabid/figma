import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">© 2024 John, All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
            <FaInstagramSquare className="text-2xl" />
            <span>Instagram</span>
          </a>
          <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
            <FaTwitterSquare className="text-2xl" />
            <span>Twitter</span>
          </a>
          <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
