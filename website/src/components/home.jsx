import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  Linkedin,
  Sun,
  Droplet,
  TrendingUp,
  Package,
  Shield,
  Sparkles,
  Briefcase,
  Building,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { SiFsecure } from "react-icons/si";
import { RiGlobalFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaPeopleCarry } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import { GiLindenLeaf } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";

import { useInView, useMotionValue, useSpring } from "framer-motion";

export const LazyImage = ({ src, alt, className, style, priority = false }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();
  const isInView = useInView(imgRef, { once: true, margin: "50px" });

  useEffect(() => {
    if (priority || isInView) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }
  }, [src, isInView, priority]);

  return (
    <div
      ref={imgRef}
      className={className}
      style={{
        ...style,
        // Remove the position: "relative" - let className handle positioning
        overflow: "hidden",
      }}
    >
      {/* Placeholder with blur effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #e3180d20, #ff7805020)",
          filter: imageLoaded ? "blur(0px)" : "blur(10px)",
          transition: "filter 0.3s ease",
        }}
      />
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();

  const handleProductLearnMore = (productId) => {
    navigate(`/products/${productId}`);
  };
  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263783411889";
    } else if (action === "email") {
      window.location.href = "mailto:info@sacmarleaf.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263783411889?text=Hello%20Sacmar%20Leaf%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";
    }
  };

  const slides = [
    {
      title: "Welcome to Sacmar Leaf",
      subtitle: "Contracting Farmers and Export Excellence",
      image: "/7.jpg",
      gradient: "from-green-900/80 to-yellow-900/60",
    },
    {
      title: "Ensuring Quality Tobacco Production",
      subtitle: "Premium Standards in Every Harvest",
      image: "/3.jpg",
      gradient: "from-yellow-900/80 to-green-900/60",
    },
    {
      title: "Nesting is Illegal",
      subtitle: "Pure tobacco, no foreign matter - our commitment to quality",
      image: "/12.jpg",
      gradient: "from-amber-900/80 to-green-900/60",
    },
  ];

  const directors = [
    {
      name: "Sacrifice Mariga",
      position: "Managing Director",
      image: "l1.jpg",
      location: "Harare, Zimbabwe",
      description:
        "Leading agricultural innovation and farmer partnerships across Zimbabwe",
      phone: "+263 77 123 4567",
      linkedin: "https://linkedin.com/in/sacrifice-mariga",
    },
    {
      name: "Arief Yulianto",
      position: "Indonesian Representative",
      image: "l3.jpeg",
      location: "Jakarta, Indonesia",
      description:
        "Managing Southeast Asian markets and international trade relations",
      phone: "+62 812 3456 7890",
      linkedin: "https://linkedin.com/in/arief-yulianto",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel with Crossfade */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {/* Background Images Stack */}
        {/* Background Images Stack */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05,
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <LazyImage
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0"
                priority={index === 0}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center text-white z-10">
          <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <h1 className="gellix-font text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                  {slides[currentSlide].title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-green-400">
                    {slides[currentSlide].title.split(" ").slice(-2).join(" ")}
                  </span>
                </h1>
                <p className="gellix-font text-xl md:text-2xl drop-shadow-lg mb-8">
                  {slides[currentSlide].subtitle.split(",")[0]},{" "}
                  <span className="text-green-400">
                    {slides[currentSlide].subtitle.split(",")[1] ||
                      slides[currentSlide].subtitle
                        .split(" ")
                        .slice(-2)
                        .join(" ")}
                  </span>
                </p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/about"
                    className="gellix-font bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-sm font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="gellix-font bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-sm font-semibold border-2 border-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-yellow-400 shadow-lg shadow-yellow-400/30"
                  : "w-3 bg-white/40 hover:bg-white/60"
              } rounded-full backdrop-blur-sm`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute hidden sm:block left-5 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md p-3 rounded-full hover:bg-black/30 transition-all duration-300 z-20 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute hidden sm:block right-5 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md p-3 rounded-full hover:bg-black/30 transition-all duration-300 z-20 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* About Company Section - Compact Ad Style */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src="/3.jpg"
            alt="Sacmar Leaf Operations"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-green-900/75 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content - Compact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="inline-block px-3 py-1 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-sm mb-3">
                <span className="gellix-font text-green-300 font-semibold tracking-wider text-xs">
                  ABOUT SACMAR LEAF
                </span>
              </div>

              <h2 className="gellix-font text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Leading Zimbabwe's{" "}
                <span className="text-green-400">Tobacco Export</span>
              </h2>

              <p className="gellix-font text-base text-gray-200 mb-6 leading-relaxed max-w-2xl">
                With decades of experience, we bridge local agricultural
                excellence and global market demands through quality, fair
                trade, and sustainable farming partnerships.
              </p>

              {/* Compact Stats */}
              <div className="flex items-center gap-6 mb-6">
                {[
                  { icon: GiFarmer, number: "500+", label: "Farmers" },
                  { icon: GiWorld, number: "15+", label: "Countries" },
                  { icon: LiaAwardSolid, number: "25+", label: "Years" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-2">
                      <stat.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="gellix-font text-lg font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="gellix-font text-xs text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="gellix-font inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right Content - Glassmorphism Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:block hidden"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-sm p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: GiLindenLeaf, title: "Premium Quality" },
                    { icon: SiFsecure, title: "Fair Trade" },
                    { icon: HiArrowTrendingUp, title: "Market Access" },
                    { icon: Sparkles, title: "Innovation" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex flex-col items-center text-center p-3 bg-white/5 rounded-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <feature.icon className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                      <h3 className="gellix-font text-white font-semibold text-sm group-hover:text-green-300 transition-colors">
                        {feature.title}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
      </section>

      {/* Products Section */}
      {/* Products Section */}
      <section className="relative py-24 border-t-4 border-amber-500 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage
            src="/3.jpg"
            alt="Products Background"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-amber-900/85 to-green-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-6">
              Our Products
            </h2>
            <p className="gellix-font text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Premium quality tobacco products crafted with expertise and
              precision for international markets
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Cut Rug",
                id: "cut-rug",
                image: "/rug.png",
                description:
                  "Expertly cut tobacco meeting international standards",
              },
              {
                name: "Tobacco Lamina",
                id: "tobacco-lamina",
                image: "/lumina.jpeg",
                description: "Pure tobacco leaf lamina for premium products",
              },
              {
                name: "Tobacco Stems",
                id: "tobacco-stems",
                image: "/stem.png",
                description: "High-quality stems processed for industrial use",
              },
              {
                name: "Tobacco Fines",
                id: "tobacco-fines",
                image: "/fine.png",
                description:
                  "Premium fine-grade tobacco for specialized applications",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => handleProductLearnMore(product.id)}
              >
                <div className="relative rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-80">
                  {/* Full Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={() => setImageLoaded(true)}
                  />

                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <span className="text-gray-400">...</span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Premium Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="gellix-font bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-sm text-xs font-bold shadow-lg">
                      PREMIUM
                    </div>
                  </div>

                  {/* Product Info Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="gellix-font text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="gellix-font text-gray-200 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Quality Indicators */}
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="gellix-font">Quality Assured</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-blue-400" />
                        <span className="gellix-font">Export Ready</span>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <button className="gellix-font w-full bg-white/30 hover:bg-white text-gray-900 py-3 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Professional Directors Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="gellix-font text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Meet the experienced professionals driving Sacmar Leaf's mission
              of excellence in tobacco production and export
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-yellow-500 mx-auto rounded-sm" />
          </motion.div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-[500px] flex flex-col">
                    {/* Professional Header */}
                    <div className="h-2 bg-gradient-to-r from-green-600 to-yellow-500" />

                    {/* Profile Image - Top Half */}
                    <div className="relative h-1/2 overflow-hidden">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content - Bottom Half */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      {/* Name & Title */}
                      <div className="text-center">
                        <h3 className="gellix-font text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                          {director.name}
                        </h3>
                        <p className="gellix-font text-green-600 font-semibold text-lg mb-3 flex items-center justify-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {director.position}
                        </p>

                        {/* Location */}
                        <div className="gellix-font flex items-center justify-center text-gray-500 mb-4 gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{director.location}</span>
                        </div>

                        {/* Description */}
                        <p className="gellix-font text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {director.description}
                        </p>
                      </div>
                    </div>

                    {/* Professional Footer */}
                    {/* Professional Footer */}
                    <div className="bg-gradient-to-r from-green-50 to-yellow-50 px-6 py-4 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-4">
                        {/* Phone */}

                        <a
                          href={`tel:${director.phone}`}
                          className="group flex items-center gap-2 bg-white px-4 py-2 rounded-sm hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md"
                          title="Call"
                        >
                          <Phone className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                          <span className="gellix-font text-xs text-gray-700 group-hover:text-green-700 font-medium">
                            Call
                          </span>
                        </a>

                        {/* LinkedIn */}

                        <a
                          href={director.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 bg-white px-4 py-2 rounded-sm hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                          <span className="gellix-font text-xs text-gray-700 group-hover:text-blue-700 font-medium">
                            LinkedIn
                          </span>
                        </a>
                      </div>

                      <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-3">
                        <div className="flex items-center gap-1">
                          <Building className="w-3 h-3" />
                          <span className="gellix-font">Sacmar Leaf</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span className="gellix-font">Executive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company Values Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 bg-gradient-to-r from-green-600 to-yellow-600 rounded-sm p-8"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center text-white">
              <div className="flex flex-col items-center">
                <SiFsecure className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="gellix-font font-bold text-lg mb-2">
                  Quality Assurance
                </h4>
                <p className="gellix-font text-green-100 text-sm">
                  Maintaining the highest standards in tobacco production
                </p>
              </div>
              <div className="flex flex-col items-center">
                <RiGlobalFill className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="gellix-font font-bold text-lg mb-2">
                  Global Reach
                </h4>
                <p className="gellix-font text-green-100 text-sm">
                  Connecting farmers to international markets
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaPeopleCarry className="w-12 h-12 mb-4 opacity-90" />
                <h4 className="gellix-font font-bold text-lg mb-2">
                  Farmer Partnerships
                </h4>
                <p className="gellix-font text-green-100 text-sm">
                  Building sustainable relationships with local growers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
