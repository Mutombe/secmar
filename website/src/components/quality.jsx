import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Users, Globe, CheckCircle, ArrowRight, Leaf, TrendingUp, Package, Eye, Target, Star, Zap, Activity, BarChart3, PieChart, Microscope } from 'lucide-react';
import { SiPlanetscale } from "react-icons/si";
import { FaFileContract } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { TbNumber100Small } from "react-icons/tb";
import { LiaAwardSolid } from "react-icons/lia";
import { GrSecure } from "react-icons/gr";
import { GiLindenLeaf } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiManualMeatGrinder } from "react-icons/gi";

const QualityPage = () => {
  const [activeTab, setActiveTab] = useState('standards');
  const [hoveredStat, setHoveredStat] = useState(null);

  const qualityMetrics = [
    { 
      label: "Quality Rate", 
      value: "95%", 
      icon: <SiFsecure className="w-6 h-6" />, 
      color: "from-green-500 to-emerald-600",
      bgImage: "/4.jpg"
    },
    { 
      label: "Audit Score", 
      value: "A+", 
      icon: <AiOutlineAudit className="w-6 h-6" />, 
      color: "from-yellow-500 to-amber-600",
      bgImage: "/6.jpg"
    },
    { 
      label: "Compliance", 
      value: "100%", 
      icon: <LiaAwardSolid className="w-6 h-6" />, 
      color: "from-green-600 to-green-700",
      bgImage: "/8.jpg"
    },
    { 
      label: "Certifications", 
      value: "12+", 
      icon: <GrSecure className="w-6 h-6" />, 
      color: "from-amber-500 to-orange-600",
      bgImage: "/13.jpg"
    }
  ];

  const qualityStages = [
    {
      id: 'seed',
      title: 'Seed Selection',
      description: 'Premium varieties chosen for optimal yield and quality',
      icon: <GiLindenLeaf className="w-6 h-6 md:w-8 md:h-8" />,
      position: { x: 10, y: 20 }
    },
    {
      id: 'cultivation',
      title: 'Cultivation',
      description: 'Expert guidance and regular monitoring',
      icon: <GiFarmTractor className="w-6 h-6 md:w-8 md:h-8" />,
      position: { x: 30, y: 60 }
    },
    {
      id: 'harvest',
      title: 'Harvest',
      description: 'Optimal timing for maximum quality',
      icon: <Package className="w-6 h-6 md:w-8 md:h-8" />,
      position: { x: 70, y: 40 }
    },
    {
      id: 'processing',
      title: 'Processing',
      description: 'Controlled curing and fermentation',
      icon: <GiManualMeatGrinder className="w-6 h-6 md:w-8 md:h-8" />,
      position: { x: 90, y: 10 }
    }
  ];

  const growerComposition = [
    { type: "Small-scale growers", percentage: 70, color: "bg-green-500" },
    { type: "Medium to commercial", percentage: 30, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-25 to-white">
      {/* Hero Section with Background */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/farm6.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-black/60 to-yellow-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="gellix-font text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
              Quality Excellence
            </h1>
            <p className="gellix-font text-lg md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg px-4">
              Uncompromising standards from seed to export
            </p>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto rounded-sm mt-4 md:mt-6" />
          </motion.div>

          {/* Quality Metrics Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative bg-white/95 backdrop-blur-sm rounded-sm p-4 md:p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${metric.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 md:p-4 rounded-sm bg-gradient-to-br ${metric.color} text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    {metric.icon}
                  </div>
                  <h3 className="gellix-font text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">{metric.value}</h3>
                  <p className="gellix-font text-sm md:text-base text-gray-600 font-medium">{metric.label}</p>
                </div>
                
                {hoveredStat === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full z-20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quality Process */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="gellix-font text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Quality Journey</h2>
            <p className="gellix-font text-lg md:text-xl text-gray-600">Follow our tobacco from field to export</p>
          </motion.div>

          {/* Interactive Process Map */}
          <div className="relative bg-gradient-to-br from-green-50 to-yellow-50 rounded-sm p-4 md:p-8 mb-8 md:mb-16 min-h-64 md:min-h-96">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Connecting Lines */}
              <motion.path
                d="M15,25 Q25,45 35,65 Q55,50 75,45 Q85,25 95,15"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {qualityStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="absolute group cursor-pointer"
                style={{ left: `${stage.position.x}%`, top: `${stage.position.y}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white rounded-sm p-2 md:p-4 shadow-lg group-hover:shadow-xl transition-all border-2 md:border-4 border-green-200 group-hover:border-yellow-400">
                  <div className="text-green-700 group-hover:text-yellow-600 transition-colors">
                    {stage.icon}
                  </div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-gray-900 text-white rounded-sm p-2 md:p-3 text-xs md:text-sm whitespace-nowrap shadow-xl max-w-xs">
                    <h4 className="gellix-font font-bold">{stage.title}</h4>
                    <p className="gellix-font text-gray-300 hidden md:block">{stage.description}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Standards Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-sm p-6 md:p-8 text-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-white/20 rounded-sm mr-3 md:mr-4">
                    <SiFsecure className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="gellix-font text-2xl md:text-3xl font-bold">Strict Standards</h3>
                </div>
                
                <p className="gellix-font text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-green-50">
                  To ensure quality and yield, we provide farmers with premium seeds, fertilizers, pesticides, and comprehensive training on best agricultural practices.
                </p>
                
                <div className="bg-white/10 backdrop-blur rounded-sm p-4 md:p-6">
                  <h4 className="gellix-font font-bold text-lg md:text-xl mb-3 md:mb-4 flex items-center">
                    <Microscope className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    Quality Controls
                  </h4>
                  <div className="space-y-2 md:space-y-3">
                    {['Soil Testing', 'Pest Management', 'Harvest Timing', 'Curing Process'].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-300 flex-shrink-0" />
                        <span className='gellix-font text-sm md:text-base'>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-sm p-6 md:p-8 text-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-white/20 rounded-sm mr-3 md:mr-4">
                    <LiaAwardSolid className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="gellix-font text-2xl md:text-3xl font-bold">Regular Audits</h3>
                </div>
                
                <p className="gellix-font text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-yellow-50">
                  Expert leaf technicians conduct regular training sessions and scheduled visits to ensure environmentally friendly farming methods.
                </p>
                
                {/* Animated Grower Composition Chart */}
                <div className="bg-white/10 backdrop-blur rounded-sm p-4 md:p-6">
                  <h4 className="gellix-font font-bold text-lg md:text-xl mb-3 md:mb-4 flex items-center">
                    <PieChart className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                    Grower Composition
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {growerComposition.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="gellix-font text-xs md:text-sm font-medium">{item.type}</span>
                          <span className="gellix-font text-xl md:text-2xl font-bold">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-sm h-2 md:h-3">
                          <motion.div
                            className={`h-2 md:h-3 rounded-full ${item.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: idx * 0.3 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Showcase */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="gellix-font text-3xl md:text-5xl font-bold mb-4 md:mb-6">Industry Recognition</h2>
            <p className="gellix-font text-lg md:text-xl opacity-90">Certified excellence in tobacco production</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "ISO Certified", desc: "International quality standards", icon: <LiaAwardSolid className="w-8 h-8 md:w-12 md:h-12" /> },
              { title: "Export Approved", desc: "Global market compliance", icon: <GiWorld className="w-8 h-8 md:w-12 md:h-12" /> },
              { title: "Sustainable Practices", desc: "Environmental responsibility", icon: <GiLindenLeaf className="w-8 h-8 md:w-12 md:h-12" /> }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 md:p-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-sm text-gray-900 mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  {cert.icon}
                </div>
                <h3 className="gellix-font text-xl md:text-2xl font-bold mb-2 md:mb-3">{cert.title}</h3>
                <p className="gellix-font text-sm md:text-base text-gray-300">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 bg-yellow-400/10 rounded-sm animate-pulse" />
        <div className="absolute bottom-20 right-20 w-12 h-12 md:w-24 md:h-24 bg-green-400/10 rounded-sm animate-bounce" />
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-800 to-yellow-800 text-white relative">
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gellix-font text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Experience Our Quality
            </h2>
            <p className="gellix-font text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Partner with Zimbabwe's premier tobacco producer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="gellix-font flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-sm px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
                <span>+263719411889</span>
              </div>
              <div className="gellix-font flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-sm px-4 md:px-6 py-2 md:py-3 text-sm md:text-base break-all">
                <span>sacrifice@sacmarleaftobacco.co.zw</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;