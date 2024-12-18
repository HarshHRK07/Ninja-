import React, { useState } from 'react';
import { Shirt, Menu, X } from 'lucide-react';
import ThemeToggle from './common/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shirt className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Washing Ninja</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Services</a>
            <a href="#pricing" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Pricing</a>
            <a href="#locations" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Locations</a>
            <a href="#contact" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Contact</a>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}