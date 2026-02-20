import React, { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ scrollToAbout, scrollToContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleAboutClick = (e) => {
    if (scrollToAbout && location.pathname === "/") {
      e.preventDefault();
      scrollToAbout();
    }
    setMenuOpen(false);
  };

  const handleContactClick = (e) => {
    if (scrollToContact && location.pathname === "/") {
      e.preventDefault();
      scrollToContact();
    }
    setMenuOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center p-5 sm:p-7">
        <h1 className="text-4xl font-serif pl-8">Nikhil.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 text-xl font-serif items-center">
          <Link className="hover:bg-gray-300 p-4 rounded-3xl" to="/">
            Home
          </Link>

          <Link className="hover:bg-gray-300 p-4 rounded-3xl" to="/" onClick={handleAboutClick}>About</Link>

          {/* ✅ lowercase route */}
          <Link
            className="hover:bg-gray-300 p-4 rounded-3xl"
            to="/resume"
          >
            Resume
          </Link>

          <Link
            className="hover:bg-gray-300 p-4 rounded-3xl"
            to="/"
            onClick={handleContactClick}
          >
            Contact
          </Link>

          <ToggleTheme />
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <ToggleTheme />
          <button
            className="ml-2 p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 px-5 pb-5 font-serif text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/" onClick={handleAboutClick}>
            About
          </Link>

          {/* ✅ FIXED */}
          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            Resume
          </Link>

          <Link to="/" onClick={handleContactClick}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

