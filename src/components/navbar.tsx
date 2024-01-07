import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-semibold text-2xl">Adrian Wang</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
          className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}
        >
          <ul className="md:flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
