import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaSearch,
    FaCode,
    FaLaptopCode,
    FaServer,
    FaLayerGroup,
    FaStar,
    FaTimes,
} from "react-icons/fa";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

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

    // Sample projects data - replace with your own
    const projectsData = [
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
            image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
            category: "fullstack",
            github: "https://github.com/yourusername/ecommerce-project",
            demo: "https://ecommerce-project.example.com",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "A productivity application for managing tasks, projects, and deadlines with drag-and-drop functionality.",
            image: "https://via.placeholder.com/600x400?text=Task+Management+App",
            technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
            category: "frontend",
            github: "https://github.com/yourusername/task-management",
            demo: "https://task-app.example.com",
            featured: true,
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description:
                "A weather application that displays current conditions and forecasts based on user location or search.",
            image: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
            technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
            category: "frontend",
            github: "https://github.com/yourusername/weather-dashboard",
            demo: "https://weather-app.example.com",
            featured: false,
        },
        {
            id: 4,
            title: "Blog API",
            description:
                "A RESTful API for a blog platform with authentication, post creation, comments, and user profiles.",
            image: "https://via.placeholder.com/600x400?text=Blog+API",
            technologies: ["Node.js", "Express", "MongoDB", "JWT"],
            category: "backend",
            github: "https://github.com/yourusername/blog-api",
            demo: null,
            featured: false,
        },
        {
            id: 5,
            title: "Portfolio Website",
            description:
                "A personal portfolio website showcasing projects, skills, and professional experience.",
            image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
            technologies: ["React", "SCSS", "Framer Motion"],
            category: "frontend",
            github: "https://github.com/yourusername/portfolio",
            demo: "https://yourportfolio.example.com",
            featured: true,
        },
        {
            id: 6,
            title: "Chat Application",
            description:
                "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
            image: "https://via.placeholder.com/600x400?text=Chat+Application",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            category: "fullstack",
            github: "https://github.com/yourusername/chat-app",
            demo: "https://chat-app.example.com",
            featured: false,
        },
    ];

    // Filter categories
    const categories = [
        { id: "all", name: "All Projects", icon: <FaLayerGroup /> },
        { id: "frontend", name: "Frontend", icon: <FaLaptopCode /> },
        { id: "backend", name: "Backend", icon: <FaServer /> },
        { id: "fullstack", name: "Full Stack", icon: <FaCode /> },
        { id: "featured", name: "Featured", icon: <FaStar /> },
    ];

    // Animation for filtered projects
    useEffect(() => {
        // Reset animation when filter changes
        setFilteredProjects([]);

        // Small delay to allow animation to reset
        const timer = setTimeout(() => {
            const newFilteredProjects = projectsData.filter((project) => {
                const matchesCategory =
                    filter === "all" ||
                    (filter === "featured" && project.featured) ||
                    project.category === filter;

                const matchesSearch =
                    project.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    project.technologies.some((tech) =>
                        tech.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                return matchesCategory && matchesSearch;
            });

            setFilteredProjects(newFilteredProjects);
        }, 100);

        return () => clearTimeout(timer);
    }, [filter, searchTerm, projectsData]);

    // State for filtered projects with animation
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    // Clear search term
    const clearSearch = () => {
        setSearchTerm("");
    };

    // Component for each project item with intersection observer for animations
    const ProjectItem = ({ project }) => {
        const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true,
        });

        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                ref={ref}
                className="projects__item glass-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="projects__image-container">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="projects__image"
                    />

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                className="projects__overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="projects__links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="projects__link"
                                            aria-label="View GitHub repository"
                                        >
                                            <FaGithub />
                                            <span>Code</span>
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="projects__link"
                                            aria-label="View live demo"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="projects__content">
                    <h3 className="projects__title">{project.title}</h3>
                    <p className="projects__description">
                        {project.description}
                    </p>

                    <div className="projects__technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="projects__tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <motion.div
                    className="section__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section__title">Projects</h2>
                    <p className="section__subtitle">
                        A selection of my recent work and personal projects
                    </p>
                </motion.div>

                <div className="projects__filters">
                    <div className="projects__categories">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                className={`projects__filter-btn ${
                                    filter === category.id ? "active" : ""
                                }`}
                                onClick={() => setFilter(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="projects__filter-icon">
                                    {category.icon}
                                </span>
                                <span className="projects__filter-text">
                                    {category.name}
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    <div className="projects__search">
                        <FaSearch className="projects__search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="projects__search-input"
                        />
                        {searchTerm && (
                            <motion.button
                                className="projects__search-clear"
                                onClick={clearSearch}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTimes />
                            </motion.button>
                        )}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter + searchTerm}
                        className="projects__grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectItem
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : (
                            <motion.div
                                className="projects__no-results glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaSearch
                                    size={40}
                                    style={{
                                        opacity: 0.5,
                                        marginBottom: "1rem",
                                    }}
                                />
                                <p>No projects found matching your criteria.</p>
                                <button
                                    className="btn btn--primary"
                                    onClick={() => {
                                        setFilter("all");
                                        setSearchTerm("");
                                    }}
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
