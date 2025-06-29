import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="layout">
            <main className="main app-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="app-content"
                    >
                        <div className="theme-toggle-container">
                            <button
                                className="theme-toggle-button"
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <FaSun /> : <FaMoon />}
                            </button>
                        </div>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
