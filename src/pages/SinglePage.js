import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience, {
    ExperienceOverview,
} from "../components/sections/Experience";
import Education, { EducationOverview } from "../components/sections/Education";
import Leadership, {
    LeadershipOverview,
} from "../components/sections/Leadership";
import Volunteering, {
    VolunteeringOverview,
} from "../components/sections/Volunteering";
import ExtraCurricular, {
    ExtraCurricularOverview,
} from "../components/sections/ExtraCurricular";
import Contact from "../components/sections/Contact";
import CollapsibleSection from "../components/layout/CollapsibleSection";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaUser,
    FaCode,
    FaBriefcase,
    FaGraduationCap,
    FaAward,
    FaHandsHelping,
    FaRunning,
    FaAddressCard,
} from "react-icons/fa";
import { profile } from "../constants/profile";
import { sections } from "../constants/sections";

function isInViewport(sectionId) {
    const element = document.getElementById(sectionId);
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

const SinglePage = () => {
    const [activeSection, setActiveSection] = useState("intro");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
    const [mobileNavItems, setMobileNavItems] = useState([]);

    // Handle window resize
    useEffect(() => {
        const mobileNavSections = [
            "intro",
            "experience",
            "education",
            "leadership",
            "extracurricular",
        ];
        setMobileNavItems(
            sections.filter((section) =>
                mobileNavSections.includes(section.name)
            )
        );

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        const handleScroll = () => {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (isInViewport(section.name)) {
                    setActiveSection(section.name);
                    break;
                }
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle section navigation
    const scrollToSection = (sectionId, offset = 20) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);

        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "instant",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="app-layout"
        >
            {/* Sidebar / Profile Section */}
            <div className="app-layout__sidebar">
                <div className="app-layout__profile glass-card">
                    <div className="app-layout__profile-image">
                        <img src={profile.profilePic} alt="Profile" />
                    </div>
                    <h1 className="app-layout__profile-name">{profile.name}</h1>
                    <p className="app-layout__profile-title">
                        {profile.position}
                    </p>

                    <div className="app-layout__profile-social">
                        {profile.socialLinks.map((item) => (
                            <a
                                id={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <nav className="app-layout__nav">
                        {sections.map((item) => (
                            <a
                                id={item.id}
                                href={`#${item.name}`}
                                className={`app-layout__nav-item ${
                                    activeSection === item.name ? "active" : ""
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.name);
                                }}
                            >
                                {item.icon} {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>

            {/* Main Content */}
            <div className="app-layout__main">
                {/* Intro Section */}
                <section id="main">
                    <CollapsibleSection
                        title="About Me"
                        subtitle="Senior Software Engineer with experience in developing secure, scalable fintech solutions and contributing to team leadership and technical delivery."
                        icon={FaUser}
                        id="intro"
                        defaultExpanded={isMobile? false : true}
                    >
                        <div className="about-hero__grid">
                            <div className="about-hero__text">
                                <p>
                                    I am a Senior Software Engineer with
                                    expertise in designing and developing
                                    scalable solutions in the financial
                                    technology space. Currently, at Visa Inc., I
                                    lead a team of 6 developers, driving the
                                    development of critical features for
                                    Authorize.NET, including Accepting Payments,
                                    Payment Links, and Transaction Security
                                    Settings.
                                </p>
                                <p>
                                    I have experience in full-stack
                                    development using technologies like React,
                                    Node.js, Vert.x, and SpringBoot, with a
                                    strong emphasis on building secure, scalable
                                    systems. I am also familiar with DevOps,
                                    deploying applications on cloud platforms
                                    like AWS and Azure. My work has spanned both
                                    frontend and backend, ensuring end-to-end
                                    delivery of high-quality, secure
                                    applications.
                                </p>
                                <p>
                                    I  have leadership experience beyond my
                                    engineering role, having organized
                                    large-scale events such as HackVerse, a
                                    24-hour nationwide hackathon, and led
                                    recruitment and development efforts as the
                                    Website and Media Head at the Institution of
                                    Engineers, NITK.
                                </p>
                            </div>
                        </div>
                    </CollapsibleSection>

                    {/* Experience Section */}
                    <CollapsibleSection
                        title="Experience"
                        subtitle="My professional journey"
                        icon={FaBriefcase}
                        id="experience"
                        overview={<ExperienceOverview />}
                    >
                        <Experience />
                    </CollapsibleSection>

                    {/* Education Section */}
                    <CollapsibleSection
                        title="Education"
                        subtitle="My academic background"
                        icon={FaGraduationCap}
                        id="education"
                        overview={<EducationOverview />}
                    >
                        <Education />
                    </CollapsibleSection>

                    {/* Leadership Section */}
                    <CollapsibleSection
                        title="Leadership"
                        subtitle="Roles where I've led teams and initiatives"
                        icon={FaAward}
                        id="leadership"
                        overview={<LeadershipOverview />}
                    >
                        <Leadership />
                    </CollapsibleSection>

                    {/* Extra Curricular Section */}
                    <CollapsibleSection
                        title="Extra Curricular"
                        subtitle="Activities outside of work"
                        icon={FaRunning}
                        id="extracurricular"
                        overview={<ExtraCurricularOverview />}
                    >
                        <ExtraCurricular />
                    </CollapsibleSection>

                    {/* Volunteering Section */}
                    <CollapsibleSection
                        title="Volunteering"
                        subtitle="Giving back to the community"
                        icon={FaHandsHelping}
                        id="volunteering"
                        overview={<VolunteeringOverview />}
                    >
                        <Volunteering />
                    </CollapsibleSection>

                    {/* Skills Section */}
                    {/* <CollapsibleSection
                        title="Skills"
                        subtitle="Technologies and tools I work with"
                        icon={FaCode}
                        id="skills"
                    >
                        <Skills />
                    </CollapsibleSection> */}

                    {/* Projects Section */}
                    {/* <CollapsibleSection
                        title="Projects"
                        subtitle="Showcase of my work"
                        icon={FaCode}
                        id="projects"
                    >
                        <div className="projects-hero__text">
                            <p>
                                Welcome to my project portfolio! Here you'll
                                find a collection of my work that demonstrates
                                my skills, problem-solving approach, and passion
                                for creating meaningful digital experiences.
                                Each project represents unique challenges and
                                solutions that I've developed throughout my
                                career.
                            </p>
                        </div>
                        <Projects />
                    </CollapsibleSection> */}

                    {/* Contact Section */}
                    {/* <CollapsibleSection
                        title="Contact"
                        subtitle="Get in touch with me"
                        icon={FaAddressCard}
                        id="contact"
                    >
                        <div className="contact-hero__text">
                            <p>
                                I'm always interested in hearing about new
                                projects, opportunities, or just connecting with
                                fellow developers and designers. Whether you
                                have a question, want to collaborate, or simply
                                want to say hello, feel free to reach out using
                                the form below or through my social media
                                channels.
                            </p>
                        </div>
                        <Contact />

                        <div className="connect">
                            <h3>Let's Connect</h3>
                            <p>
                                Find me on social media and professional
                                networks
                            </p>

                            <div className="connect__grid">
                                <motion.a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="connect__item glass-card"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="connect__icon">
                                        <FaLinkedin />
                                    </div>
                                    <h3>LinkedIn</h3>
                                    <p>Let's connect professionally</p>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="connect__item glass-card"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="connect__icon">
                                        <FaGithub />
                                    </div>
                                    <h3>GitHub</h3>
                                    <p>Check out my code repositories</p>
                                </motion.a>

                                <motion.a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="connect__item glass-card"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="connect__icon">
                                        <FaTwitter />
                                    </div>
                                    <h3>Twitter</h3>
                                    <p>Follow me for updates and thoughts</p>
                                </motion.a>

                                <motion.a
                                    href="mailto:your.email@example.com"
                                    className="connect__item glass-card"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="connect__icon">
                                        <FaEnvelope />
                                    </div>
                                    <h3>Email</h3>
                                    <p>your.email@example.com</p>
                                </motion.a>
                            </div>
                        </div>
                    </CollapsibleSection> */}
                </section>
            </div>

            {/* Mobile Navigation */}
            {isMobile && (
                <nav className="mobile-app-nav">
                    {mobileNavItems.map((section) => (
                        <a
                            href={`#${section.name}`}
                            className={`mobile-app-nav__item ${
                                activeSection === section.name ? "active" : ""
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(section.name);
                            }}
                        >
                            {section.icon}
                        </a>
                    ))}
                </nav>
            )}
        </motion.div>
    );
};

export default SinglePage;
