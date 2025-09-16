import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building2, Globe2, ArrowRight, Sparkles, Heart } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

useEffect(() => {
  // Load Leaflet CSS and JS
  const loadLeaflet = async () => {
    // Load CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const leafletCSS = document.createElement('link');
      leafletCSS.rel = 'stylesheet';
      leafletCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(leafletCSS);
    }

    // Load JS
    if (!window.L) {
      const leafletJS = document.createElement('script');
      leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      leafletJS.onload = initializeMap;
      document.body.appendChild(leafletJS);
    } else {
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (mapRef.current && window.L && !mapLoaded) {
      // Set z-index on the map container BEFORE initializing
      mapRef.current.style.position = 'relative';
      mapRef.current.style.zIndex = '1';
      
      // Harare coordinates
      const map = window.L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
        // Ensure map doesn't interfere with other interactions
        boxZoom: false,
        doubleClickZoom: false
      }).setView([-17.8216, 31.0492], 13);
      
      // Custom brown-yellow tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Custom marker icon
      const customIcon = window.L.divIcon({
        html: `<div class="w-8 h-8 rounded-sm border-4 border-white shadow-lg flex items-center justify-center">
                 <div class="w-3 h-3 bg-yellow-400 rounded-sm"></div>
               </div>`,
        className: 'custom-div-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      // Add marker
      window.L.marker([-17.8216, 31.0492], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-3 text-center">
            <h3 class="gellix-font font-bold text-gray-800 mb-2">Sacmar Leaf Tobacco</h3>
            <p class="gellix-font text-sm text-gray-600">14776 Chawara Road, Off Coventry<br>Harare, Zimbabwe</p>
          </div>
        `);

      // Apply brown-yellow filter to map
      const mapContainer = mapRef.current;
      mapContainer.style.filter = '';
      
      // Additional z-index control after map initialization
      setTimeout(() => {
        const leafletPanes = mapContainer.querySelectorAll('.leaflet-pane');
        leafletPanes.forEach(pane => {
          pane.style.zIndex = 'auto';
        });
        
        // Specifically target the popup pane to ensure it doesn't go too high
        const popupPane = mapContainer.querySelector('.leaflet-popup-pane');
        if (popupPane) {
          popupPane.style.zIndex = '600';
        }
        
        // Control the marker pane
        const markerPane = mapContainer.querySelector('.leaflet-marker-pane');
        if (markerPane) {
          markerPane.style.zIndex = '500';
        }
      }, 100);
      
      setMapLoaded(true);
    }
  };

  loadLeaflet();
}, [mapLoaded]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+263 783 411 889"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sacmarleaf.co.zw"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["14776 Chawara Road", "Off Coventry, Harare"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"],
      color: "from-green-600 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Animated Hero Section */}
      <section ref={heroRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ">
                <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/farm2.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-yellow-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-yellow-400/20 rounded-sm blur-xl animate-pulse"></div>
          <div className="absolute bottom-8 sm:bottom-16 md:bottom-20 right-4 sm:right-10 md:right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-green-400/20 rounded-sm blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-orange-400/10 rounded-sm blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-yellow-100 px-4 sm:px-6 py-2 sm:py-3 rounded-sm border border-green-200/50 backdrop-blur-sm mb-6 sm:mb-8">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
              <span className="gellix-font text-sm sm:text-base text-green-700 font-semibold">Let's Connect & Grow Together</span>
            </div>
            
            <h1 className="gellix-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Get in Touch
            </h1>
            
            <p className="gellix-font text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-2">
              Ready to transform your tobacco business? We're here to help you every step of the way with premium quality and sustainable solutions.
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeroInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-32 sm:w-48 h-1.5 sm:h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 mx-auto rounded-sm mt-6 sm:mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50 rounded-sm shadow-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-sm shadow-xl p-6 sm:p-8 border border-amber-100/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${info.color} rounded-sm flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="gellix-font text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{info.title}</h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="gellix-font text-sm sm:text-base text-gray-600 leading-relaxed break-words">{detail}</p>
                    ))}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-yellow-600 rounded-sm transform rotate-1 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-yellow-600 rounded-sm shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-sm flex items-center justify-center">
                    <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="gellix-font text-2xl sm:text-3xl font-bold text-white">Send Message</h2>
                    <p className="gellix-font text-sm sm:text-base text-green-100">We'd love to hear from you</p>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="relative group">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="gellix-font w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-sm bg-white/95 backdrop-blur border-2 border-white/50 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="gellix-font w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-sm bg-white/95 backdrop-blur border-2 border-white/50 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="relative group">
                    <Building2 className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="gellix-font w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-sm bg-white/95 backdrop-blur border-2 border-white/50 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white transition-all text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="relative group">
                    <MessageSquare className="absolute left-3 sm:left-4 top-5 sm:top-6 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                    <textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="gellix-font w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-sm bg-white/95 backdrop-blur border-2 border-white/50 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white transition-all h-24 sm:h-32 resize-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-green-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="gellix-font w-4 sm:w-5 h-4 sm:h-5 border-2 border-green-600 border-t-transparent rounded-sm animate-spin"></div>
                        <span className='gellix-font'>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                        <span className='gellix-font'>Send Message</span>
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Map and Indonesian Representative */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              {/* Interactive Map */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm transform rotate-1 opacity-20"></div>
                <div className="relative bg-white rounded-sm shadow-2xl overflow-hidden border-2 sm:border-4 border-amber-100">
                  <div className="bg-gradient-to-r from-green-600 to-yellow-600 px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-sm flex items-center justify-center">
                        <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="gellix-font text-lg sm:text-xl font-bold text-white">Find Us Here</h3>
                        <p className="gellix-font text-sm sm:text-base text-green-100">Harare, Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    ref={mapRef} 
                    className="w-full h-64 sm:h-80 bg-amber-100"
                    style={{ minHeight: '256px' }}
                  >
                    {!mapLoaded && (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center space-y-3 sm:space-y-4 p-4">
                          <div className="w-8 sm:w-12 h-8 sm:h-12 border-2 sm:border-4 border-green-500 border-t-transparent rounded-sm animate-spin mx-auto"></div>
                          <p className="gellix-font text-sm sm:text-base text-gray-600">Loading interactive map...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Indonesian Representative Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-sm transform -rotate-1 opacity-20"></div>
                <div className="relative bg-white rounded-sm shadow-2xl p-6 sm:p-8 border-2 sm:border-4 border-green-100">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-sm flex items-center justify-center">
                      <Globe2 className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="gellix-font text-xl sm:text-2xl font-bold text-gray-800">Indonesian Office</h3>
                      <p className="gellix-font text-sm sm:text-base text-gray-600">Your gateway to Southeast Asia</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-sm p-4 sm:p-6 border border-green-200">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-sm flex items-center justify-center">
                        <User className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="gellix-font text-lg sm:text-xl font-bold text-gray-800">Arief Yulianto</h4>
                        <p className="gellix-font text-sm sm:text-base text-green-600 font-semibold">Regional Representative</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700">
                        <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0" />
                        <span className='gellix-font text-sm sm:text-base break-all'>+62 811 277 209</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-gray-700">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0" />
                        <span className='gellix-font text-sm sm:text-base break-all'>ariefyulianto@yahoo.co.id</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-900/5 to-yellow-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-yellow-100 px-4 sm:px-6 py-2 sm:py-3 rounded-sm border border-green-200/50">
              <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
              <span className="gellix-font text-sm sm:text-base text-green-700 font-semibold">Trusted Worldwide</span>
            </div>
            
            <h2 className="gellix-font text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 px-2">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">Sacmar Leaf Tobacco</span>?
            </h2>
            
            <p className="gellix-font text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              With decades of expertise and commitment to quality, we're your trusted partner in premium tobacco solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { number: "25+", label: "Years Experience", color: "from-green-500 to-emerald-600" },
                { number: "50+", label: "Countries Served", color: "from-yellow-500 to-orange-600" },
                { number: "100%", label: "Quality Guaranteed", color: "from-orange-500 to-red-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`gellix-font text-4xl sm:text-5xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="gellix-font text-sm sm:text-base text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;