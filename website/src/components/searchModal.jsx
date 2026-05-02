import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Leaf, Package, Award, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Color palette from Sacmar Leaf
  const colors = {
    primary: '#FFD700', // Golden Yellow
    secondary: '#6B8E23', // Leaf Green
    green700: '#15803d',
    green600: '#16a34a',
    yellow600: '#ca8a04',
    yellow500: '#eab308',
    dark: '#1a1a1a',
    white: '#ffffff',
  };

  // Searchable content for Sacmar Leaf Tobacco
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Sacmar Leaf Tobacco - Premium tobacco contracting and export',
      keywords: ['home', 'main', 'landing', 'start', 'sacmar', 'tobacco'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about our tobacco expertise and company history',
      keywords: ['about', 'company', 'history', 'who we are', 'expertise'],
      category: 'Page'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Tobacco contracting, processing, and export services',
      keywords: ['services', 'contracting', 'processing', 'export', 'solutions'],
      category: 'Page'
    },
    {
      title: 'Quality',
      path: '/quality',
      description: 'Quality assurance and tobacco grading standards',
      keywords: ['quality', 'standards', 'grading', 'assurance', 'premium'],
      category: 'Page'
    },
    {
      title: 'Gallery',
      path: '/gallery',
      description: 'View our tobacco facilities and operations',
      keywords: ['gallery', 'photos', 'images', 'facilities', 'operations'],
      category: 'Page'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with Sacmar Leaf Tobacco',
      keywords: ['contact', 'reach', 'location', 'address', 'get in touch'],
      category: 'Page'
    },
    // Products
    {
      title: 'Lamina',
      path: '/services',
      description: 'Premium tobacco lamina - leaf blade without stem',
      keywords: ['lamina', 'leaf', 'blade', 'tobacco', 'product'],
      category: 'Product'
    },
    {
      title: 'Fines',
      path: '/services',
      description: 'Tobacco fines - small leaf particles',
      keywords: ['fines', 'particles', 'tobacco', 'product'],
      category: 'Product'
    },
    {
      title: 'Cut Rag',
      path: '/services',
      description: 'Cut tobacco ready for manufacturing',
      keywords: ['cut rag', 'cut', 'tobacco', 'manufacturing', 'product'],
      category: 'Product'
    },
    {
      title: 'Stems',
      path: '/services',
      description: 'Tobacco stems for various applications',
      keywords: ['stems', 'tobacco', 'midrib', 'product'],
      category: 'Product'
    },
    // Services
    {
      title: 'Tobacco Contracting',
      path: '/services',
      description: 'Contract farming and grower support services',
      keywords: ['contracting', 'farming', 'growers', 'contract', 'support'],
      category: 'Service'
    },
    {
      title: 'Processing & Grading',
      path: '/services',
      description: 'Expert tobacco processing and quality grading',
      keywords: ['processing', 'grading', 'quality', 'sorting', 'curing'],
      category: 'Service'
    },
    {
      title: 'Export Services',
      path: '/services',
      description: 'International tobacco export and logistics',
      keywords: ['export', 'international', 'logistics', 'shipping', 'global'],
      category: 'Service'
    },
    {
      title: 'Quality Assurance',
      path: '/quality',
      description: 'Comprehensive quality control and testing',
      keywords: ['quality', 'assurance', 'testing', 'control', 'standards'],
      category: 'Service'
    },
    // Contact Information
    {
      title: 'Phone: +263 783 411 889',
      path: 'tel:+263783411889',
      description: 'Call us for inquiries and services',
      keywords: ['phone', 'call', 'telephone', 'contact', 'number'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Email: info@sacmarleaftobacco.co.zw',
      path: 'mailto:info@sacmarleaftobacco.co.zw',
      description: 'Send us an email',
      keywords: ['email', 'mail', 'contact', 'reach', 'info'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Location: Glen Lorne, Harare',
      path: '/contact',
      description: '960 Hungardown Road, Glen Lorne, Harare',
      keywords: ['location', 'address', 'harare', 'zimbabwe', 'office', 'glen lorne'],
      category: 'Location'
    },
    {
      title: 'Working Hours',
      path: '/contact',
      description: 'Monday - Friday: 8:00 AM - 5:00 PM',
      keywords: ['hours', 'open', 'time', 'schedule', 'working'],
      category: 'Info'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Product':
        return <Package className="w-4 h-4" />;
      case 'Service':
        return <Leaf className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Location':
        return <Mail className="w-4 h-4" />;
      case 'Info':
        return <Award className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Product':
        return 'bg-green-50 text-green-700 group-hover:bg-green-100';
      case 'Service':
        return 'bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100';
      case 'Contact':
        return 'bg-amber-50 text-amber-700 group-hover:bg-amber-100';
      case 'Location':
        return 'bg-lime-50 text-lime-700 group-hover:bg-lime-100';
      case 'Info':
        return 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div 
              className="bg-white rounded-lg shadow-2xl overflow-hidden"
              style={{ border: `2px solid ${colors.secondary}` }}
            >
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b-2"
                style={{
                  background: `linear-gradient(to right, ${colors.secondary}15, ${colors.primary}15)`,
                  borderColor: colors.green600 + '30',
                }}
              >
                <Leaf className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, services, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500 text-lg bg-transparent gellix-font"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-green-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: colors.secondary }} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${colors.secondary}20, ${colors.primary}20)`,
                      }}
                    >
                      <Leaf className="w-8 h-8" style={{ color: colors.secondary }} />
                    </div>
                    <p className="text-gray-700 font-semibold mb-2 gellix-font">
                      Start searching...
                    </p>
                    <p className="text-gray-500 text-sm gellix-font">
                      Try "tobacco", "lamina", "contracting", or "quality"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3 gellix-font">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${colors.secondary}10, ${colors.primary}10)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate gellix-font"
                                style={{ color: colors.secondary }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 gellix-font"
                                style={{
                                  background: colors.primary + '30',
                                  color: colors.dark,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1 gellix-font">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                          style={{
                            background: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(to right, ${colors.secondary}10, ${colors.primary}10)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate gellix-font"
                                style={{ color: colors.secondary }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 gellix-font"
                                style={{
                                  background: colors.primary + '30',
                                  color: colors.dark,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1 gellix-font">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-1 gellix-font">No results found</p>
                    <p className="text-gray-500 text-sm gellix-font">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t-2 px-4 py-3"
                  style={{
                    borderColor: colors.green600 + '30',
                    background: `linear-gradient(to right, ${colors.secondary}08, ${colors.primary}08)`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-gray-600 gellix-font">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: 'white',
                            border: `2px solid ${colors.secondary}`,
                            color: colors.secondary,
                          }}
                        >
                          ↵
                        </kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: 'white',
                            border: `2px solid ${colors.secondary}`,
                            color: colors.secondary,
                          }}
                        >
                          ESC
                        </kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;