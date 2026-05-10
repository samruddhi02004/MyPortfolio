"use client";
import { motion } from "framer-motion";
import { Download, FileText, Brain, BarChart3, ArrowRight } from "lucide-react";

export const ResumeButtons = () => {
  const resumeTypes = [
    {
      id: "sde",
      title: "SDE Resume",
      description: "Software engineering positions",
      icon: FileText,
      url: "/resumes/samruddhi-gaikwad-sde-resume.pdf",
      color: "from-blue-500 via-cyan-500 to-teal-600",
      keywords: ["Software Engineer", "Full Stack", "React", "Node.js", "Python"]
    },
    {
      id: "ai-ml",
      title: "AI/ML Resume",
      description: "AI and machine learning roles",
      icon: Brain,
      url: "/resumes/samruddhi-gaikwad-ai-ml-resume.pdf",
      color: "from-green-500 via-emerald-500 to-teal-600",
      keywords: ["Machine Learning", "AI", "TensorFlow", "Python", "Data Science"]
    },
    {
      id: "data-analytics",
      title: "Data Analytics Resume",
      description: "Data analytics and visualization positions",
      icon: BarChart3,
      url: "/resumes/samruddhi-gaikwad-data-analytics-resume.pdf",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      keywords: ["Data Analytics", "Power BI", "Tableau", "SQL", "Python"]
    }
  ];

  const ResumeButton = ({ resume, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group"
    >
      <motion.a
        href={resume.url}
        download
        className={`glass-card p-8 block hover-lift border-0 relative overflow-hidden group-hover:shadow-2xl`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 bg-gradient-to-r ${resume.color} opacity-10`} />
          <div className={`absolute inset-0 border border-${resume.color.split(' ')[0]}-500/30`} />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${resume.color} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            <resume.icon className="w-8 h-8" />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold gradient-text group-hover:text-glow transition-all duration-300">
              {resume.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {resume.description}
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-6">
              {resume.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                <span
                  key={keywordIndex}
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${resume.color} bg-opacity-20 text-white border border-white/20`}
                >
                  {keyword}
                </span>
              ))}
              {resume.keywords.length > 3 && (
                <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${resume.color} bg-opacity-20 text-white border border-white/20`}>
                  +{resume.keywords.length - 3}
                </span>
              )}
            </div>

            {/* Download Button */}
            <motion.div 
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${resume.color} text-white font-medium shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${resume.color} opacity-5 rounded-2xl`} />
        </motion.div>
      </motion.a>
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-600/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FileText className="w-4 h-4" />
            Resume Downloads
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Specialized Resumes for Different Roles
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Download targeted resumes optimized for Applicant Tracking Systems (ATS) and specific roles in software development, AI/ML, and data analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-green-400 border border-green-500/30">
              ✓ ATS Optimized
            </span>
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border border-blue-500/30">
              ✓ Keyword Rich
            </span>
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-violet-400 border border-violet-500/30">
              ✓ Role Specific
            </span>
          </div>
        </motion.div>

        {/* Resume Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeTypes.map((resume, index) => (
            <ResumeButton key={resume.id} resume={resume} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Why Multiple Resumes?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each resume is specifically tailored for different roles and optimized with industry keywords to pass through Applicant Tracking Systems (ATS) and catch recruiter attention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="space-y-2">
                <h4 className="font-medium text-blue-400">SDE Resume</h4>
                <p className="text-sm text-muted-foreground">Full-stack development, system design, APIs</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-green-400">AI/ML Resume</h4>
                <p className="text-sm text-muted-foreground">Machine learning, data science, TensorFlow</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-orange-400">Data Analytics Resume</h4>
                <p className="text-sm text-muted-foreground">Power BI, Tableau, SQL, visualization</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
