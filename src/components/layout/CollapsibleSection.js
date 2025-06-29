import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CollapsibleSection = ({
    title,
    subtitle,
    children,
    id,
    icon: Icon,
    defaultExpanded = false,
    className = "",
    overview = null,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`collapsible-section ${className}`} id={id}>
            <motion.div
                className={`collapsible-section__header ${
                    isExpanded ? "expanded" : ""
                }`}
                onClick={toggleExpand}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <div className="collapsible-section__header-content">
                    {Icon && (
                        <div className="collapsible-section__icon">
                            <Icon />
                        </div>
                    )}
                    <div className="collapsible-section__title-container">
                        <h2 className="collapsible-section__title">{title}</h2>
                        {subtitle && (
                            <p className="collapsible-section__subtitle">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
                <div className="collapsible-section__toggle">
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {isExpanded ? (
                    <motion.div
                        key="content"
                        className="collapsible-section__content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="collapsible-section__content-inner">
                            {children}
                        </div>
                    </motion.div>
                ) : (
                    overview && (
                        <motion.div
                            key="overview"
                            className="collapsible-section__overview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={toggleExpand}
                        >
                            {overview}
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
                            <button
                                className="experience__toggle-btn"
                                onClick={toggleExpand}
                                aria-expanded={isExpanded}
                            >
                                <span>Show More</span>
                                <FaChevronDown />
                            </button>
                            </div>
                        </motion.div>
                    )
                )}
            </AnimatePresence>
        </div>
    );
};

export default CollapsibleSection;
