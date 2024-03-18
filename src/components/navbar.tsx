import { useState } from 'react';
import { scrollToSection } from '../utils/helpers';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" flex items-center justify-between lg:justify-around xl:justify-evenly  flex-wrap bg-gray-800 p-4">
      <div className=" text-white mr-6">
        <span className="text-white font-semibold text-2xl">Adrian Wang</span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded  bg-gray-800 hover:text-white hover:border-white"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 5h-1v14h1V5zm-7 14h-1V5h1v14zM5 19h1V5H5v14z"
                fill="white"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                fill="white"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:w-auto`}
      >
        <div className="md:flex-grow  md:space-x-7">
          <a
            href="#"
            onClick={(e) => {
              scrollToSection('about', e);
              setIsOpen(false);
            }}
            className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection('skills', e);
              setIsOpen(false);
            }}
            className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Experience
          </a>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection('projects', e);
              setIsOpen(false);
            }}
            className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Projects
          </a>
          <a
            href="#"
            onClick={(e) => {
              scrollToSection('contactMe', e);
              setIsOpen(false);
            }}
            className="block mt-4 md:inline-block md:mt-0 text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
