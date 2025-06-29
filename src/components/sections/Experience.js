import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";
import experience from "../../constants/experience";

const Experience = () => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Component for each experience item with intersection observer for animations
    const ExperienceItem = ({ item, isTimeline }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true,
        });

        const toggleExpand = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <motion.div
                ref={ref}
                className={`experience__item glass-card ${
                    isTimeline ? "timeline__item" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="experience__icon">
                    <FaBriefcase />
                </div>

                <div className="experience__content">
                    <h3 className="experience__position">{item.position}</h3>
                    <h4 className="experience__company">{item.company}</h4>

                    <div className="experience__meta">
                        <div className="experience__meta-item">
                            <FaCalendarAlt />
                            <span>{item.duration}</span>
                        </div>
                        <div className="experience__meta-item">
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <p className="experience__description">
                        {item.description}
                    </p>

                    <button
                        className="experience__toggle-btn"
                        onClick={toggleExpand}
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? (
                            <>
                                <span>Show Less</span>
                                <FaChevronUp />
                            </>
                        ) : (
                            <>
                                <span>Show More</span>
                                <FaChevronDown />
                            </>
                        )}
                    </button>

                    <AnimatePresence>
                        {isExpanded &&
                            item.responsibilities &&
                            item.responsibilities.length > 0 && (
                                <motion.div
                                    className="experience__responsibilities"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {item.responsibilities.map(
                                            (responsibility, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                    }}
                                                >
                                                    {responsibility}
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </motion.div>
                            )}
                    </AnimatePresence>
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key="list"
                    className="experience__list"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20 }}
                >
                    {experience.map((item) => (
                        <ExperienceItem
                            key={item.id}
                            item={item}
                            isTimeline={false}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

// Experience overview component for collapsed state
const ExperienceOverview = () => {
    return (
        <ul className="experience-overview">
            {experience.map((item) => (
                <li key={item.id}>
                    <div><strong>{item.position}</strong></div>
                    <div>{item.company} (
                    {item.duration})</div>
                </li>
            ))}
        </ul>
    );
};

// Export both the main component and the overview
export { ExperienceOverview };
export default Experience;
