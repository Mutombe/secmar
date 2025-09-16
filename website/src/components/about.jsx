import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Leaf, Award, Users, Globe, CheckCircle, ArrowRight, Sun, Droplet, TrendingUp, Package, Shield, Sparkles, Target, HandHeart, Zap, Calendar, MapPin, Star } from 'lucide-react';
import { GiFarmer } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";
import { TbWorldCog } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { GiLindenLeaf } from "react-icons/gi";
import { SiPlanetscale } from "react-icons/si";
import { FaFileContract } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";





const AboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "500+", label: "Partner Farmers", icon: GiFarmer },
    { number: "15", label: "Years Experience", icon: FaCalendarDays },
    { number: "25+", label: "Export Countries", icon: GiWorld },
    { number: "98%", label: "Quality Rate", icon: GrSecure }
  ];

  const timeline = [
    { year: "2009", title: "Foundation", desc: "Sacmar Leaf Tobacco established", color: "from-green-600 to-green-700" },
    { year: "2015", title: "Partnership Growth", desc: "Expanded farmer network", color: "from-yellow-500 to-yellow-600" },
    { year: "2020", title: "Quality Excellence", desc: "ISO certification achieved", color: "from-green-700 to-green-800" },
    { year: "2024", title: "Global Expansion", desc: "International market leader", color: "from-yellow-600 to-orange-500" }
  ];

  const values = [
    { 
      icon: GiFarmer, 
      title: "Farmer Partnership", 
      desc: "Building lasting relationships with our tobacco farmers through fair contracts and continuous support",
      color: "bg-green-100 text-green-800",
      accent: "border-green-300"
    },
    { 
      icon: GrSecure, 
      title: "Quality Assurance", 
      desc: "Maintaining the highest standards through rigorous quality control and premium tobacco selection",
      color: "bg-yellow-100 text-yellow-800",
      accent: "border-yellow-300"
    },
    { 
      icon: GiWorld, 
      title: "Global Excellence", 
      desc: "Delivering premium tobacco products to international markets with reliability and consistency",
      color: "bg-amber-100 text-amber-800",
      accent: "border-amber-300"
    },
    { 
      icon: GiLindenLeaf, 
      title: "Sustainable Practices", 
      desc: "Promoting environmentally responsible farming methods and sustainable agricultural practices",
      color: "bg-green-100 text-green-800",
      accent: "border-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fully Mobile Responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
          {/* Mobile-optimized diagonal - smaller skew */}
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-1/3 sm:h-full bg-gradient-to-bl from-yellow-400 via-yellow-500 to-yellow-600 transform skew-x-3 sm:skew-x-12 origin-top-right" />
          <img
            src="/farm1.jpg"
            alt="Tobacco farm"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white order-1 lg:order-1"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block mb-4 sm:mb-6"
                >
                  <div className="gellix-font bg-yellow-400 text-green-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm font-bold text-xs sm:text-sm">
                    EST. 2009 • PREMIUM TOBACCO
                  </div>
                </motion.div>
                
                <h1 className="gellix-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-none">
                  <span className="gellix-font block">SACMAR</span>
                  <span className="gellix-font block text-yellow-400">LEAF</span>
                  <span className="gellix-font block">TOBACCO</span>
                </h1>
                
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl font-medium">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="gellix-font flex items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    Contract farming excellence
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="gellix-font flex items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    Strategic farmer partnerships
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="gellix-font flex items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    Global export leadership
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative order-2 lg:order-2 mt-8 lg:mt-0"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-sm sm:rounded-sm border border-white/20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                          className="text-center"
                        >
                          <div className="bg-yellow-400 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-sm flex items-center justify-center mx-auto mb-2 sm:mb-3">
                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-900" />
                          </div>
                          <div className="gellix-font text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</div>
                          <div className="gellix-font text-xs sm:text-sm text-white/80 font-medium">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="gellix-font text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">Our Journey</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-sm" />
          </motion.div>

          {/* Mobile: Vertical cards, Desktop: Timeline */}
          <div className="block lg:hidden">
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className={`bg-white p-6 sm:p-8 rounded-sm shadow-xl border-2 ${activeTimeline === index ? 'border-yellow-400 shadow-2xl' : 'border-gray-200'} transition-all duration-500`}>
                    <div className={`gellix-font inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm bg-gradient-to-r ${item.color} text-white font-bold text-sm mb-4`}>
                      {item.year}
                    </div>
                    <h3 className="gellix-font text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="gellix-font text-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-yellow-500 rounded-sm" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white p-8 rounded-sm shadow-xl border-2 ${activeTimeline === index ? 'border-yellow-400 shadow-2xl' : 'border-gray-200'} transition-all duration-500`}>
                      <div className={`gellix-font inline-block px-4 py-2 rounded-sm bg-gradient-to-r ${item.color} text-white font-bold text-sm mb-4`}>
                        {item.year}
                      </div>
                      <h3 className="gellix-font text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="gellix-font text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg ${activeTimeline === index ? 'scale-150' : ''} transition-all duration-500`} />
                  </div>
                  
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Mobile Responsive Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="gellix-font text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">What Drives Us</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-sm mb-4 sm:mb-6" />
            <p className="gellix-font text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Our core values shape every partnership, every contract, and every leaf we produce</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group relative p-6 sm:p-8 rounded-sm sm:rounded-sm border-2 ${value.accent} hover:border-yellow-400 transition-all duration-300 bg-white shadow-lg hover:shadow-2xl`}
                >
                  <div className="hidden sm:block absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <IconComponent className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24" />
                  </div>
                  
                  <div className={`inline-flex p-3 sm:p-4 rounded-sm sm:rounded-sm ${value.color} mb-4 sm:mb-6`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  
                  <h3 className="gellix-font text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="gellix-font text-gray-600 leading-relaxed text-sm sm:text-base">{value.desc}</p>
                  
                  <div className="mt-4 sm:mt-6">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Process - Mobile Stacked, Desktop Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="gellix-font text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">How We Partner</h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-yellow-400 mx-auto rounded-sm mb-4 sm:mb-6" />
            <p className="gellix-font text-base sm:text-lg lg:text-xl text-green-100 max-w-3xl mx-auto px-4">Our comprehensive approach ensures mutual success and sustainable growth</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Strategic Planning", desc: "Identify quality farmers and establish partnership goals", icon: SiPlanetscale },
              { step: "02", title: "Contract Agreement", desc: "Define terms, quality standards, and competitive pricing", icon: FaFileContract },
              { step: "03", title: "Technical Support", desc: "Provide ongoing assistance and financial backing", icon: GrTechnology },
              { step: "04", title: "Quality Delivery", desc: "Ensure premium tobacco meets export standards", icon: GrSecure }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-sm sm:rounded-sm border border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                    <div className="gellix-font bg-yellow-400 text-green-900 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-sm sm:rounded-sm flex items-center justify-center font-black text-lg sm:text-xl mb-4 sm:mb-6">
                      {item.step}
                    </div>
                    
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-4 sm:mb-6" />
                    
                    <h3 className="gellix-font text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="gellix-font text-green-100 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </div>
                  
                  {/* Desktop arrows */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gellix-font text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 mb-4 sm:mb-6">Ready to Partner with Us?</h2>
            <p className="gellix-font text-base sm:text-lg lg:text-xl text-green-800 mb-6 sm:mb-8 max-w-2xl mx-auto">Join our network of successful tobacco farmers and experience the benefits of strategic partnership</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gellix-font bg-green-900 text-white px-8 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-4 rounded-sm sm:rounded-sm font-bold text-base sm:text-lg shadow-2xl hover:bg-green-800 transition-colors inline-flex items-center gap-2 sm:gap-3"
            >
              Start Partnership Today
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;