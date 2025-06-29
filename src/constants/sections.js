import { FaAddressCard, FaAward, FaBriefcase, FaCode, FaGraduationCap, FaHandsHelping, FaRunning, FaUser } from "react-icons/fa";

export const sections = [
    {
        id: 0,
        name: "intro",
        label: "About Me",
        icon: <FaUser />
    },
    {
        id: 1,
        name: "experience",
        label: "Experience",
        icon: <FaBriefcase />
    },
    {
        id: 2,
        name: "education",
        label: "Education",
        icon: <FaGraduationCap />
    },
    {
        id: 3,
        name: "leadership",
        label: "Leadership",
        icon: <FaAward />
    },
    {
        id: 4,
        name: "extracurricular",
        label: "Extra Curricular",
        icon: <FaRunning />
    },
    {
        id: 5,
        name: "volunteering",
        label: "Volunteering",
        icon: <FaHandsHelping />
    },
    // {
    //     id: 6,
    //     name: "skills",
    //     label: "Skills",
    //     icon: <FaCode />
    // },
    // {
    //     id: 7,
    //     name: "projects",
    //     label: "Projects",
    //     icon: <FaCode />
    // },
    // {
    //     id: 8,
    //     name: "contact",
    //     label: "Contact",
    //     icon: <FaAddressCard />
    // }
]