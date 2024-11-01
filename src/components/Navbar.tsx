import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/design-studio', label: 'Design Studio' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-amber-600">SaunaHearth</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/auth"
              className="text-gray-700 hover:text-amber-600"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              to="/design-studio"
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md ${
                  isActive(item.path)
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-amber-50"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/design-studio"
              className="block px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;