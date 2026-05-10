import { GITHUB_URL, LINKEDIN_URL } from "./socialUrls.js";

export const achievements = [
  { number: "10+", label: "Projects Delivered", icon: "Briefcase", suffix: "" },
  { number: "0-1", label: "Years Experience", icon: "Calendar", suffix: "+" },
  { number: "95", label: "Code Quality", icon: "Target", suffix: "%" },
  { number: "8", label: "Certifications", icon: "Award", suffix: "+" }
];

export const techStack = [
  { 
    category: "Programming Languages", 
    items: ["Python", "JavaScript", "SQL", "TypeScript", "Java"] 
  },
  { 
    category: "AI/ML Technologies", 
    items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "PyTorch"] 
  },
  { 
    category: "Web Development", 
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"] 
  },
  { 
    category: "Data Analytics", 
    items: ["Power BI", "Tableau", "DataBricks","Excel", "Apache Spark", "Hadoop"] 
  }
];

export const features = [
  {
    title: "AI/ML Solutions",
    description: "Developing intelligent systems using machine learning, deep learning, and natural language processing",
    icon: "Brain",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Analytics",
    description: "Creating comprehensive data pipelines and visualization systems for actionable insights",
    icon: "Database",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and cloud deployment",
    icon: "Code",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Cloud Architecture",
    description: "Designing and implementing cloud-native solutions with scalability and reliability",
    icon: "Cloud",
    color: "from-orange-500 to-red-500"
  }
];

export const coreCompetencies = [
  "Machine Learning Model Development",
  "Data Pipeline Architecture", 
  "Full-Stack Web Applications",
  "Statistical Analysis & Visualization",
  "Agile Development Methodologies",
  "Cloud Computing & Deployment"
];

export const aboutSocialLinks = [
  { icon: "Github", href: GITHUB_URL },
  { icon: "Linkedin", href: LINKEDIN_URL },
  { icon: "Twitter", href: "#" },
  { icon: "Mail", href: "mailto:gaikwadsamruddhi97@gmail.com" }
];

// Put your certificate PDF/JPG/PNG files in `public/certificates/`
// Then reference them here with a path like: "/certificates/<your-file-name>.pdf"
export const certificates = [
  // Tip: keep these files in `public/certificates/` for cleaner URLs.
  // Your current files are already in `public/` subfolders, so the paths below work as-is.
  {
    id: "aicte-llm-conversational-data-analysis",
    title: "Conversational Data Analysis using LLM",
    issuer: "AICTE",
    domain: "AI/ML",
    fileUrl: "/AICTE-Conversational-Data-analysis-using-LLM/AICTE Conversational Data analysis using LLM_page-0001.jpg",
  },
  {
    id: "ai-primer-certification",
    title: "Artificial Intelligence Primer Certification",
    issuer: "Certification",
    domain: "AI/ML",
    fileUrl: "/Artificial-Intelligence-Primer-Certification/Artificial Intelligence Primer Certification_page-0001.jpg",
  },
  {
    id: "aws-cloud-operations",
    title: "AWS Cloud Operations",
    issuer: "AWS",
    domain: "Cloud",
    fileUrl: "/AWS/AWS_Cloud_Operations_.pdf",
  },
  {
    id: "aws-generative-ai",
    title: "AWS Generative AI",
    issuer: "AWS",
    domain: "AI/ML",
    fileUrl: "/AWS/AWS_gen_Ai.pdf",
  },
  {
    id: "bharat-ai-quest",
    title: "Bharat AI Quest",
    issuer: "Certificate",
    domain: "AI/ML",
    fileUrl: "/Bharat-Ai-Quest/Bharat Ai Quest_page-0001.jpg",
  },
  {
    id: "certificate-1",
    title: "Microsoft Azure Certificate",
    issuer: "Certificate",
    domain: "Cloud",
    fileUrl: "/certificate-1/certificate (1)_page-0001.jpg",
  },
  {
    id: "certificate-2",
    title: "Microsoft Elevate Certificate",
    issuer: "Certificate",
    domain: "Other",
    fileUrl: "/certificate-2/certificate (2)_page-0001.jpg",
  },
  {
    id: "infosys-pragati-path-to-future",
    title: "Cohort of Pragati - Path to Future",
    issuer: "Infosys Springboard",
    domain: "Other",
    fileUrl: "/cohort-of-Pragati--Path-to-Future-infosys-springboard/cohort of Pragati- Path to Future infosys springboard_page-0001.jpg",
  },
  {
    id: "employment-communication-lab-course NPTEL",
    title: "Employment Communication (Lab-based Course)",
    issuer: "Certificate",
    domain: "Other",
    fileUrl: "/Employment-Communication-A-Lab-based-course/Employment Communication A Lab based course_page-0001.jpg",
  },
  {
    id: "git-and-github",
    title: "Git and GitHub",
    issuer: "Certificate",
    domain: "Development",
    fileUrl: "/Git-and-GitHub/Git and GitHub_page-0001.jpg",
  },
  {
    id: "google-cloud-career-launchpad",
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud",
    domain: "Cloud",
    fileUrl: "/Google-Cloud-Career-Launchpad/Google Cloud Career Launchpad_page-0001.jpg",
  },
  {
    id: "simplilearn-ml",
    title: "Simplilearn Machine Learning",
    issuer: "Simplilearn",
    domain: "AI/ML",
    fileUrl: "/Simplilearn-ML/Simplilearn ML_page-0001.jpg",
  },
  {
    id: "sql-365datascience",
    title: "SQL (365 Data Science)",
    issuer: "365 Data Science",
    domain: "Data Analytics",
    fileUrl: "/SQL-365DataScience/SQL 365DataScience_page-0001.jpg",
  },
  {
    id: "statistics-365datascience",
    title: "Statistics (365 Data Science)",
    issuer: "365 Data Science",
    domain: "Data Analytics",
    fileUrl: "/Statisrics-365-data-Scince/Statisrics 365 data Scince_page-0001.jpg",
  },
  {
    id: "udemy-full-stack",
    title: "Udemy Full Stack",
    issuer: "Udemy",
    domain: "Development",
    fileUrl: "/Udemy-Full-Stack/Udemy Full Stack_page-0001.jpg",
  },
  // Hackathons / participation
  {
    id: "hackathon-a1-launchpad",
    title: "A-1 Launchpad Challenge for Innovative Solutions",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/A-1 Launchpad-Challenge for Innovative Solutions.pdf",
  },
  {
    id: "hackathon-adobe-india",
    title: "Adobe India Hackathon",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/Adobe India Hackathon.pdf",
  },
  {
    id: "hackathon-evihack-1",
    title: "eVIHack 1.0 – Build",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/eVIHack 1.0 – Build.pdf",
  },
  {
    id: "hackathon-hashtag-ideathon",
    title: "Hashtag Ideathon",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/Hashtag Ideathon.pdf",
  },
  {
    id: "hackathon-hpcl",
    title: "Hindustan Petroleum Corporation Ltd",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/Hindustan Petroleum Corporation Ltd.pdf",
  },
  {
    id: "hackathon-innovate-a-thon-3-bit",
    title: "Innovate-A-Thon 3.0 (BIT)",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/Innovate-A-Thon 3.0 org by Birla Institute of Technology (BIT).pdf",
  },
  {
    id: "hackathon-kdsh-2026",
    title: "KDSH 2026",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/KDSH_2026_Samruddhi_Gaikwad.pdf",
  },
  {
    id: "hackathon-loreal-sustainability-2025",
    title: "L'Oréal Sustainability Challenge 2025",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/L'Oréal Sustainability Challenge 2025.pdf",
  },
  {
    id: "hackathon-tata-crucible-2025",
    title: "TATA Crucible Campus Quiz 2025",
    issuer: "Hackathon",
    domain: "Hackathons",
    fileUrl: "/hackathons/TATA Crucible Campus Quiz 2025.pdf",
  },
  // CodeSignal screenshots (optional)
  {
    id: "codesignal-1",
    title: "CodeSignal Gen Ai",
    issuer: "CodeSignal",
    domain: "Coding",
    fileUrl: "/codesignal/WhatsApp Image 2026-03-02 at 9.27.31 PM.jpeg",
  },
  {
    id: "codesignal-2",
    title: "CodeSignal Software Engineer",
    issuer: "CodeSignal",
    domain: "Coding",
    fileUrl: "/codesignal/WhatsApp Image 2026-03-02 at 9.27.32 .jpeg",
  },
  {
    id: "codesignal-3",
    title: "CodeSignalGen Ai for Engineers",
    issuer: "CodeSignal",
    domain: "Coding",
    fileUrl: "/codesignal/WhatsApp Image 2026-03-02 at 9.27.32 P.jpeg",
  },
  {
    id: "codesignal-4",
    title: "CodeSignal How Gen Ai Works",
    issuer: "CodeSignal",
    domain: "Coding",
    fileUrl: "/codesignal/WhatsApp Image 2026-03-02 at 9.27.32 PM.jpeg",
  },
];

export const tabContent = {
  personal: "Software engineer with a strong foundation in computer science and a passion for artificial intelligence. I thrive on solving complex problems through innovative technology solutions and data-driven approaches.",
  professional: "Specialized in developing scalable AI/ML solutions and data analytics platforms. Experienced in full-stack development with expertise in Python, JavaScript, and modern web technologies. Proven track record of delivering production-ready applications.",
  approach: "I follow a systematic approach to software development: analyze requirements thoroughly, design scalable architectures, implement clean code with comprehensive testing, and deliver solutions that exceed expectations. Committed to continuous learning and staying current with emerging technologies.",
  certifications: "Click a certificate to view or download it."
};

export const aboutContent = {
  title: "About Me",
  subtitle: "Software Engineer | AI/ML Enthusiast | Data-Driven Problem Solver  ",
  description: "Building intelligent software solutions that bridge the gap between data science and practical applications."
};
