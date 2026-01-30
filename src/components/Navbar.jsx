import React, { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToAbout, scrollToContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = (e) => {
    if (scrollToAbout) {
      e.preventDefault();
      scrollToAbout();
    }
  };

  const handleContactClick = (e) => {
    if (scrollToContact) {
      e.preventDefault();
      scrollToContact();
    }
  };

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center p-5 sm:p-7">
        <div>
          <h1 className="text-4xl font-serif pl-8">Nikhil.</h1>
        </div>

        <div className="hidden md:flex gap-9 text-xl font-serif items-center ">

          <Link className="hover:bg-gray-300 p-4 rounded-3xl hover:scale-90 transition-transform duration-300" to="/">Home</Link>

          <Link
            className="hover:bg-gray-300 p-4 rounded-3xl hover:scale-90 transition-transform duration-300"
            to="/About"
            onClick={handleAboutClick}
          >
            About
          </Link>
          <Link className="hover:bg-gray-300 p-4 rounded-3xl hover:scale-90 transition-transform duration-300" to="/Resume">Resume</Link>
          <Link
            className="hover:bg-gray-300 p-4 rounded-3xl hover:scale-90 transition-transform duration-300"
            to="#"
            onClick={handleContactClick}
          >
            Contact
          </Link>
          <ToggleTheme />
        </div>

        <div className="md:hidden flex items-center">
          <ToggleTheme />
          <button
            className="ml-2 p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-5 pb-5 font-serif text-lg bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
          <a
            href="/About"
            onClick={(e) => {
              setMenuOpen(false);
              handleAboutClick(e);
            }}
          >
            About
          </a>
          <a href="/Resume" onClick={() => setMenuOpen(false)}>Resume</a>
          <a
            href="#"
            onClick={(e) => {
              setMenuOpen(false);
              handleContactClick(e);
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
