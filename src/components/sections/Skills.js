import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaFigma,
    FaCode,
    FaLaptopCode,
    FaMobile,
    FaServer,
    FaTools,
    FaBrain,
    FaUsers,
} from "react-icons/fa";

const Skills = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    // State for active tab
    const [activeTab, setActiveTab] = useState("frontend");

    // Sample skills data - replace with your own
    const skillsData = {
        frontend: [
            { name: "React", icon: <FaReact />, level: 90 },
            { name: "JavaScript", icon: <FaJs />, level: 85 },
            { name: "HTML5", icon: <FaHtml5 />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
            { name: "TypeScript", icon: <FaCode />, level: 80 },
            { name: "UI/UX Design", icon: <FaFigma />, level: 75 },
        ],
        backend: [
            { name: "Node.js", icon: <FaNodeJs />, level: 80 },
            { name: "SQL/NoSQL", icon: <FaDatabase />, level: 75 },
            { name: "GraphQL", icon: <FaCode />, level: 70 },
            { name: "RESTful APIs", icon: <FaServer />, level: 85 },
            { name: "Express.js", icon: <FaNodeJs />, level: 80 },
            { name: "MongoDB", icon: <FaDatabase />, level: 75 },
        ],
        devops: [
            { name: "Git", icon: <FaGitAlt />, level: 85 },
            { name: "Docker", icon: <FaDocker />, level: 70 },
            { name: "AWS", icon: <FaAws />, level: 65 },
            { name: "CI/CD", icon: <FaTools />, level: 75 },
            { name: "Linux", icon: <FaCode />, level: 80 },
            { name: "Nginx", icon: <FaServer />, level: 70 },
        ],
        mobile: [
            { name: "React Native", icon: <FaReact />, level: 75 },
            { name: "iOS", icon: <FaMobile />, level: 65 },
            { name: "Android", icon: <FaMobile />, level: 65 },
            { name: "Flutter", icon: <FaMobile />, level: 60 },
            { name: "Mobile UI/UX", icon: <FaFigma />, level: 80 },
            { name: "Responsive Design", icon: <FaLaptopCode />, level: 90 },
        ],
        soft: [
            { name: "Problem Solving", icon: <FaBrain />, level: 90 },
            { name: "Communication", icon: <FaUsers />, level: 85 },
            { name: "Teamwork", icon: <FaUsers />, level: 90 },
            { name: "Time Management", icon: <FaTools />, level: 80 },
            { name: "Leadership", icon: <FaUsers />, level: 75 },
            { name: "Adaptability", icon: <FaBrain />, level: 85 },
        ],
    };

    // Tabs configuration
    const tabs = [
        { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
        { id: "backend", label: "Backend", icon: <FaServer /> },
        { id: "devops", label: "DevOps", icon: <FaTools /> },
        { id: "mobile", label: "Mobile", icon: <FaMobile /> },
        { id: "soft", label: "Soft Skills", icon: <FaBrain /> },
    ];

    // Component for each skill item with intersection observer for animations
    const SkillItem = ({ skill }) => {
        const [ref, inView] = useInView({
            threshold: 0.1,
            triggerOnce: true,
        });

        return (
            <motion.div
                ref={ref}
                className="skills__item glass-card"
                variants={itemVariants}
            >
                {skill.icon && <div className="skills__icon">{skill.icon}</div>}
                <div className="skills__info">
                    <h4 className="skills__name">{skill.name}</h4>
                    <div className="skills__progress-container">
                        <motion.div
                            className="skills__progress-bar"
                            initial={{ width: 0 }}
                            animate={
                                inView
                                    ? { width: `${skill.level}%` }
                                    : { width: 0 }
                            }
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <span className="skills__level">{skill.level}%</span>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.div
                    className="section__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section__title">Skills</h2>
                    <p className="section__subtitle">
                        My technical and professional abilities
                    </p>
                </motion.div>

                <div className="skills__container">
                    {/* Tabs Navigation */}
                    <div className="skills__tabs tabs">
                        <div className="tabs__nav">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    className={`tabs__button ${
                                        activeTab === tab.id ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="tabs__button-icon">
                                        {tab.icon}
                                    </span>
                                    <span className="tabs__button-text">
                                        {tab.label}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="tabs__content">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    className={`tabs__panel active`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="skills__grid"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {skillsData[activeTab].map(
                                            (skill, index) => (
                                                <SkillItem
                                                    key={index}
                                                    skill={skill}
                                                />
                                            )
                                        )}
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
