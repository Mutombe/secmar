import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
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

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

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
    },
    {
      name: "Dubre Muller",
      position: "Director",
      image: "/l2.jpeg",
      location: "Operations Director",
      description:
        "Overseeing quality control and export operations with 15+ years experience",
    },
    {
      name: "Arief Yulianto",
      position: "Indonesian Representative",
      image: "l3.jpeg",
      location: "Jakarta, Indonesia",
      description:
        "Managing Southeast Asian markets and international trade relations",
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
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-white z-10">
          <div className="text-center max-w-4xl px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="gellix-font text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="gellix-font text-xl md:text-2xl drop-shadow-lg">
                  {slides[currentSlide].subtitle}
                </p>
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

      {/* Products Section */}
      <section className="py-24 bg-amber-100 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="gellix-font text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h2>
            <p className="gellix-font text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Premium quality tobacco products crafted with expertise and
              precision for international markets
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Tobacco Fines",
                image: "/fine.png",
                description:
                  "Premium fine-grade tobacco for specialized applications",
              },
              {
                name: "Tobacco Stems",
                image: "/stem.png",
                description: "High-quality stems processed for industrial use",
              },
              {
                name: "Cut Rug",
                image: "/rug.png",
                description:
                  "Expertly cut tobacco meeting international standards",
              },
              {
                name: "Tobacco Lamina",
                image: "/lumina.jpeg",
                description: "Pure tobacco leaf lamina for premium products",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="gellix-font bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-sm text-xs font-bold shadow-lg">
                        PREMIUM
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="gellix-font text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="gellix-font text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Quality Indicators */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="gellix-font">Quality Assured</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-blue-500" />
                        <span className="gellix-font">Export Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Border */}
                  <div className="h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 px-8 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
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
