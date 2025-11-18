import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  Grid3X3,
  Square,
  Camera,
  Calendar,
  MapPin,
  Eye,
  Download,
  Share2,
  ZoomIn,
  Play,
  Pause,
  Leaf,
  Factory,
  FlaskConical,
  Users,
  Package,
  Wind,
  Globe,
  Sprout,
} from "lucide-react";
import { FaAngleDoubleUp } from "react-icons/fa";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const galleryItems = [
    {
      id: 1,
      src: "/1.jpg",
      category: "cultivation",
      title: "Premium Tobacco Seeds",
      description: "High-quality tobacco seeds for optimal germination",
      location: "Harare, Zimbabwe",
      date: "2024",
    },
    {
      id: 2,
      src: "/2.jpg",
      category: "cultivation",
      title: "Seedling Selection",
      description: "Careful selection of healthy tobacco seedlings",
      location: "Nursery Farm",
      date: "2024",
    },
    {
      id: 3,
      src: "/3.jpg",
      category: "cultivation",
      title: "Golden Tobacco Fields",
      description: "Expansive tobacco plantation at sunrise",
      location: "Rural Zimbabwe",
      date: "2024",
    },
    {
      id: 4,
      src: "/4.jpg",
      category: "cultivation",
      title: "Tobacco Seedbed Preparation",
      description: "Traditional seedbed preparation for tobacco cultivation",
      location: "Commercial Farm",
      date: "2024",
    },
    {
      id: 5,
      src: "/5.jpg",
      category: "cultivation",
      title: "Tobacco Farm Landscape",
      description: "Scenic view of tobacco growing region",
      location: "Mashonaland",
      date: "2024",
    },
    {
      id: 6,
      src: "/6.jpg",
      category: "cultivation",
      title: "Maize Intercropping",
      description: "Sustainable farming with maize rotation",
      location: "Diversified Farm",
      date: "2024",
    },
    {
      id: 7,
      src: "/7.jpg",
      category: "cultivation",
      title: "Tobacco Irrigation System",
      description: "Modern irrigation for optimal tobacco growth",
      location: "Commercial Estate",
      date: "2024",
    },
    {
      id: 8,
      src: "/8.jpg",
      category: "curing",
      title: "Traditional Curing Barn",
      description: "Heritage tobacco curing facility",
      location: "Curing Center",
      date: "2024",
    },
    {
      id: 9,
      src: "/9.jpg",
      category: "curing",
      title: "Flue-Cured Tobacco Barn",
      description: "Modern flue-curing facility for Virginia tobacco",
      location: "Processing Complex",
      date: "2024",
    },
    {
      id: 10,
      src: "/10.jpg",
      category: "cultivation",
      title: "Tobacco Field Equipment",
      description: "Modern farming equipment for tobacco production",
      location: "Mechanized Farm",
      date: "2024",
    },
    {
      id: 11,
      src: "/11.jpg",
      category: "cultivation",
      title: "Tobacco Harvesting Season",
      description: "Peak harvesting period with optimal leaf maturity",
      location: "Production Farm",
      date: "2024",
    },
    {
      id: 12,
      src: "/12.jpg",
      category: "cultivation",
      title: "Tobacco Field Worker",
      description: "Skilled worker tending to tobacco plants",
      location: "Estate Farm",
      date: "2024",
    },
    {
      id: 13,
      src: "/13.jpg",
      category: "cultivation",
      title: "Tobacco Plantation Rows",
      description: "Organized tobacco rows ensuring quality growth",
      location: "Commercial Farm",
      date: "2024",
    },
    {
      id: 14,
      src: "/farm1.jpg",
      category: "cultivation",
      title: "Young Tobacco Crop",
      description: "Early growth stage tobacco cultivation",
      location: "Growing Zone",
      date: "2024",
    },
    {
      id: 15,
      src: "/farm2.jpg",
      category: "cultivation",
      title: "Tobacco Field at Sunset",
      description: "Mature tobacco plants at golden hour",
      location: "Production Area",
      date: "2024",
    },
    {
      id: 16,
      src: "/farm3.jpg",
      category: "cultivation",
      title: "Tobacco Farmer at Work",
      description: "Expert farmer inspecting tobacco crop",
      location: "Estate Farm",
      date: "2024",
    },
    {
      id: 17,
      src: "/farm4.jpg",
      category: "cultivation",
      title: "Quality Tobacco Inspection",
      description: "Field quality control by experienced farmer",
      location: "Inspection Site",
      date: "2024",
    },
    {
      id: 18,
      src: "/farm5.jpg",
      category: "cultivation",
      title: "Dense Tobacco Canopy",
      description: "Healthy tobacco plants with full leaf coverage",
      location: "Prime Growing Area",
      date: "2024",
    },
    {
      id: 19,
      src: "/farm6.jpg",
      category: "curing",
      title: "Tobacco Curing Barn Interior",
      description: "Inside view of tobacco curing process",
      location: "Curing Facility",
      date: "2024",
    },
    {
      id: 20,
      src: "/farm7.jpg",
      category: "cultivation",
      title: "Tobacco Leaf Quality Check",
      description: "Close inspection of tobacco leaf development",
      location: "Quality Control",
      date: "2024",
    },
    {
      id: 21,
      src: "/farm8.webp",
      category: "cultivation",
      title: "Tobacco Plant Maturity",
      description: "Mature tobacco ready for harvesting",
      location: "Harvest Zone",
      date: "2024",
    },
    {
      id: 22,
      src: "/field.png",
      category: "cultivation",
      title: "Extensive Tobacco Fields",
      description: "Large-scale tobacco cultivation operations",
      location: "Commercial Estate",
      date: "2024",
    },
    {
      id: 23,
      src: "/fine.png",
      category: "processing",
      title: "Tobacco Fines Production",
      description: "High-quality tobacco fines for industrial use",
      location: "Processing Plant",
      date: "2024",
    },
    {
      id: 24,
      src: "/lumina.jpeg",
      category: "processing",
      title: "Premium Tobacco Lamina",
      description: "Pure tobacco leaf lamina for export",
      location: "Export Facility",
      date: "2024",
    },
    {
      id: 25,
      src: "/lumina.png",
      category: "processing",
      title: "Tobacco Lamina Sheet",
      description: "Processed tobacco lamina ready for distribution",
      location: "Quality Control",
      date: "2024",
    },
    {
      id: 26,
      src: "/lumina2.jpg",
      category: "processing",
      title: "Golden Tobacco Lamina",
      description: "Premium grade tobacco lamina",
      location: "Processing Center",
      date: "2024",
    },
    {
      id: 27,
      src: "/rug.png",
      category: "processing",
      title: "Cut Rag Tobacco",
      description: "Expertly cut tobacco meeting export standards",
      location: "Production Line",
      date: "2024",
    },
    {
      id: 28,
      src: "/stem.png",
      category: "processing",
      title: "Tobacco Stems Processing",
      description: "Industrial-grade tobacco stems",
      location: "Processing Facility",
      date: "2024",
    },
    {
      id: 29,
      src: "/tob.jpg",
      category: "processing",
      title: "Processed Tobacco Material",
      description: "High-quality processed tobacco for distribution",
      location: "Export Warehouse",
      date: "2024",
    },
    {
      id: 30,
      src: "/tobacco-lamina-expanded-stems-supplier-zimbabwe.webp",
      category: "export",
      title: "Tobacco Export Products",
      description: "Premium tobacco lamina and expanded stems for global markets",
      location: "Export Division",
      date: "2024",
    },
    {
      id: 31,
      src: "/tobacco-cut-rag-supplier-in-zimbabwe.webp",
      category: "export",
      title: "Zimbabwe Cut Rag Export",
      description: "International standard cut rag tobacco",
      location: "Export Center",
      date: "2024",
    },
    {
      id: 32,
      src: "/IMG_8459-2.jpg",
      category: "processing",
      title: "Tobacco Production Sample",
      description: "Quality sample for international buyers",
      location: "QC Laboratory",
      date: "2024",
    },
    {
      id: 33,
      src: "/l1.jpg",
      category: "leadership",
      title: "Executive Leadership",
      description: "Company leadership driving tobacco excellence",
      location: "Head Office",
      date: "2024",
    },
    {
      id: 34,
      src: "/l3.jpeg",
      category: "leadership",
      title: "Industry Leadership Forum",
      description: "Strategic meeting with industry leaders",
      location: "Conference Center",
      date: "2024",
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Gallery",
      icon: Grid3X3,
      count: galleryItems.length,
      color: "from-green-600 to-green-700",
    },
    {
      id: "cultivation",
      label: "Cultivation",
      icon: Sprout,
      count: galleryItems.filter((item) => item.category === "cultivation").length,
      color: "from-emerald-600 to-emerald-700",
    },
    {
      id: "processing",
      label: "Processing",
      icon: Factory,
      count: galleryItems.filter((item) => item.category === "processing").length,
      color: "from-amber-600 to-amber-700",
    },
    {
      id: "curing",
      label: "Curing",
      icon: Wind,
      count: galleryItems.filter((item) => item.category === "curing").length,
      color: "from-orange-600 to-orange-700",
    },
    {
      id: "export",
      label: "Export",
      icon: Globe,
      count: galleryItems.filter((item) => item.category === "export").length,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: Users,
      count: galleryItems.filter((item) => item.category === "leadership").length,
      color: "from-purple-600 to-purple-700",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (isPlaying && selectedImage) {
      const timer = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % filteredItems.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, selectedImage, filteredItems.length]);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentSlideIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsPlaying(false);
  };

  const nextImage = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredItems.length);
    setSelectedImage(
      filteredItems[(currentSlideIndex + 1) % filteredItems.length]
    );
  };

  const prevImage = () => {
    const newIndex =
      (currentSlideIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentSlideIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-1/3 sm:h-full bg-gradient-to-bl from-yellow-400 via-yellow-500 to-yellow-600 transform skew-x-3 sm:skew-x-12 origin-top-right" />
          <img
            src="/7.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="gellix-font inline-block bg-yellow-400 text-green-900 px-4 py-2 rounded-sm font-bold text-sm mb-6">
                VISUAL SHOWCASE
              </div>
              <h1 className="gellix-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                OUR <span className="text-yellow-400">GALLERY</span>
              </h1>
              <p className="gellix-font text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
                Explore the journey from field to export through our comprehensive visual documentation
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-yellow-400" />
                  <span className="gellix-font">Professional Photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-yellow-400" />
                  <span className="gellix-font">Behind the Scenes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden fixed left-4 top-24 z-50 bg-gradient-to-br from-green-700 to-green-800 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all"
      >
        <Filter className="w-5 h-5" />
      </button>

      {/* Floating Sidebar Filters - Mobile & Desktop */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: showFilters || window.innerWidth >= 1024 ? 0 : -100, 
          opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0 
        }}
        className={`fixed left-4 top-40 z-40 ${showFilters || 'hidden lg:block'}`}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 space-y-3 border border-gray-200">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowFilters(false);
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group w-14 h-14 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <IconComponent className="w-6 h-6" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {category.label}
                  <span className="ml-1 opacity-70">({category.count})</span>
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>

                {/* Active Indicator */}
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -right-1 -top-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"
                  />
                )}
              </motion.button>
            );
          })}

          {/* View Mode Toggle */}
          <div className="pt-3 mt-3 border-t border-gray-200 space-y-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-14 h-14 rounded-xl transition-all duration-300 flex items-center justify-center ${
                viewMode === "grid"
                  ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Grid3X3 className="w-6 h-6" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`w-14 h-14 rounded-xl transition-all duration-300 flex items-center justify-center ${
                viewMode === "masonry"
                  ? "bg-gradient-to-br from-gray-700 to-gray-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Square className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 lg:pl-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Category Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="gellix-font text-3xl font-black text-gray-900 mb-2">
              {categories.find((cat) => cat.id === selectedCategory)?.label}
            </h2>
            <p className="gellix-font text-gray-600">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                  : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
              }
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`group cursor-pointer ${
                    viewMode === "masonry" ? "break-inside-avoid" : ""
                  }`}
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="gellix-font text-lg sm:text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="gellix-font text-sm text-gray-200 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span className="gellix-font">{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span className="gellix-font">{item.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full">
                        <ZoomIn className="w-4 h-4 text-green-900" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <span className="gellix-font">
                        {item.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-7xl w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm rounded-2xl mb-4">
                <div className="text-white">
                  <h3 className="gellix-font text-xl font-bold">
                    {selectedImage.title}
                  </h3>
                  <p className="gellix-font text-sm text-gray-300">
                    {currentSlideIndex + 1} of {filteredItems.length}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-yellow-400 transition-colors p-2"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <button className="text-white hover:text-yellow-400 transition-colors p-2">
                    <Share2 className="w-5 h-5" />
                  </button>

                  <button className="text-white hover:text-yellow-400 transition-colors p-2">
                    <Download className="w-5 h-5" />
                  </button>

                  <button
                    onClick={closeLightbox}
                    className="text-white hover:text-red-400 transition-colors p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center relative">
                <motion.img
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-2xl"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer Info */}
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 mt-4 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="gellix-font text-sm text-gray-300 mb-2">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-yellow-400" />
                        <span className="gellix-font">
                          {selectedImage.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-yellow-400" />
                        <span className="gellix-font">
                          {selectedImage.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {filteredItems
                      .slice(
                        Math.max(0, currentSlideIndex - 2),
                        currentSlideIndex + 3
                      )
                      .map((item, index) => {
                        const actualIndex =
                          Math.max(0, currentSlideIndex - 2) + index;
                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              setCurrentSlideIndex(actualIndex);
                              setSelectedImage(item);
                            }}
                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                              actualIndex === currentSlideIndex
                                ? "border-yellow-400"
                                : "border-transparent hover:border-white/50"
                            }`}
                          >
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-700 to-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        <FaAngleDoubleUp className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

export default GalleryPage;