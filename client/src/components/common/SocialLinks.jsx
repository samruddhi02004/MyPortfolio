"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Mail, Globe, Star, Users, Code } from "lucide-react";
import { GITHUB_URL, GITHUB_USERNAME, LINKEDIN_SLUG, LINKEDIN_URL } from "@/constants/socialUrls.js";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: GITHUB_URL,
      username: `@${GITHUB_USERNAME}`,
      stats: "View repositories",
      color: "from-gray-700 to-gray-900",
      description: "View my open-source contributions and project repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: LINKEDIN_URL,
      username: LINKEDIN_SLUG,
      stats: "500+ connections",
      color: "from-blue-600 to-blue-800",
      description: "Connect professionally and view my work experience"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:samruddhi.gaikwad.it@gmail.com",
      username: "samruddhi.gaikwad.it@gmail.com",
      stats: "Direct contact",
      color: "from-green-600 to-green-800",
      description: "Reach out for opportunities and collaborations"
    }
  ];

  const SocialCard = ({ social, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative"
    >
      <motion.a
        href={social.url}
        target={social.name === "Email" ? "_self" : "_blank"}
        rel={social.name === "Email" ? "" : "noopener noreferrer"}
        className="glass-card p-8 block hover-lift border-0 relative overflow-hidden group-hover:shadow-2xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-10`} />
          <div className={`absolute inset-0 border border-${social.color.split(' ')[0]}-500/30`} />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <social.icon className="w-8 h-8" />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold gradient-text group-hover:text-glow transition-all duration-300">
              {social.name}
            </h3>
            
            <p className="text-muted-foreground text-sm font-medium mb-2">
              {social.username}
            </p>

            <p className="text-foreground text-xs mb-4">
              {social.stats}
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {social.description}
            </p>
          </div>

          {/* Arrow */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="w-4 h-4 text-violet-400 group-hover:text-violet-500 transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-5 rounded-2xl`} />
        </motion.div>
      </motion.a>
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/5 via-transparent to-blue-800/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6 border border-violet-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Globe className="w-4 h-4" />
            Connect With Me
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Amazing Together
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and innovative projects. Reach out through any of the platforms below.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <SocialCard key={social.name} social={social} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're looking for a software engineer, AI/ML specialist, or data analytics expert, I bring technical excellence and innovative problem-solving to every project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-green-400 border border-green-500/30">
                ✓ Available for Hire
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border border-blue-500/30">
                ✓ Remote Friendly
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-violet-400 border border-violet-500/30">
                ✓ Quick Response
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
