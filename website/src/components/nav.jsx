import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineCloseFullscreen } from "react-icons/md";


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
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
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
              className="md:hidden flex items-center z-60 relative"
            >
              {isOpen ? <MdOutlineCloseFullscreen className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-40 bg-gradient-to-br from-green-900/95 to-yellow-800/95 backdrop-blur-lg"
            style={{
              backgroundImage: `url('/tob.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Navigation Content */}
            <div className="relative h-full flex flex-col">
              {/* Header space to account for the fixed navbar */}
              <div className="h-20"></div>
              
              {/* Main Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-8">

                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`gellix-font flex items-center justify-between px-6 py-4 rounded-sm transition-all duration-300 backdrop-blur-sm border border-white/10 ${
                          location.pathname === link.path
                            ? 'bg-white/20 text-yellow-300 font-bold shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-yellow-200'
                        }`}
                      >
                        <span className="text-xl font-medium">{link.label}</span>
                        <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${
                          location.pathname === link.path ? 'rotate-0' : 'group-hover:translate-x-1'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-8 pb-8"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/20">
                  {/* Company Info */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <img src="/logo.png" alt="Logo" className="w-8 h-7" />
                      <div>
                        <h3 className="gellix-font text-lg font-bold text-white">SACMAR LEAF</h3>
                        <p className="gellix-font text-xs text-gray-300 tracking-wider">TOBACCO PVT LTD</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 gap-3 text-center">
                    <div className="flex items-center justify-center space-x-2 text-white/80">
                      <MapPin className="h-4 w-4" />
                      <span className="gellix-font text-sm">Premium Tobacco Solutions</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Leaf className="h-4 w-4 text-green-300" />
                      <span className="gellix-font text-xs text-white/60">Premium Quality</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-yellow-300" />
                      <span className="gellix-font text-xs text-white/60">Excellence</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;