import { Home, User, Code, Briefcase, Mail, TrendingUp, Award } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "./socialUrls.js";

export const navigationItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Stats", href: "#stats", icon: TrendingUp },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail }
];

export const navigationContent = {
  brand: "Samruddhi G.",
  cta: "Get In Touch"
};

export const footerContent = {
  brand: "Samruddhi Gaikwad",
  tagline: "Data-Driven Developer & Problem Solver",
  description: "Building intelligent solutions through data analytics, machine learning, and modern web development.",
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" }
  ],
  socialLinks: [
    { icon: "Github", href: GITHUB_URL, label: "GitHub" },
    { icon: "Linkedin", href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Mail", href: "mailto:samruddhi.gaikwad.it@gmail.com", label: "Email" }
  ],
  copyright: `© ${new Date().getFullYear()} Samruddhi Gaikwad. All rights reserved.`
};
