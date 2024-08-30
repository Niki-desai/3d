import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Build Formula",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Dec 2023 - Current",
        points: [
            `** Broker **
            - An ERP solution for real estate and construction professionals.`,
            ` Developed tree hierarchy and drag- and - drop dashboards.`,
            ` Managed global state with Redux Toolkit, handled authentication flows, and worked on modules and configurations.`,
            ` Integrated various APIs for streamlined functionality.`,
            ` Participating in code reviews and providing constructive feedback to other developers.`
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React JS Developer",
        company_name: "Saeculum Solutions",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "19 June 2023 - 30 Nov 2023",
        points: [

            ` ** Blupack **: Collaboratively developed and maintained the user and admin websites for Blupack.`,
            `** Linked Care ** : Worked on projects for all three Linked Care websites – doctor, admin, and user interfaces.`,
            `** Google Advertisements **: Gained valuable experience in managing and optimizing Google Advertisements.`
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "JB Solutions",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "1 September 2022 - 30 May 2023",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
            `** MxM(Next.js News App) ** - Learned JavaScript, React, and Next.js basics. Implemented Redux for state management and basic routing.`,
            `** Repsy(React Community App) **
            - Worked on an older React.js project, learning its structure and core components.`,
            `** Croux(Next.js Employment App) **
            - Integrated a few APIs and developed a listing dashboard for daily schedules.
            Gained experience with basic GraphQL queries`,
            `** Banking Application **
            - Used GraphQL and Prisma for efficient API development and data management.`,
        ],
    },


    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+918866089171',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Niki-desai',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nikita-desai-aa11a421a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MERN Stack Chat App',
        description: 'Created a MERN stack chat application clone for learning purposes to enhance end-to-end development skills and gain comprehensive knowledge of the full-stack process.',
        link: 'https://chatapp-wn5z.onrender.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'To-Do App',
        description: 'Basic To - Do application',
        link: 'https://to-do-app-basic.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Virtual Library',
        description: 'Fun library project',
        link: 'https://virtual-bookstore.netlify.app/',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];