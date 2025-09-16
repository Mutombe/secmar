import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  SkipBack,
  SkipForward
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      src: '/7.jpg',
      category: 'tobacco',
      title: 'Premium Tobacco Leaves',
      description: 'High-quality tobacco leaves ready for processing',
      location: 'Harare, Zimbabwe',
      date: '2024'
    },
    {
      id: 2,
      src: '/3.jpg',
      category: 'processing',
      title: 'Quality Processing',
      description: 'State-of-the-art tobacco processing facility',
      location: 'Processing Plant',
      date: '2024'
    },
    {
      id: 3,
      src: '/12.jpg',
      category: 'floors',
      title: 'Curing Floors',
      description: 'Traditional tobacco curing floors ensuring optimal quality',
      location: 'Curing Facility',
      date: '2024'
    },
    {
      id: 4,
      src: '/farm1.jpg',
      category: 'tobacco',
      title: 'Tobacco Plantation',
      description: 'Expansive tobacco fields under perfect growing conditions',
      location: 'Rural Zimbabwe',
      date: '2024'
    },
    {
      id: 5,
      src: '/fine.png',
      category: 'processing',
      title: 'Tobacco Fines',
      description: 'Precisely processed tobacco fines for export',
      location: 'Processing Center',
      date: '2024'
    },
    {
      id: 6,
      src: '/stem.png',
      category: 'processing',
      title: 'Tobacco Stems',
      description: 'Quality tobacco stems prepared for industrial applications',
      location: 'Processing Facility',
      date: '2024'
    },
    {
      id: 7,
      src: '/rug.png',
      category: 'processing',
      title: 'Cut Rug Tobacco',
      description: 'Expertly cut tobacco meeting international standards',
      location: 'Export Preparation',
      date: '2024'
    },
    {
      id: 8,
      src: '/lumina.jpeg',
      category: 'processing',
      title: 'Tobacco Lamina',
      description: 'Pure tobacco leaf lamina for premium products',
      location: 'Quality Control',
      date: '2024'
    },
    {
      id: 9,
      src: '/l1.jpg',
      category: 'events',
      title: 'Leadership Meeting',
      description: 'Strategic planning session with management team',
      location: 'Head Office',
      date: '2024'
    },
    {
      id: 10,
      src: '/farm8.webp',
      category: 'events',
      title: 'Quality Inspection',
      description: 'Regular quality assurance and inspection process',
      location: 'Processing Plant',
      date: '2024'
    },
    {
      id: 11,
      src: '/field.png',
      category: 'events',
      title: 'International Partnership',
      description: 'Meeting with international trade representatives',
      location: 'Jakarta, Indonesia',
      date: '2024'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Gallery', count: galleryItems.length },
    { id: 'tobacco', label: 'Tobacco Fields', count: galleryItems.filter(item => item.category === 'tobacco').length },
    { id: 'processing', label: 'Processing', count: galleryItems.filter(item => item.category === 'processing').length },
    { id: 'floors', label: 'Curing Floors', count: galleryItems.filter(item => item.category === 'floors').length },
    { id: 'events', label: 'Events', count: galleryItems.filter(item => item.category === 'events').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Slideshow functionality
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
    setSelectedImage(filteredItems[(currentSlideIndex + 1) % filteredItems.length]);
  };

  const prevImage = () => {
    const newIndex = (currentSlideIndex - 1 + filteredItems.length) % filteredItems.length;
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

      {/* Filter Controls */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-yellow-50 to-green-50 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`gellix-font px-4 py-2 sm:px-6 sm:py-3 rounded-sm font-bold text-sm sm:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-sm border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-sm transition-colors ${
                  viewMode === 'grid' ? 'bg-green-700 text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-sm transition-colors ${
                  viewMode === 'masonry' ? 'bg-green-700 text-white' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Square className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6' 
                  : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6'
              }
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid' : ''
                  }`}
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="gellix-font text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                        <p className="gellix-font text-sm text-gray-200 mb-3">{item.description}</p>
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
                      <div className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-sm">
                        <ZoomIn className="w-4 h-4 text-green-900" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-green-700 text-white px-2 py-1 rounded-sm text-xs font-bold">
                      <span className="gellix-font">{item.category.toUpperCase()}</span>
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
            <div className="relative max-w-7xl w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm rounded-sm mb-4">
                <div className="text-white">
                  <h3 className="gellix-font text-xl font-bold">{selectedImage.title}</h3>
                  <p className="gellix-font text-sm text-gray-300">{currentSlideIndex + 1} of {filteredItems.length}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Slideshow Controls */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-yellow-400 transition-colors p-2"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
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
                  className="max-w-full max-h-full object-contain rounded-sm"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-sm backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-sm backdrop-blur-sm transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer Info */}
              <div className="bg-black/50 backdrop-blur-sm rounded-sm p-4 mt-4 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="gellix-font text-sm text-gray-300 mb-2">{selectedImage.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-yellow-400" />
                        <span className="gellix-font">{selectedImage.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-yellow-400" />
                        <span className="gellix-font">{selectedImage.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="flex items-center gap-2">
                    {filteredItems.slice(Math.max(0, currentSlideIndex - 2), currentSlideIndex + 3).map((item, index) => {
                      const actualIndex = Math.max(0, currentSlideIndex - 2) + index;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setCurrentSlideIndex(actualIndex);
                            setSelectedImage(item);
                          }}
                          className={`w-12 h-12 rounded-sm overflow-hidden border-2 transition-all ${
                            actualIndex === currentSlideIndex ? 'border-yellow-400' : 'border-transparent hover:border-white/50'
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
    </div>
  );
};

export default GalleryPage;