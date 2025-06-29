import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { leadershipData } from "../../constants/leadership";


const Leadership = () => {
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

    // Component for each leadership item with intersection observer for animations
    const LeadershipItem = ({ item }) => {
        const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true,
        });

        return (
            <motion.div
                ref={ref}
                className="leadership__item glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="leadership__icon">
                    <FaUsers />
                </div>

                <div className="leadership__content">
                    <h3 className="leadership__position">{item.position}</h3>
                    <h4 className="leadership__organization">
                        {item.organization}
                    </h4>

                    <div className="leadership__meta">
                        <div className="leadership__meta-item">
                            <FaCalendarAlt />
                            <span>{item.duration}</span>
                        </div>
                        <div className="leadership__meta-item">
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <p className="leadership__description">
                        {item.description}
                    </p>

                    {item.achievements && item.achievements.length > 0 && (
                        <div className="leadership__achievements">
                            <h5>Key Achievements:</h5>
                            <ul>
                                {item.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
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
                className="leadership__list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {leadershipData.map((item) => (
                    <LeadershipItem key={item.id} item={item} />
                ))}
            </motion.div>
        </>
    );
};

// Leadership overview component for collapsed state
const LeadershipOverview = () => {
    return (
        <ul className="leadership-overview">
            {leadershipData.map((item) => (
                <li key={item.id}>
                    <div><strong>{item.position}</strong></div>
                    <div>{item.organization}</div>
                </li>
            ))}
        </ul>
    );
};

// Export both the main component and the overview
export { LeadershipOverview };
export default Leadership;
