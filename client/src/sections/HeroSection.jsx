import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, Users, TrendingUp, Briefcase, Mail, Github, Linkedin, FileText, Brain, Database } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { codeSnippets, heroContent, socialLinks } from "../constants/heroData.js";
import { useTypingAnimation, useMultiLineTyping } from "../hooks/useTypingAnimation.js";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/socialUrls.js";
import { withBaseUrl } from "../utils/urls.js";

export const HeroSection = () => {
  const ref = useRef(null);
  const resumeButtonRef = useRef(null);
  const resumeMenuRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const floatingShapes = useMemo(
    () =>
      [...Array(12)].map((_, i) => {
        const width = Math.round(Math.random() * 60 + 20);
        const height = Math.round(Math.random() * 60 + 20);
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotate = Math.random() * 360;
        const dx = (Math.random() - 0.5) * 40;
        const dy = (Math.random() - 0.5) * 60;
        const duration = Math.random() * 6 + 4;

        return { id: i, width, height, left, top, rotate, dx, dy, duration };
      }),
    []
  );

  // Enhanced typing animation for titles
  const titles = [
    "Data Analytics, AI/ML & Full Stack Developer",
    "Machine Learning Engineer",
    "Data Analytics Practitioner", 
    "Full Stack Developer",
    "Software Engineer"
  ];
  
  const { displayText: animatedTitle } = useTypingAnimation(titles, {
    speed: 80,
    deleteSpeed: 40,
    pauseDuration: 2000,
    loop: true,
    cursor: '|',
    showCursor: true
  });

  // Multi-line typing animation for code
  const { typedLines } = useMultiLineTyping(codeSnippets, {
    speed: 22,
    linePause: 250,
    finalPause: 2000,
    loop: true,
    showCursor: true
  });

  const handleViewResume = () => {
    setShowResumeOptions(!showResumeOptions);
  };

  useEffect(() => {
    if (!showResumeOptions) return;

    const handlePointerDown = (e) => {
      const target = e.target;
      if (!(target instanceof Node)) return;

      const clickedButton = resumeButtonRef.current?.contains(target);
      const clickedMenu = resumeMenuRef.current?.contains(target);
      if (!clickedButton && !clickedMenu) setShowResumeOptions(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowResumeOptions(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showResumeOptions]);

  const handleResumeDownload = (type) => {
    const resumeFiles = {
      fullstack: "/Samruddhi_Gaikwad_Resume.pdf",
      aiml: "/Samruddhi_Gaikwad_Resume AIML.pdf",
      analytics: "/Samruddhi_Gaikwad_Resume_Dataanalytics_Final01.pdf",
    };

    const url = withBaseUrl(resumeFiles[type] ?? resumeFiles.fullstack);
    window.open(encodeURI(url), "_blank", "noopener,noreferrer");
    setShowResumeOptions(false);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
        
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              rotate: shape.rotate
            }}
            animate={{
              y: [0, shape.dy],
              x: [0, shape.dx],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>
          
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Briefcase className="h-4 w-4" /> Open to Internship and Project Opportunities
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">I'm Samruddhi Gaikwad</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>
                {animatedTitle}
              </motion.span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I am a B.Tech IT student building data-driven digital products with Python and SQL.
              I create clear visual insights through dashboards and data storytelling.
              I develop machine learning models for prediction and problem-solving tasks.
              I also build modern web applications using React and backend fundamentals.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" /> 
                <span>View Case Studies</span>
                <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Mail className="h-4 w-4" /> 
                <span>Technical Interview</span>
              </motion.a>
              
              <motion.div className="relative z-[70]">
                <motion.button 
                  ref={resumeButtonRef}
                  onClick={handleViewResume}
                  className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2" 
                  whileHover={{ scale: 1.05, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4" /> 
                  <span>Download Resume</span>
                </motion.button>
                
                {/* Resume Options Dropdown */}
                <AnimatePresence>
                  {showResumeOptions && (
                    <motion.div
                      ref={resumeMenuRef}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full mb-2 left-0 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl p-2 z-[60] min-w-[240px]"
                    >
                      <motion.button
                        onClick={() => handleResumeDownload("fullstack")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-left"
                        whileHover={{ x: 2 }}
                      >
                        <Code className="h-4 w-4 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">Full Stack (SDE)</div>
                          <div className="text-xs text-muted-foreground">General / SDE Resume</div>
                        </div>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleResumeDownload("aiml")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-left"
                        whileHover={{ x: 2 }}
                      >
                        <Brain className="h-4 w-4 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">AI/ML Resume</div>
                          <div className="text-xs text-muted-foreground">Machine Learning</div>
                        </div>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleResumeDownload("analytics")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors text-left"
                        whileHover={{ x: 2 }}
                      >
                        <Database className="h-4 w-4 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">Data Analytics Resume</div>
                          <div className="text-xs text-muted-foreground">Data Analysis</div>
                        </div>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex items-center gap-4 mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } } }}>
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </motion.a>
              
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-blue-500/50 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>

            <motion.div className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <div className="text-sm text-muted-foreground">
                 
              </div>
            </motion.div>
          </div>

          <motion.div className="flex-1 flex justify-center lg:justify-end w-full" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <div className="relative w-full max-w-md">
              <motion.div className="bg-background/90 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl w-full group hover:shadow-3xl transition-all duration-500" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 min-h-[280px] flex">
                  <div className="p-6 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start">
                      {typedLines.map((line, index) => (
                        <div 
                          key={index}
                          className={`
                            min-h-[20px] flex items-start
                            transition-opacity duration-150 ease-in-out
                            ${line.includes("import") ? "text-purple-400 font-semibold" : 
                              line.includes("const") || line.includes("new") ? "text-blue-400 font-semibold" :
                              line.includes("React") || line.includes("Node.js") || line.includes("TypeScript") ? "text-cyan-400" :
                              line.includes("SoftwareEngineer") ? "text-emerald-400 font-semibold" :
                              line.includes("//") ? "text-muted-foreground italic" :
                              line.includes("await") || line.includes("connect") ? "text-yellow-400" :
                              line.includes("'") ? "text-amber-400" : 
                              "text-foreground"}
                          `}
                        >
                          {line}
                          {index === typedLines.length - 1 && line && (
                            <motion.span 
                              animate={{ opacity: [1, 0, 1] }} 
                              transition={{ duration: 0.8, repeat: Infinity }} 
                              className="ml-1 text-primary inline-block"
                            >
                              |
                            </motion.span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center border-2 border-background shadow-2xl" animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Code className="h-5 w-5 text-white" />
                </motion.div>
                
                <motion.div className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}>
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">Solutions</span>
                </motion.div>
                
                <motion.div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg text-center" initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 2, type: "spring" }}>
                  <div className="text-xs font-mono text-muted-foreground">Built with</div>
                  <div className="text-sm font-bold text-foreground">Modern Tech</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
          <MousePointerClick className="h-3 w-3" />
          <span>Explore Technical Portfolio</span>
        </motion.div>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};
