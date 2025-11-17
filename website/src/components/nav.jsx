import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles, Home, Info, Settings, Image, Contact, Clock, Linkedin, MessageCircle, Search } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import SearchModal from './SearchModal';


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
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/quality', label: 'Quality', icon: Award },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/contact', label: 'Contact', icon: Contact },
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
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 text-white py-2 fixed top-0 w-full z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
            {/* Left Side - Working Hours */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="gellix-font hidden sm:inline">Mon - Fri: 8:00 AM - 5:00 PM</span>
                <span className="gellix-font sm:hidden">Mon - Fri: 8AM - 5PM</span>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              {/* Address */}
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <MapPin className="h-4 w-4" />
                <span className="gellix-font">Harare, Zimbabwe</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+263783411889" 
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="gellix-font hidden md:inline">+263 78 341 1889</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/263783411889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="gellix-font hidden md:inline">WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/sacmarleaf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-300 transition-colors duration-300"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>

              {/* Email */}
              <a 
                href="mailto:info@sacmarleaf.co.zw" 
                className="hidden sm:flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="gellix-font hidden lg:inline">info@sacmarleaf.co.zw</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-8 sm:top-10 w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg">
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
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`gellix-font relative font-medium transition-all duration-300 hover:text-green-600 flex items-center space-x-2 ${
                      location.pathname === link.path ? 'text-green-700' : 'text-gray-700'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{link.label}</span>
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-yellow-500"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Desktop Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-green-50 transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-green-700" />
              </motion.button>

              <Link
                to="/contact"
                className="gellix-font bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Mobile menu buttons */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Search Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-green-50 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-green-700" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center z-60 relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>
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
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
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
                          <div className="flex items-center space-x-3">
                            <IconComponent className="h-5 w-5" />
                            <span className="text-xl font-medium">{link.label}</span>
                          </div>
                          <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${
                            location.pathname === link.path ? 'rotate-0' : 'group-hover:translate-x-1'
                          }`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="gellix-font flex items-center justify-center px-6 py-4 rounded-sm bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      <span className="text-xl">Get a Quote</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </motion.div>
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