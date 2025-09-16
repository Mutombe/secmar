
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles } from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Color palette based on your requirements
const colors = {
  primary: '#FFD700', // Golden Yellow
  secondary: '#6B8E23', // Leaf Green
  dark: '#1a1a1a',
  white: '#ffffff',
  accent: '#CD853F', // Peru/Tobacco brown
  sage: '#87A96B', // Sage green
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/quality', label: 'Quality' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{  opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <img src="/logo.png" alt="Logo" className="w-12 h-10" />
              </div>
              <div>
                <h1 className="gellix-font text-xl font-bold bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent">SACMAR LEAF</h1>
                <p className="gellix-font text-xs text-gray-600 tracking-wider">TOBACCO PVT LTD</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`gellix-font relative font-medium transition-all duration-300 hover:text-green-600 ${
                  location.pathname === link.path ? 'text-green-700' : 'text-gray-700'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-yellow-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`gellix-font block px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-green-100 to-yellow-50 text-green-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;