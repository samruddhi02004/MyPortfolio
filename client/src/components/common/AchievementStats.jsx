"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Code, Award, Briefcase, Target } from "lucide-react";

export const AchievementStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: "15+",
      label: "Projects Delivered",
      icon: Briefcase,
      description: "Full-stack applications and AI solutions",
      color: "from-violet-500 to-indigo-600"
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: TrendingUp,
      description: "Software development and AI/ML",
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: "95%",
      label: "Code Quality",
      icon: Code,
      description: "Clean, maintainable, tested code",
      color: "from-green-500 to-emerald-600"
    },
    {
      number: "8+",
      label: "Certifications",
      icon: Award,
      description: "Industry-recognized credentials",
      color: "from-orange-500 to-yellow-600"
    },
    {
      number: "92%",
      label: "Client Satisfaction",
      icon: Users,
      description: "Project delivery success rate",
      color: "from-pink-500 to-rose-600"
    },
    {
      number: "50K+",
      label: "Lines of Code",
      icon: Target,
      description: "Production code written",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const StatCard = ({ stat, index }) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative"
    >
      <div className="glass-card p-8 text-center hover-lift border-0">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-10`} />
          <div className={`absolute inset-0 rounded-2xl border border-${stat.color.split(' ')[0]}-500/30`} />
        </div>

        {/* Icon */}
        <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
          <stat.icon className="w-8 h-8" />
        </div>

        {/* Number */}
        <motion.div 
          className="text-4xl md:text-5xl font-bold gradient-text mb-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1 + 0.3,
            type: "spring"
          }}
        >
          {stat.number}
        </motion.div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {stat.description}
        </p>

        {/* Animated Underline */}
        <motion.div 
          className="mt-4 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : {}}
          transition={{ 
            duration: 0.8,
            delay: index * 0.1 + 0.5
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-600/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
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
            <TrendingUp className="w-4 h-4" />
            Professional Stats
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Key Achievements & Metrics
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quantified impact through successful project deliveries and technical excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
