export type Stat = {
    value: string;
    label: string;
    detail: string;
};

export type ExperienceEntry = {
    company: string;
    role: string;
    location: string;
    start: string;
    end: string;
    bullets: string[];
};

export type ProjectMotif = "askier" | "portal" | "eden" | "mips" | "swarm";

export type FeaturedProject = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    highlights: string[];
    tags: string[];
    href: string;
    motif: ProjectMotif;
    /** Extra grounded detail shown only on the /projects archive page. */
    extraFacts?: string[];
};

export type SecondaryProject = {
    name: string;
    description: string;
    tags: string[];
    href: string;
    /** Extra grounded detail shown only on the /projects archive page. */
    extraFacts?: string[];
};

export type EducationEntry = {
    degree: string;
    school: string;
    grade: string;
    start: string;
    end: string;
    details: string;
};

export type SkillGroup = {
    title: string;
    skills: string[];
    evidence?: {
        label: string;
        href: string;
    };
};

export type Language = {
    name: string;
    level: string;
};

export const person = {
    name: "Ahmed Mamdouh",
    headline: "Applied AI & Software Engineer",
    supportingLine:
        "I build reliable AI-powered products, high-performance systems and scalable software.",
    location: "Bavaria, Germany",
    availability: "Open to Applied AI, ML and performance-focused C++ engineering roles in Germany",
    email: "work@a-mamdouh.com",
} as const;

export const links = {
    email: `mailto:${person.email}`,
    github: "https://github.com/a-mamdouh/",
    linkedin: "https://linkedin.com/in/a-mamdouh99/",
    resume: "/resume.pdf",
} as const;

export const about = [
    "I'm a software enginer with a strong academic and applied background in software design and development. I've worked across different languages, platforms and technology stacks, but my approach tends to stay the same: I care about good system design, clear abstractions, performance, testing and actually delivering useful software on time. I like working closely with the people who use or depend on what I'm building, understanding the problem behind the requirements and making technical decisions with that end goal in mind. Test-driven development and maintainability are important parts of how I work, whether I'm building a real-time system, a user application, or an AI-based system.",
    "My main technical interest are C++ and artificial intelligence. I enjoy modern C++ its combination of expressive software design and low-level control when it's needed. Currently, my main hobby project is building my own graphics engine, which gives me plenty of room to explore both.",
    "My interest in AI comes from first-hand experience with the gap between research and production software. A major focus on my work has been bridging that gap and turning research ideas and simple scripts into reliable, production-ready solutions. My academic background in AI and professional work have taken me through machine learning, computer vision, semantic reasoning, RAG, and agentic workflows, with the same emphasis on architecture, evaluation, performance, testing, and delivery that I bring to the rest of my software work.",
];

export const heroStats: Stat[] = [
    {
        value: "99.8%",
        label: "inference latency cut",
        detail: "1,000ms → 2ms on a real-time computer-vision pipeline",
    },
    {
        value: "30%",
        label: "faster page loads",
        detail: "legacy frontend modernization at Sequel Solutions",
    },
    {
        value: "100/100",
        label: "Lighthouse score",
        detail: "perfect score shipped on a production frontend",
    },
];

export const experience: ExperienceEntry[] = [
    {
        company: "SAP Fioneer",
        role: "Software Developer (ABAP)",
        location: "Walldorf, Germany",
        start: "Oct 2024",
        end: "Present",
        bullets: [
            "Build parallel, scalable software for SAP S/4HANA and the Financial Products Subledger (FPSL) in financial-services environments.",
            "Design and optimize high-performance ABAP SQL queries and data-oriented processing for financial applications.",
            "Contribute across architecture discussions, pair programming, code reviews and modernization of internal developer and quality tooling.",
        ],
    },
    {
        company: "Primetals Technologies",
        role: "Working Student Developer — Computer Vision / ML",
        location: "Erlangen, Germany",
        start: "Apr 2023",
        end: "Nov 2024",
        bullets: [
            "Built AI-powered assistants and computer-vision pipelines for real-time industrial workflows in steel mills.",
            "Trained and fine-tuned computer-vision models and hardened them into production-ready pipelines.",
            "Cut inference latency on an existing pipeline from ~1,000ms to 2ms — a 500x speedup that enabled real-time use.",
            "Extended reusable internal ML tooling for future industrial AI projects.",
        ],
    },
    {
        company: "Sequel Solutions",
        role: "Junior Software Developer",
        location: "Cairo, Egypt",
        start: "Sep 2020",
        end: "Jul 2021",
        bullets: [
            "Built web and mobile features for a vacation-booking platform with JavaScript, React Native, Firebase, Docker and AWS.",
            "Modernized legacy code, cutting page-load time by 30% and reaching a perfect Lighthouse score.",
            "Added backend caching and contributed mobile-specific functionality.",
        ],
    },
];

export const featuredProjects: FeaturedProject[] = [
        {
        id: "eden",
        name: "Eden / NoClip",
        tagline: "A hackable graphics engine written in modern C++",
        description:
            "A platform-independent graphics engine focused on performance, modular system design and developer-friendly interfaces. built to be extensible and hackable.",
        highlights: [
            "Modern C++ architecture",
            "Cross-platform rendering",
            "Performance-first engine design",
            "Test-suite-driven development",
        ],
        tags: ["C++20", "Graphics", "Systems design"],
        href: "https://github.com/A-Mamdouh/eden",
        motif: "eden",
    },
    {
        id: "distributed-swarm-simulation",
        name: "Distributed Swarm Simulation using",
        tagline: "Fast DDS messaging across independent C++ processes",
        description:
            "A Fast DDS proof of concept that uses a swarm scenario to demonstrate typed publish/subscribe communication between independent C++ drone, simulation and Eden telemetry processes.",
        highlights: [
            "Four typed DDS topics",
            "Recipient-filtered observations",
            "IDL-generated message types",
            "Dynamic process discovery",
        ],
        tags: ["C++17/20", "Fast DDS", "IDL", "CMake", "Eden"],
        href: "https://github.com/A-Mamdouh/distributed-swarm-simulation",
        motif: "swarm",
        extraFacts: [
            "The deliberately lightweight swarm scenario keeps the focus on middleware: the simulator publishes targeted observations while every drone owns its controller and state.",
            "A separate UI subscribes to telemetry and publishes beacon commands; new drone processes can join while the demo is running.",
        ],
    },
    {
        id: "askier",
        name: "Askier",
        tagline: "Real-time ASCII rendering, in native C++",
        description:
            "A modular, cross-platform application that turns live camera feeds and images into real-time ASCII art, built with Qt 6, C++ and OpenCV.",
        highlights: [
            "OpenCL GPU acceleration",
            "TBB parallelism for responsive processing",
            "Modular, cross-platform architecture",
            "Real-time camera and image pipelines",
        ],
        tags: ["C++", "Qt 6", "OpenCV", "OpenCL", "TBB"],
        href: "https://github.com/a-h-i/askier",
        motif: "askier",
    },
    {
        id: "investors-portal",
        name: "Investors Portal",
        tagline: "Policy-driven fee calculation and contract generation",
        description:
            "A full-stack investor-operations platform that automates policy-driven fee calculations and PDF contract generation, cutting manual work for investors and operations teams.",
        highlights: [
            "Full-stack MERN build",
            "Automated PDF contract generation",
            "Stripe-based payment flows",
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        href: "https://github.com/A-Mamdouh/Sumerge-Investors-Portal",
        motif: "portal",
    },
];

export const secondaryProjects: SecondaryProject[] = [
    {
        name: "MIPS Processor",
        description:
            "A MIPS processor simulator and assembly-to-machine-code parser written in Python, with registers, control logic, ALU and memory modeled from scratch.",
        tags: ["Python", "Computer architecture", "Assembly"],
        href: "https://github.com/A-Mamdouh/MIPS-Simulator",
        extraFacts: [
            "Implements ADD, SUB, AND, OR, ADDI, LW, LH, SW, SH, SLL, SRL, NOP, J and BEQ.",
            "CLI-driven: assemble a program with -a, or simulate directly from an assembled binary.",
        ],
    },
    {
        name: "SkyFox",
        description:
            "A procedurally generated OpenGL game exploring real-time rendering and gameplay systems in C++.",
        tags: ["C++", "OpenGL", "Game development"],
        href: "https://github.com/A-Mamdouh/SkyFox",
        extraFacts: ["Free-roam camera with WASD movement and a togglable keyboard/mouse control mode."],
    },
    {
        name: "CT Imaging Projection Generation",
        description:
            "Deep-learning models (GANs, PyTorch Lightning) that generate intermediate CT projection data for biomedical-imaging research.",
        tags: ["Python", "PyTorch", "GANs", "Biomedical engineering"],
        href: "https://github.com/A-Mamdouh/intermediate-projection-generation-on-CAT",
    },
    {
        name: "DBMS",
        description:
            "A database management system built from scratch in Java, with indexing and query-analysis tooling.",
        tags: ["Java", "Databases", "SQL", "Indexing"],
        href: "https://github.com/A-Mamdouh/DBMS",
    },
    {
        name: "Chatto",
        description:
            "A multi-threaded, socket-based messaging application in JavaFX exploring network-programming fundamentals.",
        tags: ["Java", "Multi-threading", "Networking", "JavaFX"],
        href: "https://github.com/A-Mamdouh/Chatto",
    },
];

export const education: EducationEntry[] = [
    {
        degree: "M.Sc. Artificial Intelligence",
        school: "FAU Erlangen-Nuremberg",
        grade: "1.9",
        start: "2022",
        end: "2025",
        details:
            "Computer vision, deep learning, NLP, generative AI, information visualization, high-performance computing minor. Teaching assistant for Artificial Intelligence II.",
    },
    {
        degree: "B.Sc. Computer Science and Engineering",
        school: "German University in Cairo",
        grade: "1.9",
        start: "2016",
        end: "2021",
        details:
            "Software engineering, algorithms and data structures, DevOps, embedded and cyber-physical systems, data engineering. Student researcher and autonomous smart-lab team lead.",
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: "Applied AI & ML",
        skills: [
            "PyTorch",
            "TensorFlow",
            "Keras",
            "NumPy",
            "OpenCV",
            "CUDA",
            "Label Studio",
            "LangChain",
            "LangGraph",
            "RAG",
            "Vector databases",
            "Tool-using agents",
        ],
    },
    {
        title: "C++ & Systems",
        skills: [
            "C++14/17/20",
            "Fast DDS",
            "Qt 6",
            "OpenCV",
            "OpenGL",
            "Vulkan",
            "OpenCL",
            "Intel TBB",
            "Boost",
            "GoogleTest",
            "CMake",
        ],
        evidence: {
            label: "Distributed Swarm Simulation",
            href: "https://github.com/A-Mamdouh/distributed-swarm-simulation",
        },
    },
    {
        title: "Software Engineering",
        skills: [
            "Python",
            "TypeScript / JavaScript",
            "ABAP",
            "Java",
            "React",
            "Next.js",
            "React Native",
            "Django",
            "FastAPI",
            "REST APIs",
            "SQL",
            "Redis"
        ],
    },
    {
        title: "Infrastructure & Performance",
        skills: ["AWS", "Docker", "Git", "Linux", "CI/CD"],
    },
];

export const languages: Language[] = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Beginner (B1)" },
];

export const achievements = [
    "ACM-ICPC regional competitor (2016-2018)",
    "Catalyst Coding Competition (2019)",
    "Google Code Jam (2020)",
    "Google Foobar (2023)",
];
