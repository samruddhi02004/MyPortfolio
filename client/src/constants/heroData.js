import { GITHUB_URL, LINKEDIN_URL } from "./socialUrls.js";

export const codeSnippets = [
  "import { SoftwareEngineer } from 'samruddhi.gaikwad';",
  "",
  "const engineer = new SoftwareEngineer({",
  "  focus: ['AI/ML', 'Data Analytics', 'Full-Stack'],",
  "  status: 'Open to internships'",
  "});",
  "",
  "await engineer.buildSolutions();",
  "engineer.collaborate();"
];

export const heroContent = {
  greeting: "Hello, I'm",
  name: "Samruddhi Gaikwad",
  title: "Software Engineer",
  subtitle: "AI/ML Enthusiast | Data Analytics Practitioner",
  description: "Results-driven Software Engineer with 3+ years of experience in building scalable applications, AI/ML solutions, and data analytics platforms. Seeking software engineering opportunities where I can leverage my expertise in full-stack development and machine learning.",
  tagline: "Transforming complex challenges into innovative software solutions",
  availability: "Open to Software Engineering Opportunities",
  cta: {
    primary: "View My Projects",
    secondary: "Download Resume"
  }
};

export const socialLinks = [
  { icon: "Github", href: GITHUB_URL, label: "GitHub" },
  { icon: "Linkedin", href: LINKEDIN_URL, label: "LinkedIn" },
  { icon: "Twitter", href: "#", label: "Twitter" },
  { icon: "Mail", href: "mailto:samruddhi.gaikwad.it@gmail.com", label: "Email" }
];
