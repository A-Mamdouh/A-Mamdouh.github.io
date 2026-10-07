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
    headline: "C++ Software Developer",
    supportingLine:
        "Recent M.Sc. Artificial Intelligence graduate with professional software development experience and a focus on modern C++, performance, and reliable systems. I build graphics, distributed simulations, real-time computer-vision software, and production applications.",
    location: "Nürnberg, Germany",
    availability: "Open to C++ software development roles across Germany",
    email: "work@a-mamdouh.com",
} as const;

export const links = {
    email: `mailto:${person.email}`,
    github: "https://github.com/a-mamdouh/",
    linkedin: "https://linkedin.com/in/a-mamdouh99/",
    resume: "/resume.pdf",
} as const;

export const about = [
    "I'm a software developer with professional experience across enterprise software, industrial computer vision, and product development. I care about clear architecture, explicit ownership, performance, testing, and maintainable code, and I enjoy working closely with the people who use the systems I build.",
    "My current C++ work includes Eden, a C++20 graphics engine; a distributed swarm simulation using Fast DDS; and contributions to Askier's OpenCL and OpenCV image-processing pipeline. My M.Sc. in Artificial Intelligence is a supporting strength, especially where modern C++ meets computer vision, simulation, and performance-sensitive software.",
];

export const heroStats: Stat[] = [
    {
        value: "500×",
        label: "inference time reduction",
        detail: "1,000 ms → 2 ms on a real-time computer-vision pipeline",
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
        role: "Software Developer",
        location: "Walldorf / Remote, Germany",
        start: "2024",
        end: "2026",
        bullets: [
            "Build and maintain features for the Financial Products Subledger (FPSL) in enterprise financial software.",
            "Design and optimize high-performance ABAP SQL queries and data-oriented processing for financial applications.",
            "Contribute to architecture discussions, pair programming, code reviews, and modernization of internal developer and quality tooling.",
        ],
    },
    {
        company: "Primetals Technologies",
        role: "CV/ML Student Developer",
        location: "Erlangen, Germany",
        start: "2023",
        end: "2024",
        bullets: [
            "Built AI-powered assistants and computer-vision pipelines for real-time industrial workflows in steel mills.",
            "Trained and fine-tuned computer-vision models and hardened them into production-ready pipelines.",
            "Cut inference latency on an existing pipeline from ~1,000 ms to 2 ms — a 500× speedup that enabled real-time use.",
            "Extended reusable internal ML tooling for future industrial AI projects.",
        ],
    },
    {
        company: "Sequel Solutions",
        role: "Junior Software Developer",
        location: "Cairo, Egypt",
        start: "2020",
        end: "2021",
        bullets: [
            "Built web and mobile features for a vacation-booking platform with JavaScript, React Native, Firebase, and Docker.",
            "Modernized legacy code, cutting page-load time by 30% and reaching a perfect Lighthouse score.",
            "Added backend caching and contributed mobile-specific functionality.",
        ],
    },
];

export const featuredProjects: FeaturedProject[] = [
    {
        id: "eden",
        name: "Eden / NoClip",
        tagline: "Modern C++20 graphics library and engine project",
        description:
            "A modular graphics library and engine built in C++20 with Vulkan to deepen hands-on experience in low-level graphics and systems programming.",
        highlights: [
            "RAII and explicit resource ownership",
            "Reusable engine abstractions",
            "CMake-based project structure",
            "Performance-conscious design",
        ],
        tags: ["C++20", "Graphics", "Systems design"],
        href: "https://github.com/A-Mamdouh/eden",
        motif: "eden",
    },
    {
        id: "distributed-swarm-simulation",
        name: "Distributed Swarm Simulation",
        tagline: "Fast DDS messaging across independent C++ processes",
        description:
            "A Fast DDS proof of concept that uses a swarm scenario to demonstrate typed publish/subscribe communication between independent C++ drone, simulation and Eden/Vulkan telemetry processes.",
        highlights: [
            "Four typed DDS topics",
            "Recipient-filtered observations",
            "IDL-generated message types",
            "Dynamic process discovery",
        ],
        tags: ["C++17/20", "Fast DDS", "IDL", "CMake", "Vulkan"],
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
        tagline: "GPU-accelerated real-time image processing in C++",
        description:
            "Contributed custom OpenCL kernels and OpenCV processing to an existing cross-platform application that turns camera feeds and images into real-time ASCII art.",
        highlights: [
            "Custom OpenCL image-processing kernels",
            "Additional processing through OpenCV",
            "GPU acceleration and parallel processing",
            "Qt-based cross-platform application",
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
        degree: "M.Sc. Artificial Intelligence — completed 2025",
        school: "FAU Erlangen-Nuremberg",
        grade: "1.9",
        start: "2022",
        end: "2025",
        details:
            "Minor in High-Performance Computing, with a focus on modern C++17/20, RAII, resource management, and performance-oriented programming.",
    },
    {
        degree: "B.Sc. Computer Science and Engineering",
        school: "German University in Cairo",
        grade: "1.9",
        start: "2016",
        end: "2021",
        details:
            "Computer science and software engineering fundamentals, including data structures, algorithms, distributed systems, embedded systems, and data engineering.",
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: "Modern C++ & Systems",
        skills: [
            "C++17/20",
            "C",
            "RAII",
            "Resource management",
            "CMake",
            "GoogleTest",
            "Distributed systems",
        ],
        evidence: {
            label: "Eden",
            href: "https://github.com/A-Mamdouh/eden",
        },
    },
    {
        title: "Graphics, Concurrency & Performance",
        skills: [
            "Vulkan",
            "OpenGL",
            "OpenCL",
            "Qt 6",
            "Intel TBB",
            "Fast DDS",
            "Performance optimization",
            "Parallel processing",
        ],
        evidence: {
            label: "Distributed Swarm Simulation",
            href: "https://github.com/A-Mamdouh/distributed-swarm-simulation",
        },
    },
    {
        title: "Computer Vision & Applied AI",
        skills: [
            "Python",
            "PyTorch",
            "ONNX",
            "OpenCV",
            "ML pipelines",
            "RAG",
            "Agentic workflows",
        ],
    },
    {
        title: "Software Engineering",
        skills: [
            "ABAP",
            "JavaScript / TypeScript",
            "React",
            "React Native",
            "Java",
            "REST APIs",
            "SQL",
            "Git",
            "CI/CD",
            "Docker",
        ],
    },
];

export const languages: Language[] = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Beginner (B1)" },
];

export const achievements = [
    "Catalyst Coding Competition (2019)",
    "Google Code Jam (2020)",
    "Google Foobar (2023)",
];
