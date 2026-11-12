    import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    meta,
    starbucks,
    tesla,
    shopify,
    orderbot,
    resumeAnalyzer,
    ecommerce,
    // threejs,
    } from "../assets";

    export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    ];

    const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
    ];

    const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
    ];

    const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    ];

    const testimonials = [
    {
        testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "[https://randomuser.me/api/portraits/women/4.jpg](https://randomuser.me/api/portraits/women/4.jpg)",
    },
    {
        testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "[https://randomuser.me/api/portraits/men/5.jpg](https://randomuser.me/api/portraits/men/5.jpg)",
    },
    {
        testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "[https://randomuser.me/api/portraits/women/6.jpg](https://randomuser.me/api/portraits/women/6.jpg)",
    },
    ];

    const projects = [
   {
    name: "AI Pizza OrderBot",
    description:
    "An AI-powered pizza ordering chatbot built with Python, Panel, and Google's Gemini API. It allows users to interact through a conversational interface, explore pizza options, place orders, and receive intelligent responses for a smooth ordering experience.",
    tags: [
        {
            name: "python",
            color: "blue-text-gradient",
        },
        {
            name: "panel",
            color: "green-text-gradient",
        },
        {
            name: "gemini api",
            color: "pink-text-gradient",
        },
    ],
    image: orderbot,
    source_code_link: "https://github.com/AhmadNawazTech/OrderBot",
},
    {
        name: "AI Resume Analyzer",
        description:
        "An AI-powered resume analysis application built with Python, Flask, and Google's Gemini API. It analyzes resumes, extracts skills, identifies missing skills, generates personalized learning roadmaps, and provides relevant interview questions to help users improve their career readiness.",
    tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "flask", color: "green-text-gradient" },
        { name: "gemini api", color: "pink-text-gradient" },
        { name: "tidb", color: "blue-text-gradient" },
    ],
    image: resumeAnalyzer,
    source_code_link: "https://github.com/AhmadNawazTech/AI-Resume-Analyzer",
    },

    {
        name: "E-commerce Web Application",
        description:
        "A full-stack e-commerce web application designed to provide a smooth online shopping experience. It features product browsing, product details, shopping cart functionality, user authentication, and order management, with a responsive interface and backend database integration.",
    tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "nodejs", color: "green-text-gradient" },
        { name: "express", color: "pink-text-gradient" },
        { name: "mongodb", color: "blue-text-gradient" },
    ],
        image: ecommerce,
        source_code_link: "YOUR_ECOMMERCE_GITHUB_REPOSITORY_URL",
    },
    ];

    export { services, technologies, experiences, testimonials, projects };