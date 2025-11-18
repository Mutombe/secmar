import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Globe,
  Package,
  Shield,
  Award,
  Download,
  Leaf,
  TrendingUp,
  Phone,
  Mail,
  FileText,
  Truck,
  BarChart3,
  Users,
  Star,
  ChevronRight,
  MapPin,
  Clock,
  Box,
  Target,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { LazyImage } from "./home";
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

// Product data with comprehensive details
const productsData = {
  "cut-rug": {
    id: "cut-rug",
    name: "Cut Rug",
    tagline: "Precision-Cut Excellence for Global Markets",
    image: "/rug.png",
    gallery: ["/rug.png", "/3.jpg", "/7.jpg", "/12.jpg"],
    description:
      "Premium cut rug tobacco processed to meet the highest international quality standards. Our expertly cut tobacco delivers consistent quality and meets the demanding specifications of global tobacco manufacturers.",
    detailedDescription:
      "Our Cut Rug represents the pinnacle of tobacco processing excellence. Through meticulous cutting and grading processes, we ensure each batch meets stringent international standards. The product undergoes multiple quality checks and is processed using state-of-the-art equipment to maintain consistency and purity.",
    specifications: [
      { label: "Moisture Content", value: "12-14%" },
      { label: "Cut Width", value: "0.8-1.2mm" },
      { label: "Purity Level", value: "99.5%" },
      { label: "Grade", value: "Premium Export Grade" },
      { label: "Processing Method", value: "Precision Mechanical Cutting" },
      { label: "Packaging", value: "200kg Bales / Custom" },
    ],
    features: [
      {
        icon: SiFsecure,
        title: "Quality Assured",
        description: "Rigorous quality control at every processing stage",
      },
      {
        icon: GiWorld,
        title: "Export Ready",
        description: "Meets international regulatory standards",
      },
      {
        icon: LiaAwardSolid,
        title: "Premium Grade",
        description: "Top-tier classification for global markets",
      },
      {
        icon: Package,
        title: "Flexible Packaging",
        description: "Custom packaging solutions available",
      },
    ],
    applications: [
      "Cigarette Manufacturing",
      "Rolling Tobacco Production",
      "Pipe Tobacco Blends",
      "Premium Tobacco Products",
      "International Export Markets",
    ],
    certifications: [
      "ISO 9001:2015 Quality Management",
      "HACCP Certified",
      "Export Compliance Certified",
      "Zimbabwe Tobacco Board Approved",
    ],
    benefits: [
      "Consistent cut size for uniform product quality",
      "Low foreign matter content",
      "Excellent moisture control for storage stability",
      "Competitive pricing for bulk orders",
      "Reliable supply chain management",
    ],
    gradient: "from-amber-900/90 to-yellow-900/80",
  },
  "tobacco-lamina": {
    id: "tobacco-lamina",
    name: "Tobacco Lamina",
    tagline: "Pure Leaf Excellence Without Stems",
    image: "/lumina.jpeg",
    gallery: ["/lumina.jpeg", "/3.jpg", "/7.jpg", "/12.jpg"],
    description:
      "Pure tobacco leaf lamina, carefully separated from stems to provide the highest quality leaf material. Perfect for premium tobacco products requiring pure leaf content without stems or foreign matter.",
    detailedDescription:
      "Our Tobacco Lamina is the result of sophisticated threshing processes that separate pure leaf material from stems. This premium product is ideal for manufacturers requiring high-grade leaf content for their finest tobacco products. Each batch is meticulously sorted and graded to ensure maximum purity and consistency.",
    specifications: [
      { label: "Stem Content", value: "< 2%" },
      { label: "Moisture Content", value: "11-13%" },
      { label: "Leaf Purity", value: "98%+" },
      { label: "Color Grade", value: "Light to Medium Brown" },
      { label: "Threshing Method", value: "Advanced Mechanical Separation" },
      { label: "Packaging", value: "180kg Bales / Custom" },
    ],
    features: [
      {
        icon: GiLindenLeaf,
        title: "Pure Leaf Content",
        description: "Minimal stem content for premium applications",
      },
      {
        icon: LiaAwardSolid,
        title: "Superior Quality",
        description: "Carefully selected and processed leaf material",
      },
      {
        icon: SiFsecure,
        title: "Consistency Guaranteed",
        description: "Uniform quality across all batches",
      },
      {
        icon: HiArrowTrendingUp,
        title: "Market Leader",
        description: "Preferred choice for premium manufacturers",
      },
    ],
    applications: [
      "Premium Cigarette Production",
      "High-End Rolling Tobacco",
      "Cigar Wrapper and Filler",
      "Specialty Tobacco Products",
      "Pharmaceutical Applications",
    ],
    certifications: [
      "ISO 9001:2015 Quality Management",
      "GMP Certified Facility",
      "International Tobacco Growers Association Member",
      "Zimbabwe Tobacco Board Certified",
    ],
    benefits: [
      "Maximum leaf content for higher yields",
      "Superior burning characteristics",
      "Excellent flavor profile retention",
      "Reduced processing waste for manufacturers",
      "Competitive pricing for premium quality",
    ],
    gradient: "from-green-900/90 to-emerald-800/80",
  },
  "tobacco-stems": {
    id: "tobacco-stems",
    name: "Tobacco Stems",
    tagline: "Industrial Grade Stems for Specialized Applications",
    image: "/stem.png",
    gallery: ["/stem.png", "/3.jpg", "/7.jpg", "/12.jpg"],
    description:
      "High-quality tobacco stems separated during the threshing process, perfect for industrial applications and specialized tobacco products. Processed to meet industrial standards with consistent quality.",
    detailedDescription:
      "Our Tobacco Stems are a valuable by-product of our threshing operations, processed to provide consistent quality for industrial applications. These stems are carefully collected, cleaned, and processed to meet specific industrial requirements, offering an economical solution for various applications.",
    specifications: [
      { label: "Stem Size", value: "Uniform Grading" },
      { label: "Moisture Content", value: "10-12%" },
      { label: "Purity Level", value: "95%+" },
      { label: "Foreign Matter", value: "< 3%" },
      { label: "Processing", value: "Cleaned & Sorted" },
      { label: "Packaging", value: "250kg Bales / Custom" },
    ],
    features: [
      {
        icon: Package,
        title: "Industrial Grade",
        description: "Processed for specialized industrial applications",
      },
      {
        icon: HiArrowTrendingUp,
        title: "Cost Effective",
        description: "Economical solution for various applications",
      },
      {
        icon: SiFsecure,
        title: "Quality Controlled",
        description: "Consistent processing and grading standards",
      },
      {
        icon: Truck,
        title: "Bulk Available",
        description: "Large volume orders welcomed",
      },
    ],
    applications: [
      "Reconstituted Tobacco Production",
      "Tobacco Extract Manufacturing",
      "Agricultural Fertilizer",
      "Bio-fuel Applications",
      "Industrial Processing",
    ],
    certifications: [
      "Quality Assured Processing",
      "Industrial Grade Certified",
      "Export Compliant",
      "Zimbabwe Tobacco Board Approved",
    ],
    benefits: [
      "Competitive bulk pricing",
      "Consistent supply availability",
      "Flexible packaging options",
      "Reliable quality standards",
      "Sustainable by-product utilization",
    ],
    gradient: "from-amber-800/90 to-orange-900/80",
  },
  "tobacco-fines": {
    id: "tobacco-fines",
    name: "Tobacco Fines",
    tagline: "Premium Fine-Grade Material for Specialized Uses",
    image: "/fine.png",
    gallery: ["/fine.png", "/3.jpg", "/7.jpg", "/12.jpg"],
    description:
      "Premium fine-grade tobacco particles perfect for specialized manufacturing applications. Carefully collected and processed to maintain quality standards for various industrial and commercial uses.",
    detailedDescription:
      "Our Tobacco Fines represent fine-grade tobacco particles collected during processing operations. These materials are carefully handled, cleaned, and graded to provide consistent quality for manufacturers requiring fine-particle tobacco for specialized applications. Each batch is quality tested to ensure it meets specific requirements.",
    specifications: [
      { label: "Particle Size", value: "Fine Grade (< 2mm)" },
      { label: "Moisture Content", value: "11-13%" },
      { label: "Purity Level", value: "96%+" },
      { label: "Foreign Matter", value: "< 2%" },
      { label: "Processing", value: "Cleaned & Graded" },
      { label: "Packaging", value: "200kg Bales / Custom" },
    ],
    features: [
      {
        icon: Target,
        title: "Specialized Grade",
        description: "Perfect for specific manufacturing requirements",
      },
      {
        icon: BarChart3,
        title: "Quality Controlled",
        description: "Consistent particle size distribution",
      },
      {
        icon: GiWorld,
        title: "Export Quality",
        description: "Meets international processing standards",
      },
      {
        icon: Box,
        title: "Custom Packaging",
        description: "Flexible packaging solutions available",
      },
    ],
    applications: [
      "Reconstituted Sheet Production",
      "Tobacco Extract Manufacturing",
      "Specialty Tobacco Products",
      "Research & Development",
      "Industrial Applications",
    ],
    certifications: [
      "Quality Management System Certified",
      "Processing Standards Compliant",
      "Export Approved",
      "Zimbabwe Tobacco Board Certified",
    ],
    benefits: [
      "Consistent fine-grade particle size",
      "Excellent for specialized blending",
      "Competitive pricing structure",
      "Reliable supply chain",
      "Technical support available",
    ],
    gradient: "from-yellow-900/90 to-amber-900/80",
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData[productId];
  const [activeImage, setActiveImage] = useState(0);
  const [showInquiry, setShowInquiry] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Get related products (exclude current product)
  const relatedProducts = Object.values(productsData)
    .filter((p) => p.id !== productId)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="gellix-font text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h2>
          <Link
            to="/"
            className="gellix-font text-green-600 hover:text-green-700 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAction = (action) => {
    const productName = encodeURIComponent(product.name);
    if (action === "call") {
      window.location.href = "tel:+263783411889";
    } else if (action === "email") {
      window.location.href = `mailto:info@sacmarleaf.co.zw?subject=Inquiry about ${productName}`;
    } else if (action === "whatsapp") {
      window.location.href = `https://wa.me/263783411889?text=Hello%20Sacmar%20Leaf%2C%20I%20would%20like%20to%20inquire%20about%20${productName}.`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden pt-30">
        <div className="absolute inset-0">
          <LazyImage
            src={product.image}
            alt={product.name}
            className="absolute inset-0"
            priority={true}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
          />
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={() => navigate(-1)}
            className="gellix-font flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-sm hover:bg-white/20 transition-all duration-300 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center text-white z-10">
          <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-sm mb-4">
                <span className="gellix-font text-green-300 font-semibold tracking-wider text-sm">
                  PREMIUM TOBACCO PRODUCT
                </span>
              </div>

              <h1 className="gellix-font text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                {product.name}
              </h1>
              <p className="gellix-font text-xl md:text-2xl drop-shadow-lg mb-8 text-green-300">
                {product.tagline}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowInquiry(true)}
                  className="gellix-font bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-sm font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Quote
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={() => handleAction("whatsapp")}
                  className="gellix-font bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-sm font-semibold border-2 border-white/30 flex items-center gap-2 transition-all duration-300"
                >
                  <IoLogoWhatsapp className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-center"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full" />
            </div>
            <p className="gellix-font text-xs">Scroll for details</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl mb-4 h-96">
                <img
                  src={product.gallery[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative rounded-sm overflow-hidden h-24 transition-all duration-300 ${
                      activeImage === index
                        ? "ring-4 ring-green-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-sm">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                  <p className="gellix-font text-sm text-gray-600 mb-1">
                    Quality
                  </p>
                  <p className="gellix-font text-lg font-bold text-gray-900">
                    Export Grade
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-sm">
                  <GiWorld className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="gellix-font text-sm text-gray-600 mb-1">
                    Markets
                  </p>
                  <p className="gellix-font text-lg font-bold text-gray-900">
                    15+ Countries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Description */}
            <div>
              <h2 className="gellix-font text-3xl font-bold text-gray-900 mb-4">
                Product Overview
              </h2>
              <p className="gellix-font text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="gellix-font text-gray-600 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="gellix-font text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <feature.icon className="w-10 h-10 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="gellix-font text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="gellix-font text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-sm border-l-4 border-green-500">
              <h3 className="gellix-font text-xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleAction("call")}
                  className="gellix-font flex items-center gap-2 bg-white hover:bg-green-50 text-gray-900 px-6 py-3 rounded-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Phone className="w-4 h-4 text-green-600" />
                  Call Us
                </button>
                <button
                  onClick={() => handleAction("email")}
                  className="gellix-font flex items-center gap-2 bg-white hover:bg-blue-50 text-gray-900 px-6 py-3 rounded-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  Email
                </button>
                <button
                  onClick={() => handleAction("whatsapp")}
                  className="gellix-font flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <IoLogoWhatsapp className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-sm p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-green-400" />
              <h2 className="gellix-font text-3xl font-bold">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-sm hover:bg-white/10 transition-all duration-300"
                >
                  <p className="gellix-font text-sm text-gray-400 mb-2">
                    {spec.label}
                  </p>
                  <p className="gellix-font text-xl font-bold text-white">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Applications & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-600" />
              <h3 className="gellix-font text-2xl font-bold text-gray-900">
                Applications
              </h3>
            </div>
            <ul className="space-y-3">
              {product.applications.map((app, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="gellix-font text-gray-700">{app}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <LiaAwardSolid className="w-8 h-8 text-blue-600" />
              <h3 className="gellix-font text-2xl font-bold text-gray-900">
                Key Benefits
              </h3>
            </div>
            <ul className="space-y-3">
              {product.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="gellix-font text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="gellix-font text-3xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="gellix-font text-gray-600 max-w-2xl mx-auto">
              Our products meet the highest international quality and safety
              standards
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-gray-200 p-6 rounded-sm text-center hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <SiFsecure className="w-8 h-8 text-white" />
                </div>
                <p className="gellix-font text-sm font-semibold text-gray-700">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="gellix-font text-3xl font-bold text-gray-900 mb-4">
                Related Products
              </h2>
              <p className="gellix-font text-gray-600">
                Explore our other premium tobacco products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="relative rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="gellix-font text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="gellix-font text-gray-200 text-sm mb-4">
                        {relatedProduct.description.slice(0, 100)}...
                      </p>

                      <div className="gellix-font flex items-center text-green-400 font-semibold group-hover:gap-2 transition-all duration-300">
                        View Details
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-sm p-12 text-center text-white"
        >
          <h2 className="gellix-font text-3xl md:text-4xl font-bold mb-4">
            Ready to Order {product.name}?
          </h2>
          <p className="gellix-font text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for pricing, availability, and custom packaging
            solutions
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowInquiry(true)}
              className="gellix-font bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-sm font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
            <Link
              to="/contact"
              className="gellix-font bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-sm font-semibold border-2 border-white/30 flex items-center gap-2 transition-all duration-300"
            >
              Contact Sales Team
              <Phone className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowInquiry(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-sm max-w-lg w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="gellix-font text-2xl font-bold text-gray-900 mb-4">
                Request Quote for {product.name}
              </h3>
              <p className="gellix-font text-gray-600 mb-6">
                Choose your preferred contact method:
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleAction("whatsapp");
                    setShowInquiry(false);
                  }}
                  className="gellix-font w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-sm font-semibold transition-all duration-300"
                >
                  <IoLogoWhatsapp className="w-6 h-6" />
                  WhatsApp Inquiry
                </button>

                <button
                  onClick={() => {
                    handleAction("email");
                    setShowInquiry(false);
                  }}
                  className="gellix-font w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-sm font-semibold transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                  Email Inquiry
                </button>

                <button
                  onClick={() => {
                    handleAction("call");
                    setShowInquiry(false);
                  }}
                  className="gellix-font w-full flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-sm font-semibold transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  Call Us
                </button>
              </div>

              <button
                onClick={() => setShowInquiry(false)}
                className="gellix-font w-full mt-4 text-gray-500 hover:text-gray-700 py-2 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleAction("whatsapp")}
          className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <IoLogoWhatsapp className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;