import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, Newspaper, Calendar, ArrowRight } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Fetch latest 3 news articles for footer thumbnails
    // In production, this would be an API call
    const newsData = [
      {
        id: 1,
        title: "Global Tobacco Market Projected to Reach $1.2 Trillion by 2035",
        image: "/3.jpg",
        date: "2025-11-18",
        category: "Market Trends",
      },
      {
        id: 2,
        title: "Zimbabwe Targets 340% Increase in Crop Production",
        image: "/7.jpg",
        date: "2025-11-17",
        category: "Zimbabwe",
      },
      {
        id: 3,
        title: "Climate-Smart Farming Revolutionizes Agriculture",
        image: "/farm8.webp",
        date: "2025-11-16",
        category: "Innovation",
      },
    ];
    setLatestNews(newsData);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="/farm8.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/45 to-black/45"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Latest News Section */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-green-400" />
              <h3 className="gellix-font font-bold text-2xl text-white">Latest Industry News</h3>
            </div>
            <Link 
              to="/news" 
              className="gellix-font flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Link 
                key={news.id}
                to="/news"
                className="group bg-white/5 backdrop-blur-sm rounded-sm overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10"
              >
                {/* News Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="gellix-font bg-green-600 text-white px-2 py-1 rounded-sm text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                {/* News Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    <span className="gellix-font">
                      {new Date(news.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h4 className="gellix-font text-white font-semibold text-sm line-clamp-2 group-hover:text-green-400 transition-colors">
                    {news.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <img src="/logo.png" alt="Logo" className="w-12 h-10" />
                <h1 className="gellix-font font-bold text-lg">SACMAR LEAF</h1>
                <p className="gellix-font text-xs text-gray-400">TOBACCO PVT LTD</p>
              </div>
            </div>
            <p className="gellix-font text-gray-400 text-sm leading-relaxed">
              Premium tobacco contracting and export services in Zimbabwe
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="gellix-font font-bold text-lg mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="gellix-font text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="gellix-font text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/services" className="gellix-font text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/quality" className="gellix-font text-gray-400 hover:text-white transition-colors">Quality</Link></li>
              <li><Link to="/news" className="gellix-font text-gray-400 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="gellix-font font-bold text-lg mb-4 text-yellow-400">Products</h4>
            <ul className="space-y-2">
              <li className="gellix-font text-gray-400">Lamina</li>
              <li className="gellix-font text-gray-400">Fines</li>
              <li className="gellix-font text-gray-400">Cut Rag</li>
              <li className="gellix-font text-gray-400">Stems</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="gellix-font font-bold text-lg mb-4 text-green-400">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className='gellix-font'>+263 783 411 889</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className='gellix-font'>info@sacmarleaftobacco.co.zw</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className='gellix-font'>960 Hungardown Road, Glen Lorne, Harare</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="gellix-font text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Sacmar Leaf Tobacco Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <span className="gellix-font text-xs text-gray-500">Excellence in Tobacco</span>
            </div>
          </div>
          
          {/* Designer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="gellix-font text-gray-500 text-xs">
              Designed by{' '}
              <a 
                href="https://bitstudio.co.zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-semibold"
              >
                Bit Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;