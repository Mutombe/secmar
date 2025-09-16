import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Toaster, toast } from "sonner";
import Navigation from "./components/nav";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import ProductsPage from "./components/products";
import ServicesPage from "./components/service";
import QualityPage from "./components/quality";
import ContactPage from "./components/contact";
import Footer from "./components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { preloadImages } from "./utils";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-green-50 to-yellow-50 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Actual Logo Image */}
          <img
            src="/logo.png"
            alt="Sacmar Leaf Tobacco Logo"
            className="h-32 w-auto object-contain"
          />

          {/* Glow effect behind logo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-2xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-green-400 to-yellow-400 opacity-30 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-1">
            {[0, 0.2, 0.4].map((delay, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                className="w-2.5 h-2.5 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-600 text-sm mt-4 font-medium tracking-wider"
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  const imageList = [
    "/tob.jpg",
    "/7.jpg",
    "/3.jpg",
    "/12.jpg",
    "/l1.jpg",
    "/l2.jpeg",
    "/l3.jpeg",
  ];

  useEffect(() => {
    preloadImages(imageList).then(() => {
      console.log("All images preloaded!");
    });
  }, []);
  return (
    <div className="App">
      <style jsx>{`
        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
            format("opentype");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
            format("opentype");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
            format("opentype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        /* Century Gothic Font Face */
        @font-face {
          font-family: "Century Gothic Custom";
          src: url("./fonts/weezerfont.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gellix";
          src: url("./fonts/Gellix-Light.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Gellix";
          src: url("./fonts/Gellix-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        /* Font utility classes */
        .gravesend-sans {
          font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
            Verdana, sans-serif;
        }

        .roboto-font {
          font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
        }

        .century-gothic {
          font-family: "Century Gothic Custom", "Century Gothic", "Arial",
            sans-serif;
        }

        .gellix-font {
          font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <ScrollToTop />
      <Navigation />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </div>
  );
};

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Initial app loading
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {initialLoad ? (
          <LoadingScreen key="initial-loading" />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "linear-gradient(135deg, #16a34a, #eab308)",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            />
            <AppContent />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
