import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Project', path: '/project' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNavLink = ({ name, path }) => (
    <NavLink
      key={name}
      to={path}
      className={({ isActive }) =>
        `relative group text-black hover:text-[#4479A1] transition duration-200 pl-2 ${
          isActive ? 'text-[#4479A1]' : ''
        }`
      }
      onClick={handleClick}
    >
      {name}
      <span className="absolute left-0 -bottom-4 w-full h-[2px] bg-[#4479A1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </NavLink>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0" data-aos="zoom-in">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-32 sm:h-40 md:h-44 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-lg font-bold">
            {navLinks.map(renderNavLink)}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col space-y-4 font-bold text-lg items-center">
            {navLinks.map(renderNavLink)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
