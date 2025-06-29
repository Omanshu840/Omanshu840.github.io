import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { volunteeringData } from "../../constants/volunteering";

const Volunteering = () => {
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

    // Component for each volunteering item with intersection observer for animations
    const VolunteeringItem = ({ item }) => {
        const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true,
        });

        return (
            <motion.div
                ref={ref}
                className="volunteering__item glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="volunteering__icon">
                    <FaHandsHelping />
                </div>

                <div className="volunteering__content">
                    <h3 className="volunteering__role">{item.role}</h3>
                    <h4 className="volunteering__organization">
                        {item.organization}
                    </h4>

                    <div className="volunteering__meta">
                        <div className="volunteering__meta-item">
                            <FaCalendarAlt />
                            <span>{item.duration}</span>
                        </div>
                        <div className="volunteering__meta-item">
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <p className="volunteering__description">
                        {item.description}
                    </p>

                    {item.impact && item.impact.length > 0 && (
                        <div className="volunteering__impact">
                            <h5>Impact:</h5>
                            <ul>
                                {item.impact.map((impact, index) => (
                                    <li key={index}>{impact}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <motion.div
                className="volunteering__list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {volunteeringData.map((item) => (
                    <VolunteeringItem key={item.id} item={item} />
                ))}
            </motion.div>
        </>
    );
};

// Volunteering overview component for collapsed state
const VolunteeringOverview = () => {
    return (
        <ul className="volunteering-overview">
            {volunteeringData.map((item) => (
                <li key={item.id}>
                    <strong>{item.role}</strong> at {item.organization}
                </li>
            ))}
        </ul>
    );
};

// Export both the main component and the overview
export { VolunteeringOverview };
export default Volunteering;
