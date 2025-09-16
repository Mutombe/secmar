import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Award,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Sun,
  Droplet,
  TrendingUp,
  Package,
  Shield,
  Sparkles,
} from "lucide-react";
import { SiPlanetscale } from "react-icons/si";
import { FaFileContract } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";




const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const serviceData = {
    production: {
      title: "Crop Production",
      subtitle: "From Seed to Harvest",
      stats: [
        { number: "500+", label: "Contract Farmers" },
        { number: "95%", label: "Quality Rate" },
        { number: "10K", label: "Hectares Managed" },
      ],
      features: [
        {
          icon: <FaFileContract className="w-6 h-6" />,
          title: "Contract Farming",
          desc: "Vetted grower partnerships",
        },
        {
          icon: <GrTechnology className="w-6 h-6" />,
          title: "Technical Support",
          desc: "Expert agronomy team",
        },
        {
          icon: <Package className="w-6 h-6" />,
          title: "Input Supply",
          desc: "Quality materials provided",
        },
        {
          icon: <MdOutlineEmojiTransportation className="w-6 h-6" />,
          title: "Transport Services",
          desc: "Logistics solutions",
        },
      ],
    },
    exports: {
      title: "Tobacco Exports",
      subtitle: "Global Excellence",
      stats: [
        { number: "40+", label: "Export Markets" },
        { number: "100%", label: "Quality Assured" },
        { number: "24/7", label: "Processing" },
      ],
      features: [
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Custom Blends",
          desc: "Tailored formulations",
        },
        {
          icon: <GiWorld className="w-6 h-6" />,
          title: "Global Export",
          desc: "Worldwide distribution",
        },
        {
          icon: <SiFsecure className="w-6 h-6" />,
          title: "Quality Processing",
          desc: "Premium standards",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Competitive Pricing",
          desc: "Market-leading rates",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-white">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/2.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-black/50 to-yellow-900/70" />{" "}
        <motion.div
          className="max-w-7xl mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-center mb-16">
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gellix-font text-white drop-shadow-2xl">Our Services</span>
            </motion.h1>
            <motion.p
              className="gellix-font text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Where tradition meets innovation in tobacco excellence
            </motion.p>
          </div>

          {/* Service Navigator */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-sm p-2 shadow-xl">
              <div className="flex space-x-2">
                {Object.entries(serviceData).map(([key, service], index) => (
                  <button
                    key={key}
                    onClick={() => setActiveService(index)}
                    className={`gellix-font px-8 py-4 rounded-sm font-semibold transition-all ${
                      activeService === index
                        ? "bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Service Display */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left: Visual Stats */}
              <div className="space-y-8">
                <div>
                  <h2 className="gellix-font text-5xl font-bold text-gray-800 mb-2">
                    {Object.values(serviceData)[activeService].title}
                  </h2>
                  <p className="gellix-font text-2xl text-yellow-600 font-medium">
                    {Object.values(serviceData)[activeService].subtitle}
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {Object.values(serviceData)[activeService].stats.map(
                    (stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="gellix-font bg-gradient-to-br from-white to-green-50 rounded-sm p-6 text-center shadow-lg border border-green-100"
                      >
                        <div className="gellix-font text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="gellix-font text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Organic Shapes */}
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-yellow-200 to-green-200 rounded-sm opacity-20 animate-pulse" />
                  <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-r from-green-300 to-yellow-300 rounded-sm opacity-30" />
                </div>
              </div>

              {/* Right: Feature Cards */}
              <div className="grid grid-cols-2 gap-6">
                {Object.values(serviceData)[activeService].features.map(
                  (feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="group relative"
                    >
                      <div className="bg-white rounded-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-green-200">
                        <div className="mb-4">
                          <div className="inline-flex p-3 rounded-sm bg-gradient-to-br from-green-100 to-yellow-100 text-green-700 group-hover:from-green-600 group-hover:to-yellow-600 group-hover:text-white transition-all">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="gellix-font text-xl font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="gellix-font text-gray-600 text-sm leading-relaxed">
                          {feature.desc}
                        </p>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-yellow-600/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Flow Visualization */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="gellix-font text-5xl font-bold mb-6">Our Process</h2>
            <p className="gellix-font text-xl opacity-90">
              From cultivation to global markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Cultivation",
                desc: "Expert farming techniques",
              },
              {
                step: "02",
                title: "Processing",
                desc: "Quality transformation",
              },
              { step: "03", title: "Blending", desc: "Custom formulations" },
              { step: "04", title: "Export", desc: "Global distribution" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="gellix-font w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm flex items-center justify-center text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <ArrowRight className="absolute top-1/2 -right-8 w-6 h-6 text-yellow-400 hidden md:block" />
                  )}
                </div>
                <h3 className="gellix-font text-2xl font-bold mb-2">{item.title}</h3>
                <p className="gellix-font opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-sm" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400/10 rounded-sm" />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="gellix-font text-5xl font-bold text-gray-800 mb-6">
              Why Choose Sacmar
            </h2>
            <p className="gellix-font text-xl text-gray-600">
              Excellence backed by experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <SiFsecure className="w-16 h-16" />,
                title: "Premium Quality",
                description:
                  "World-renowned Zimbabwean tobacco with consistent quality standards",
                color: "from-yellow-500 to-amber-600",
              },
              {
                icon: <MdContactSupport  className="w-16 h-16" />,
                title: "Expert Support",
                description:
                  "Dedicated agronomy team providing technical guidance and support",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: <GiWorld className="w-16 h-16" />,
                title: "Global Reach",
                description:
                  "Extensive export network serving markets across the world",
                color: "from-amber-600 to-yellow-700",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-green-200 h-full">
                  <div
                    className={`inline-flex p-4 rounded-sm bg-gradient-to-br ${item.color} text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="gellix-font text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="gellix-font text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-200 to-yellow-200 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-300 to-green-300 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-yellow-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="gellix-font text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="gellix-font text-xl mb-8 opacity-90">
              Join hundreds of satisfied growers and international partners
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-sm px-6 py-3">
                <Phone className="w-5 h-5" />
                <span className="gellix-font">+263719411889</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-sm px-6 py-3">
                <Mail className="w-5 h-5" />
                <span className="gellix-font">sacrifice@sacmarleaftobacco.co.zw</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-sm" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-sm" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-sm" />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
