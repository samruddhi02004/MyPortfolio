import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { TrendingUp, Award, Code, Clock, Target, Zap, Database, Brain } from "lucide-react";
// import { GitHubActivity } from "../components/GitHubActivity.jsx";
import { projects } from "../constants/projectsData.js";
import { certificates, coreCompetencies, techStack } from "../constants/aboutData.js";

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificateDomain, setSelectedCertificateDomain] = useState("All");
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const certificateDomains = useMemo(() => {
    const preferredOrder = [
      "AI/ML",
      "Cloud",
      "Data Analytics",
      "Development",
      "Hackathons",
      "Coding",
      "Other",
    ];

    const unique = Array.from(
      new Set(certificates.map((c) => String(c.domain ?? "").trim()).filter(Boolean))
    );

    unique.sort((a, b) => {
      const ia = preferredOrder.indexOf(a);
      const ib = preferredOrder.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    return ["All", ...unique];
  }, []);

  const filteredCertificates = useMemo(() => {
    if (selectedCertificateDomain === "All") return certificates;
    return certificates.filter((c) => c.domain === selectedCertificateDomain);
  }, [selectedCertificateDomain]);

  const visibleCertificates = useMemo(() => {
    if (showAllCertificates) return filteredCertificates;
    return filteredCertificates.slice(0, 3);
  }, [filteredCertificates, showAllCertificates]);

  const stats = useMemo(() => {
    const projectCount = projects.length;
    const featuredCount = projects.filter((p) => Boolean(p.featured)).length;

    const projectCategories = new Set(
      projects.map((p) => String(p.category ?? "").trim()).filter(Boolean)
    );

    const techFromAbout = techStack.flatMap((group) => group.items ?? []);
    const techFromProjects = projects.flatMap((p) => p.technologies ?? p.techStack ?? []);
    const uniqueTech = new Set(
      [...techFromAbout, ...techFromProjects].map((t) => String(t).trim()).filter(Boolean)
    );

    return [
      {
        icon: Code,
        value: String(projectCount),
        label: "Projects Showcased",
        description: "Projects listed in this portfolio",
        color: "from-blue-500 to-cyan-600",
      },
      {
        icon: Award,
        value: String(featuredCount),
        label: "Featured Projects",
        description: "Highlighted work with details and links",
        color: "from-amber-500 to-orange-600",
      },
      {
        icon: Brain,
        value: String(projectCategories.size),
        label: "Focus Areas",
        description: "AI/ML, analytics, and web development",
        color: "from-purple-500 to-pink-600",
      },
      {
        icon: Database,
        value: String(uniqueTech.size),
        label: "Technologies Listed",
        description: "Tools and frameworks used across projects",
        color: "from-emerald-500 to-teal-600",
      },
      {
        icon: TrendingUp,
        value: String(coreCompetencies.length),
        label: "Core Skills",
        description: "Competencies summarized in About",
        color: "from-rose-500 to-red-600",
      },
      {
        icon: Clock,
        value: "Updated",
        label: "Always Accurate",
        description: "Stats are computed from site content",
        color: "from-indigo-500 to-purple-600",
      },
    ];
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section 
      id="stats" 
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-xl"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Target className="h-4 w-4" />
            Portfolio Snapshot
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Stats That Are
            <span className="block text-primary">Actually Real</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            These numbers are calculated directly from what’s shown on this website (projects, categories, and tech stack).
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  variants={counterVariants}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Value */}
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-foreground mb-2"
                  variants={counterVariants}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies & Certificates */}
        <motion.div 
          className="bg-background/60 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              className="p-3 rounded-2xl bg-gradient-to-r from-primary to-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Skills & Certificates</h3>
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-full rounded-2xl bg-background/40 border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreCompetencies.map((competency, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-foreground font-medium">{competency}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="h-full rounded-2xl bg-background/40 border border-border p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Certificates</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Filter by domain to find relevant certificates
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 justify-start sm:justify-end">
                  <select
                    value={selectedCertificateDomain}
                    onChange={(e) => {
                      setSelectedCertificateDomain(e.target.value);
                      setShowAllCertificates(false);
                    }}
                    className="px-3 py-2 rounded-xl border border-border bg-background/60 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {certificateDomains.map((domain) => (
                      <option key={domain} value={domain}>
                        {domain}
                      </option>
                    ))}
                  </select>

                  {filteredCertificates.length > 3 ? (
                    <button
                      type="button"
                      onClick={() => setShowAllCertificates((prev) => !prev)}
                      className="shrink-0 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/15 transition-colors whitespace-nowrap"
                    >
                      {showAllCertificates ? "Show less" : "Show more"}
                    </button>
                  ) : null}
                </div>
              </div>

              {certificates.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Add your files under <span className="font-medium text-foreground">public/</span> and list them in{" "}
                  <span className="font-medium text-foreground">src/constants/aboutData.js</span>.
                </p>
              ) : (
                <div className="space-y-3">
                  {visibleCertificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.06 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold text-foreground leading-snug break-words line-clamp-2">
                            {cert.title}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {cert.issuer}
                            {cert.date ? ` • ${cert.date}` : ""}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col sm:flex-row gap-2">
                        <a
                          href={encodeURI(cert.fileUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90"
                        >
                          View
                        </a>
                        <a
                          href={encodeURI(cert.fileUrl)}
                          download
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl border border-border bg-background font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30"
                        >
                          Download
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* GitHub Activity removed as requested */}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Zap className="h-4 w-4" />
            Ready to discuss how I can contribute to your team
          </div>
        </motion.div>
      </div>
    </section>
  );
};
