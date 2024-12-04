import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Footer from "./Pages/Footer.jsx";
import Layout from "./Pages/Layout.js";
import Product from "./Pages/Product.js";
import Contact from "./Pages/Contact.js";
import Header from "./Pages/Header.js";
import DigitalTransformation from "./Services/DigitalTransformation.js";
import AI from "./Services/AI.js";
import CustomSolution from "./Services/CustomSolution.js";
import DataAnalytics from "./Services/DataAnalytics.js";
import WebScraping from "./Services/WebScraping.js";
import Dashboard from "./Services/Dashboard.js";
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const App = () => {
  const location = useLocation(); // Track current route location

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <AnimatePresence mode="wait">
          {/* AnimatePresence ensures only one component is visible at a time */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Layout />
                </motion.div>
              }
            />
            <Route
              path="/home"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Services />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Product />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/services/digital"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <DigitalTransformation/>
                </motion.div>
              }
            />
            <Route
              path="/services/ai"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <AI/>
                </motion.div>
              }
            />
            <Route
              path="/services/customsolution"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <CustomSolution/>
                </motion.div>
              }
            />
            <Route
              path="/services/data-analytics"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <DataAnalytics/>
                </motion.div>
              }
            />
            <Route
              path="/services/web-scraping"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <WebScraping/>
                </motion.div>
              }
            />
            <Route
              path="/services/dashboard"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                  transition={{ duration: 0.5 }}
                >
                  <Dashboard/>
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default App;
