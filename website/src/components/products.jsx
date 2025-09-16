import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, Phone, Mail, MapPin, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const ProductsPage = () => {
  const products = [
    {
      name: "Fines",
      description: "Premium quality tobacco fines for various applications",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "Stems",
      description: "High-grade tobacco stems processed to perfection",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&h=400&fit=crop",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Cut Rag",
      description: "Precision-cut tobacco for optimal performance",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Lamina",
      description: "Superior lamina tobacco leaves",
      image: "https://images.unsplash.com/photo-1520770077108-853cf8e95e85?w=600&h=400&fit=crop",
      color: "from-green-700 to-teal-700"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of premium tobacco products, each crafted with precision and care
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                      <p className="text-white/90">{product.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;