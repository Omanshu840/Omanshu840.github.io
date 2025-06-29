import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { education } from "../../constants/education";

const Education = () => {
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

    // Component for each education item with intersection observer for animations
    const EducationItem = ({ item }) => {
        const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true,
        });

        return (
            <motion.div
                ref={ref}
                className="education__item glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="education__icon">
                    <FaGraduationCap />
                </div>

                <div className="education__content">
                    <h3 className="education__degree">{item.degree} in {item.course}</h3>
                    <h4 className="education__institution">
                        {item.institution}
                    </h4>

                    <div className="education__meta">
                        <div className="education__meta-item">
                            <FaCalendarAlt />
                            <span>{item.duration}</span>
                        </div>
                        <div className="education__meta-item">
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <p className="education__description">{item.gpa}</p>

                    {item.achievements && item.achievements.length > 0 && (
                        <div className="education__achievements">
                            <h5>Achievements:</h5>
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
                className="education__list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {education.map((item) => (
                    <EducationItem key={item.id} item={item} />
                ))}
            </motion.div>
        </>
    );
};

// Education overview component for collapsed state
const EducationOverview = () => {
    return (
        <ul className="education-overview">
            {education.map((item) => (
                <li key={item.id}>
                    <div> <strong>{item.degree} in {item.course}</strong></div>
                    <div>{item.institution}</div>
                    <div>{item.gpa}</div>
                </li>
            ))}
        </ul>
    );
};

// Export both the main component and the overview
export { EducationOverview };
export default Education;
