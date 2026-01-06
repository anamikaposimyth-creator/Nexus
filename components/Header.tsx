
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            NEXUS <span className="text-indigo-600">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                isActive(link.path) ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
          >
            Work with us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-indigo-600' : 'text-slate-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-3 bg-indigo-600 text-white text-center font-semibold rounded-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
