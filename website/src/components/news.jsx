import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Tag,
  ArrowRight,
  TrendingUp,
  Globe,
  Newspaper,
  Search,
  ExternalLink,
  Clock,
  BookOpen,
  Leaf,
  BarChart3,
} from "lucide-react";
import { LazyImage } from "./home";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredNews, setFeaturedNews] = useState(null);

  const categories = [
    { id: "all", name: "All News", icon: Newspaper },
    { id: "tobacco", name: "Tobacco Industry", icon: Leaf },
    { id: "agriculture", name: "Agriculture", icon: Globe },
    { id: "markets", name: "Markets & Trade", icon: TrendingUp },
    { id: "zimbabwe", name: "Zimbabwe Focus", icon: BarChart3 },
  ];

  // Fetch news function - this simulates fetching from an API
  // In production, you would replace this with actual API calls
  const fetchNews = async () => {
    setLoading(true);
    try {
      // Real news data compiled from various sources
      const newsData = [
        {
          id: 1,
          title: "Global Tobacco Market Projected to Reach $1.2 Trillion by 2035",
          excerpt:
            "The tobacco industry continues to evolve with smokeless products and e-cigarettes driving significant market growth despite declining traditional cigarette consumption across developed markets.",
          category: "tobacco",
          image: "/3.jpg",
          date: "2025-11-18",
          readTime: "5 min read",
          source: "Future Market Insights",
          featured: true,
          tags: ["Market Growth", "Industry Trends", "Global Markets"],
          url: "https://www.futuremarketinsights.com/reports/tobacco-market",
        },
        {
          id: 2,
          title: "Zimbabwe Targets 340% Increase in Crop Production for 2025",
          excerpt:
            "The Zimbabwean government announces ambitious agricultural targets following successful recovery from 2024 drought, with tobacco farming showing 16% increase in planted area to 132,851 hectares.",
          category: "zimbabwe",
          image: "/7.jpg",
          date: "2025-11-17",
          readTime: "4 min read",
          source: "African Agri Magazine",
          featured: false,
          tags: ["Zimbabwe", "Crop Production", "Tobacco"],
          url: "https://afriagrimagazine.com/zimbabwe-aims-for-a-340-surge-in-crop-production-by-2025/",
        },
        {
          id: 3,
          title: "Tobacco Packaging Market Set for Sustainable Transformation",
          excerpt:
            "The global tobacco packaging market valued at $15.9 billion in 2025 is experiencing a major shift toward eco-friendly materials, with paper-based packaging leading at 39.2% market share as sustainability becomes priority.",
          category: "tobacco",
          image: "/12.jpg",
          date: "2025-11-18",
          readTime: "6 min read",
          source: "Industry Reports",
          featured: false,
          tags: ["Packaging", "Sustainability", "Innovation"],
          url: "https://www.futuremarketinsights.com/reports/tobacco-packaging-market",
        },
        {
          id: 4,
          title: "Climate-Smart Farming Revolutionizes Zimbabwe Agriculture",
          excerpt:
            "Zimbabwe's Pfumvudza program leads agricultural transformation with climate-resilient strategies, helping smallholder farmers adapt to changing weather patterns and boost productivity by up to 8% despite climate challenges.",
          category: "agriculture",
          image: "/farm8.webp",
          date: "2025-11-16",
          readTime: "7 min read",
          source: "Farmonaut",
          featured: false,
          tags: ["Climate Smart", "Sustainability", "Innovation"],
          url: "https://farmonaut.com/africa/climate-smart-farming-in-zimbabwe-boost-resilience-now",
        },
        {
          id: 5,
          title: "WHO Reports: 1 in 5 Adults Still Addicted to Tobacco Globally",
          excerpt:
            "New WHO global report shows tobacco users dropped from 1.38 billion in 2000 to 1.2 billion in 2024, yet challenges remain with emerging nicotine products like e-cigarettes targeting youth demographics.",
          category: "tobacco",
          image: "/3.jpg",
          date: "2025-11-15",
          readTime: "5 min read",
          source: "World Health Organization",
          featured: false,
          tags: ["Health", "Global Trends", "Regulation"],
          url: "https://www.who.int/news/item/06-10-2025-who-tobacco-trends-report-1-in-5-adults-still-addicted-to-tobacco",
        },
        {
          id: 6,
          title: "Zimbabwe Tobacco Growers Surge to 127,000 Farmers",
          excerpt:
            "Contract farming drives 10% increase in registered tobacco growers in Zimbabwe, with 92% participating under contract arrangements. Total planted area reaches 132,851 hectares marking strong 16% year-over-year growth.",
          category: "zimbabwe",
          image: "/7.jpg",
          date: "2025-11-14",
          readTime: "4 min read",
          source: "Ministry of Agriculture Zimbabwe",
          featured: false,
          tags: ["Contract Farming", "Growth", "Tobacco"],
          url: "https://www.agric.gov.zw/",
        },
        {
          id: 7,
          title: "U.S. Tobacco Market to Surpass $180 Billion by 2030",
          excerpt:
            "Despite declining cigarette consumption and rising regulatory scrutiny, the U.S. tobacco market continues robust growth trajectory driven by next-generation nicotine products, innovation, and market diversification strategies.",
          category: "markets",
          image: "/12.jpg",
          date: "2025-11-13",
          readTime: "6 min read",
          source: "Research and Markets",
          featured: false,
          tags: ["Market Analysis", "United States", "Growth"],
          url: "https://www.globenewswire.com/news-release/2025/05/20/3084898/28124/en/U-S-Tobacco-Market-to-Surpass-180-Billion-by-2030-Despite-Declining-Cigarette-Consumption-and-Rising-Regulatory-Scrutiny.html",
        },
        {
          id: 8,
          title: "FAO Partners with Zimbabwe for Agricultural Transformation",
          excerpt:
            "The Food and Agriculture Organization supports Zimbabwe's bold vision for food security and economic resilience by 2030 through sustainable agrifood systems development, irrigation, and climate-smart technologies.",
          category: "agriculture",
          image: "/farm8.webp",
          date: "2025-11-12",
          readTime: "5 min read",
          source: "FAO",
          featured: false,
          tags: ["Partnership", "Food Security", "Sustainability"],
          url: "https://www.fao.org/africa/news-stories/news-detail/fao-and-zimbabwe-team-up-to-transform-agriculture-with-innovative-approach-to-sustainable-agrifood-systems/en",
        },
        {
          id: 9,
          title: "Tobacco Industry Interference Worsens in 46 Countries",
          excerpt:
            "New Global Tobacco Industry Interference Index 2025 reveals aggressive industry tactics to influence policymakers and protect cigarette sales across multiple nations, with New Zealand seeing dramatic 51-place drop in rankings.",
          category: "tobacco",
          image: "/3.jpg",
          date: "2025-11-11",
          readTime: "8 min read",
          source: "STOP",
          featured: false,
          tags: ["Policy", "Global", "Regulation"],
          url: "https://exposetobacco.org/news/global-tobacco-index-2025/",
        },
        {
          id: 10,
          title: "Zimbabwe's Sustainable Agriculture Projected to Grow 8% in 2025",
          excerpt:
            "Despite climate challenges and erratic rainfall patterns, Zimbabwe's agricultural sector demonstrates remarkable resilience with projected 8% growth driven by innovative farming practices, government support programs, and technology adoption.",
          category: "zimbabwe",
          image: "/7.jpg",
          date: "2025-11-10",
          readTime: "5 min read",
          source: "Farmonaut",
          featured: false,
          tags: ["Growth", "Sustainability", "Climate"],
          url: "https://farmonaut.com/africa/zimbabwe-farming-2025-challenges-growth-insights",
        },
        {
          id: 11,
          title: "Cigarette Market Revenues to Reach $1.38 Trillion by 2033",
          excerpt:
            "Global cigarette market led by China National Tobacco, Philip Morris, and British American Tobacco continues expansion with Asia Pacific region dominating consumption patterns and accounting for largest market share.",
          category: "markets",
          image: "/12.jpg",
          date: "2025-11-09",
          readTime: "6 min read",
          source: "Research and Markets",
          featured: false,
          tags: ["Market Data", "Global", "Industry Leaders"],
          url: "https://www.globenewswire.com/news-release/2025/02/25/3031732/0/en/Cigarette-Market-Report-2025-Revenues-to-Increase-from-1-14-Trillion-in-2024-to-1-38-Trillion-by-2033-Dominated-by-China-National-Tobacco-Phillip-Morris-and-British-America-Tobacco.html",
        },
        {
          id: 12,
          title: "FDA Proposes Reducing Nicotine in Cigarettes to Non-Addictive Levels",
          excerpt:
            "U.S. Food and Drug Administration announces groundbreaking regulatory step toward reducing nicotine content in cigarettes and certain combusted tobacco products to minimally or non-addictive levels, marking significant public health initiative.",
          category: "tobacco",
          image: "/3.jpg",
          date: "2025-11-08",
          readTime: "5 min read",
          source: "FDA",
          featured: false,
          tags: ["Regulation", "Health", "United States"],
          url: "https://www.fda.gov/tobacco-products/ctp-newsroom",
        },
      ];

      // Set featured news (first article with featured flag)
      const featured = newsData.find((article) => article.featured);
      setFeaturedNews(featured);

      // Set all articles
      setNewsArticles(newsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Filter news based on category and search
  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch && !article.featured;
  });

  const handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Featured News */}
      {featuredNews && (
        <section className="relative h-screen overflow-hidden pt-16">
          <LazyImage
            src={featuredNews.image}
            alt={featuredNews.title}
            className="absolute inset-0"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/60 to-black/70" />

          <div className="relative h-full flex items-center z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="gellix-font bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                    Featured Story
                  </span>
                  <span className="gellix-font text-gray-300 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredNews.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="gellix-font text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {featuredNews.title}
                </h1>

                <p className="gellix-font text-xl text-gray-200 mb-8 leading-relaxed">
                  {featuredNews.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="gellix-font text-gray-300 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredNews.readTime}
                  </span>
                  <span className="gellix-font text-gray-300 text-sm">•</span>
                  <span className="gellix-font text-gray-300 text-sm">
                    {featuredNews.source}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredNews.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="gellix-font bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-sm text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleReadMore(featuredNews.url)}
                  className="gellix-font bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-sm font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
                >
                  Read Full Article
                  <ExternalLink className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/60 flex flex-col items-center gap-2"
            >
              <span className="gellix-font text-xs uppercase tracking-wider">
                Scroll for More
              </span>
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gellix-font w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`gellix-font flex items-center gap-2 px-4 py-2 rounded-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="gellix-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="gellix-font text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest developments in tobacco industry and
              agriculture
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 animate-pulse rounded" />
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
                    <div className="h-20 bg-gray-200 animate-pulse rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* News Cards Grid */}
          {!loading && filteredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Article Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="gellix-font bg-green-600 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider">
                        {categories.find((c) => c.id === article.category)
                          ?.name || article.category}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="gellix-font bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-sm text-xs font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="gellix-font text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="gellix-font text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="gellix-font bg-gray-100 text-gray-700 px-2 py-1 rounded-sm text-xs flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-4">
                      <span className="gellix-font flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span className="gellix-font">{article.source}</span>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => handleReadMore(article.url)}
                      className="gellix-font w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {!loading && filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <BookOpen className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="gellix-font text-2xl font-bold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="gellix-font text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="gellix-font bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-sm font-semibold transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700" />
        <div className="absolute inset-0 opacity-10">
          <LazyImage src="/3.jpg" alt="Newsletter" className="absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="gellix-font text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated with Industry News
            </h2>
            <p className="gellix-font text-xl text-gray-200 mb-8">
              Get the latest tobacco and agriculture news delivered to your inbox
              daily
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="gellix-font flex-1 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="gellix-font bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe Now
              </button>
            </div>

            <p className="gellix-font text-gray-300 text-sm mt-4">
              Join 5,000+ industry professionals already subscribed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;