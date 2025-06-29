const experience1 = [
    // {
    //   id: 1,
    //   imgLink: require('../img/company1.png'),
    //   title: "Executive Member",
    //   company: "The Institution of Engineers, NITK Chapter",
    //   date: "August 2019 - Present",
    //   companyLink: "https://ie.nitk.ac.in",
    // },
    // {
    //   id: 1,
    //   imgLink: require('../img/company2.png'),
    //   title: "Media Coordinator",
    //   company: "HackVerse 2.0",
    //   date: "August 2020 - Present",
    //   companyLink: "https://hackverse.nitk.ac.in",
    // },
    {
        id: 1,
        imgLink: require("../img/company3.jpeg"),
        title: "Executive Member",
        company: "Web Enthusiasts'​ Club NITK",
        date: "October 2020 - May 2022",
        companyLink: "https://webclub.nitk.ac.in/",
        highlights: [],
    },
    {
        id: 2,
        imgLink: require("../img/company2.png"),
        title: "Lead Organizer",
        company: "HackVerse",
        date: "May 2021 - Jan 2022",
        companyLink: "https://hackverse.nitk.ac.in",
        highlights: [],
    },
    {
        id: 4,
        imgLink: require("../img/company1.png"),
        title: "Website & Design Head",
        company: "The Institution of Engineers, NITK Chapter",
        date: "May 2021 - May 2022",
        companyLink: "https://ie.nitk.ac.in",
        highlights: [],
    },
    {
        id: 5,
        imgLink: require("../img/company4.svg"),
        title: "Software Engineer Intern",
        company: "Publicis Sapient",
        date: "May 2021 - July 2021",
        companyLink: "https://www.publicissapient.com",
        highlights: [
            `Collaborated with the supply team to enhance the <b><a href="https://homes-and-villas.marriott.com/" target="_blank">Homes and Villas by Marriott International (HVMI)</a></b> platform, contributing to the development and optimization of <b>SpringBoot-based backend microservices</b>.`,
            "Enhanced the <b>Operations Portal</b> by adding detailed user activity logs to the change history, significantly improving <b>tracking and auditing capabilities</b>.",
            "Tech stack: <b>Java, SpringBoot and SQL</b>",
        ],
    },
    {
        id: 6,
        imgLink: require("../img/company5.png"),
        title: "Software Engineer",
        company: "Visa Inc",
        date: "June 2022 - Feb 2024",
        companyLink: "https://www.visa.co.in/",
        highlights: [
            `Implemented <b>active-active data synchronization</b> across multiple data centers for the <b>Visa Rapid Onboarding (VRO) Vert.x</b> application, effectively resolving race condition issues during replication delays and improving system reliability and data integrity.`,
            `Integrated <b>Eloqua APIs</b> into the Visa Rapid Onboarding (VRO) <b>Vert.x</b> application, streamlining <b>lead generation</b> and marketing automation processes, optimizing the <b>onboarding flow</b> for users, and enhancing the overall user experience.`,
            `Spearheaded the development of <b><a href="https://www.authorize.net" target="_blank">Authorize.NET</a> 2.0</b>, building a modern, responsive <b>React</b> UI and scalable <b>C# REST</b> controllers, significantly improving the performance and maintainability of this <b>financial system</b> while providing a high-polish user experience.`,
            "Tech stack: <b>React, ASP.NET, Vert.x, Java, Javascript, HTML, CSS, C#, and SQL</b>",
        ],
    },
    {
        id: 6,
        imgLink: require("../img/company5.png"),
        title: "Senior Software Engineer",
        company: "Visa Inc",
        date: "March 2024 - Present",
        companyLink: "https://www.visa.co.in/",
        highlights: [
            `Leading and mentoring a team of 12 in the development of key features like <b>Accepting Payments</b>, <b>Payment Links</b>, <b>Transaction Fraud Prevention Settings</b>, <b>Product Marketplace</b>, and <b>Billing</b> for the new <b><a href="https://www.authorize.net" target="_blank">Authorize.NET</a></b> modern React-based <b>Payment & Financial system</b>, resulting in an enhanced user experience with a more scalable architecture.`,
            `Serving as the <b>Primary Technical Lead</b> for critical <b>ASP.NET</b> services, including the <b>Login Application</b>, <b>Cobranding services</b>, <b>Search Service</b>, and <b>REST APIs</b> for <a href="https://www.authorize.net" target="_blank">Authorize.NET</a>, while maintaining stringent security protocols and system reliability.`,
            "Tech stack: <b>React, ASP.NET, Javascript, HTML, CSS, C#, and SQL</b>",
        ],
    },
];

// Sample experience data - replace with your own
const experience = [
    {
        id: 1,
        position: "Senior Software Engineer",
        company: "Visa Inc",
        location: "Bangalore, India",
        duration: "Mar 2024 - Present",
        description:
            "Leading the development of core payment features and secure backend services for Authorize.NET, enhancing scalability, user experience, and system reliability.",
        responsibilities: [
            `Leading and mentoring a team of 6 in the development of key features like Accepting Payments, Payment Links, Transaction Fraud Prevention Settings, Product Marketplace, and Billing for the new Authorize.NET modern React-based Payment & Financial system, resulting in an enhanced user experience with a more scalable architecture.`,
            `Serving as the Primary Technical Lead for critical ASP.NET services, including the Login Application, Cobranding services, Search Service, and REST APIs for Authorize.NET, while maintaining stringent security protocols and system reliability.`,
            "Tech stack: React, ASP.NET, Javascript, HTML, CSS, C#, and SQL",
        ],
    },
    {
        id: 2,
        position: "Software Engineer",
        company: "Visa Inc",
        location: "Bangalore, India",
        duration: "June 2022 - Feb 2024",
        description:
            "Engineered key enhancements for Visa's Rapid Onboarding and Authorize.NET platforms by implementing multi-data-center synchronization, integrating marketing automation APIs, and developing a modern, scalable UI and backend system to improve performance, reliability, and user experience.",
        responsibilities: [
            "Implemented active-active data synchronization across multiple data centers for the Visa Rapid Onboarding (VRO) Vert.x application, effectively resolving race condition issues during replication delays and improving system reliability and data integrity.",
            "Integrated Eloqua APIs into the Visa Rapid Onboarding (VRO) Vert.x application, streamlining lead generation and marketing automation processes, optimizing the onboarding flow for users, and enhancing the overall user experience.",
            "Spearheaded the development of Authorize.NET 2.0, building a modern, responsive React UI and scalable C# REST controllers, significantly improving the performance and maintainability of this financial system while providing a high-polish user experience.",
            "Tech stack: React, ASP.NET, Vert.x, Java, Javascript, HTML, CSS, C#, and SQL",
        ],
    },
    {
        id: 3,
        position: "Software Engineer Intern",
        company: "Publicis Sapient",
        location: "Bangalore, India",
        duration: "May 2021 - July 2021",
        description:
            "Improved backend microservices and audit capabilities for Marriott’s HVMI platform, enhancing operational transparency and system efficiency.",
        responsibilities: [
            "Collaborated with the supply team to enhance the Homes and Villas by Marriott International (HVMI) platform, contributing to the development and optimization of SpringBoot-based backend microservices.",
            "Enhanced the Operations Portal by adding detailed user activity logs to the change history, significantly improving tracking and auditing capabilities.",
            "Tech stack: Java, SpringBoot and SQL",
        ],
    },
];

export default experience;
