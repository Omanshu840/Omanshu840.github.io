import React from "react";
import { motion } from "framer-motion";
import { activitiesData } from "../../constants/extracurricular";

const ExtraCurricular = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    // Component for each activity item with intersection observer for animations
    const ActivityItem = ({ item }) => {

        return (
            <motion.div
                className="extracurricular__item glass-card"
                variants={itemVariants}
            >
                <div className="extracurricular__icon">{item.icon}</div>

                <div className="extracurricular__content">
                    <h3 className="extracurricular__title">{item.title}</h3>
                    <p className="extracurricular__description">
                        {item.description}
                    </p>

                    {item.achievements && item.achievements.length > 0 && (
                        <div className="extracurricular__achievements">
                            <h5>Highlights:</h5>
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
                className="extracurricular__grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {activitiesData.map((item) => (
                    <ActivityItem key={item.id} item={item} />
                ))}
            </motion.div>
        </>
    );
};

// ExtraCurricular overview component for collapsed state
const ExtraCurricularOverview = () => {
    return (
        <ul className="extracurricular-overview">
            {activitiesData.map((item) => (
                <li key={item.id}>
                    <strong>{item.title}</strong>
                </li>
            ))}
        </ul>
    );
};

// Export both the main component and the overview
export { ExtraCurricularOverview };
export default ExtraCurricular;
