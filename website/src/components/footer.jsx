
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
          
          <div>
            <h4 className="gellix-font font-bold text-lg mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="gellix-font text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="gellix-font text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="gellix-font text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/quality" className="gellix-font text-gray-400 hover:text-white transition-colors">Quality</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="gellix-font font-bold text-lg mb-4 text-yellow-400">Products</h4>
            <ul className="space-y-2">
              <li className="gellix-font text-gray-400">Lamina</li>
              <li className="gellix-font text-gray-400">Fines</li>
              <li className="gellix-font text-gray-400">Cut Rag</li>
              <li className="gellix-font text-gray-400">Stems</li>
            </ul>
          </div>
          
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
                <span className='gellix-font'>14776 Chawara Road, Harare</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="gellix-font text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Sacmar Leaf Tobacco Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="gellix-font text-xs text-gray-500">Excellence in Tobacco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;