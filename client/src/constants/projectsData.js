export const projects = [
   {
    id: 3,
    title: "Portfolio Website",
    description: "Engineered responsive portfolio website using React.js and modern web technologies. Implemented dark mode functionality, optimized performance achieving 95+ Lighthouse score, and integrated contact form with email automation. Deployed on Vercel with CI/CD pipeline.",
    image: "/projects/portfolio.png",
    video: "/videos/MyPortfolio.mp4",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    features: ["Responsive design", "Dark mode", "Smooth animations", "Contact form"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/MyPortfolio",
    category: "Web Development",
    status: "Completed",
    highlights: ["95+ Lighthouse score", "CI/CD pipeline", "Mobile-first design"]
  },
  {
    id: 11,
    title: "Appointment Booking System (Full Stack)",
    description: "Designed and developed a scalable, full-stack appointment booking platform with user authentication, business management, and scheduling. Built a responsive, component-driven UI using React, TypeScript, and Vite with protected authentication flows. Engineered RESTful APIs with Express and TypeScript, implementing robust authentication, modular route handlers, and secure business logic. Integrated Drizzle ORM for schema management and automated seeding, ensuring data integrity and scalability. Architected and maintained a monorepo with pnpm workspaces, automating build/test/deployment workflows for both frontend and backend.",
    image: "https://raw.githubusercontent.com/samruddhi02004/Appointment-Booking-System/main/artifacts/appointment-app/public/opengraph.jpg",
    videoPath: "Demo/bookslot_end_to_end_demo.mp4",
    videoPoster: "https://raw.githubusercontent.com/samruddhi02004/Appointment-Booking-System/main/artifacts/appointment-app/public/opengraph.jpg",
    techStack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "Drizzle ORM", "pnpm Workspaces", "Monorepo"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/Appointment-Booking-System",
    category: "Web Development",
    featured: true,
    status: "Completed",
    highlights: ["Protected authentication flows", "REST APIs with modular routes", "Drizzle ORM schema + seeding", "Monorepo via pnpm workspaces"]
  },
  {
    id: 13,
    title: "Chat App",
    category: "Web Development",
    description: "Developed a real-time chat application with messaging, user sessions, and responsive UI. Designed for low-latency communication and scalable message delivery using event-driven sockets.",
    image: "/projects/chat-app.png",
    videoPath: "Demo/Chat-app.mp4",
    videoPoster: "/projects/chat-app.png",
    techStack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    demoUrl: "https://github.com/samruddhi02004/chat-app/blob/main/Demo/Chat-app.mp4",
    githubUrl: "https://github.com/samruddhi02004/chat-app",
    status: "Completed",
    highlights: ["Real-time messaging", "User sessions", "Responsive UI"]
  },
  
  {
    id: 6,
    title: "Interview Emotion Analyzer",
    category: "Artificial Intelligence",
    description: "Built AI-powered interview feedback system using computer vision and speech analysis. Implemented facial expression recognition with OpenCV and DeepFace, voice pattern analysis with TensorFlow, and real-time emotion classification. Created React dashboard for visualization and comprehensive reporting system.",
    image: "/projects/emotion-analyzer.png",
    techStack: ["Python", "OpenCV", "TensorFlow", "DeepFace", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/emotion-analyzer",
    featured: true,
    keywords: ["Computer Vision", "Emotion Recognition", "TensorFlow", "OpenCV", "DeepFace", "React", "AI", "Machine Learning", "Speech Analysis"],
    tags: ["Python", "OpenCV", "TensorFlow", "DeepFace", "React", "Computer Vision"],
    status: "Live",
    highlights: ["Real-time emotion detection", "Computer vision integration", "Comprehensive reporting"]
  },
  {
    id: 7,
    title: "Personalized Learning Style Predictor",
    category: "Artificial Intelligence",
    description: "Engineered machine learning system to predict optimal learning styles based on user behavior patterns and performance metrics. Developed classification models using TensorFlow and Scikit-learn, implemented data preprocessing pipeline with NumPy and Pandas, and created interactive Streamlit dashboard for visualization and recommendations.",
    image: "/projects/learning-predictor.png",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/learning-predictor",
    featured: true,
    keywords: ["Machine Learning", "TensorFlow", "Scikit-learn", "Classification", "Data Analysis", "Streamlit", "Python", "Learning Analytics"],
    tags: ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Streamlit", "Machine Learning"],
    status: "Live",
    highlights: ["Personalized recommendations", "Behavior pattern analysis", "Interactive dashboard"]
  },

  // Data Analytics Projects
  {
    id: 8,
    title: "Placement Trends Analyzer",
    category: "Data Analytics",
    description: "Developed comprehensive analytics dashboard for campus placement data analysis. Implemented statistical analysis of placement trends, salary patterns, company preferences, and success rates. Used Python for data processing, Power BI and Tableau for visualization, SQL for data management, and Pandas for data manipulation. Generated actionable insights for career services.",
    image: "/projects/placement-analyzer.png",
    techStack: ["Python", "Power BI", "Tableau", "SQL", "Pandas"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/placement-analyzer",
    featured: true,
    keywords: ["Data Analytics", "Power BI", "Tableau", "SQL", "Python", "Pandas", "Dashboard", "Statistical Analysis", "Data Visualization"],
    tags: ["Python", "Power BI", "Tableau", "SQL", "Pandas", "Data Analytics"],
    status: "Live",
    highlights: ["Statistical trend analysis", "Multi-platform visualization", "Career insights generation"]
  },
  {
    id: 9,
    title: "Social Media Productivity Analyzer",
    category: "Data Analytics",
    description: "Built data analytics platform to analyze social media usage patterns and productivity metrics. Implemented big data processing with Apache Spark, created interactive visualizations with Plotly and Matplotlib, developed REST API with FastAPI, and performed statistical analysis on user behavior patterns. Provided actionable productivity recommendations.",
    image: "/projects/social-analyzer.png",
    techStack: ["Python", "Apache Spark", "Matplotlib", "Plotly", "FastAPI"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/social-analyzer",
    featured: true,
    keywords: ["Big Data", "Apache Spark", "Data Analytics", "FastAPI", "Plotly", "Python", "Social Media Analytics", "Productivity Analysis"],
    tags: ["Python", "Apache Spark", "Matplotlib", "Plotly", "FastAPI", "Big Data"],
    status: "Live",
    highlights: ["Big data processing", "Productivity insights", "REST API development"]
  },
  

  // Web + AI Projects (added from resume)
  {
    id: 12,
    title: "Collab Whiteboard",
    category: "Web Development",
    description: "Built a real-time collaborative whiteboard for multi-user drawing and brainstorming. Implemented live sync for strokes and board state, user presence, and a clean canvas-based UI designed for fast interaction.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["React", "Node.js", "Socket.IO", "Canvas API", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/Collab-Whiteboard",
    status: "Live",
    highlights: ["Real-time collaboration", "Canvas drawing tools", "Room-based sessions"]
  },
  
  {
    id: 14,
    title: "MERN E-Commerce",
    category: "Web Development",
    description: "Created a full-stack e-commerce platform with product browsing, cart flow, and admin-ready structure. Implemented reusable UI components and backend APIs for core commerce operations.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/MERN_ECOMMERCE",
    status: "Live",
    highlights: ["Product + cart flow", "RESTful backend", "Scalable MERN structure"]
  },
  {
    id: 15,
    title: "Image Captioning",
    category: "Artificial Intelligence",
    description: "Implemented an image captioning pipeline to generate natural-language descriptions for images. Combined computer vision feature extraction with sequence modeling to produce fluent captions.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/image-Captioning",
    status: "Live",
    highlights: ["Vision + NLP pipeline", "Sequence-based caption generation", "Dataset preprocessing"]
  },
  {
    id: 16,
    title: "Fake News Recognition",
    category: "Artificial Intelligence",
    description: "Built an NLP-based classifier to detect fake vs. real news using text preprocessing and supervised learning. Evaluated models with standard classification metrics and optimized the feature pipeline for better generalization.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/Fake_News_Recognition",
    status: "Live",
    highlights: ["Text preprocessing pipeline", "Supervised classification", "Precision/recall evaluation"]
  },
  {
    id: 17,
    title: "Face Recognition Attendance System",
    category: "Artificial Intelligence",
    description: "Developed an attendance system that marks presence using face detection and recognition. Implemented image capture, face encoding, and recognition-based logging to streamline attendance tracking.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["Python", "OpenCV", "Face Recognition", "Computer Vision", "Data Logging"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/face-recognition-attendance-system",
    status: "Live",
    highlights: ["Face detection + recognition", "Automated attendance logging", "Dataset capture workflow"]
  },

  // Data Analytics Projects (added from resume)
  {
    id: 18,
    title: "Customer Trends Data Analysis",
    category: "Data Analytics",
    description: "Built an end-to-end analytics workflow with data cleaning, SQL analysis, KPI tracking, and interactive dashboards. Analyzed customer purchasing behavior and sales trends to generate actionable insights and segmentation-focused reporting.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["Python", "SQL", "Power BI", "EDA", "Data Cleaning"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/customer-trends-data-analysis",
    status: "Live"
  },
  {
    id: 19,
    title: "Retail Data Engineering Pipeline",
    category: "Data Analytics",
    description: "Developed an end-to-end ETL pipeline using Databricks and Spark to consolidate retail datasets into a lakehouse-style architecture. Implemented medallion-style ingestion and transformation flows and produced BI-ready outputs for reporting.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["Databricks", "PySpark", "Python", "SQL", "Amazon S3"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/retail-data-engineering-pipeline",
    status: "Live"
  },
  {
    id: 20,
    title: "SQL Pizza Sales Analytics",
    category: "Data Analytics",
    description: "Performed end-to-end pizza sales analysis using SQL joins, aggregations, subqueries, and KPI metrics. Generated analytical reports on revenue contribution, order trends, category performance, and top-selling items to identify growth opportunities.",
    image: "/api/placeholder/400/300",
    videoPath: "Demo/demo.mp4",
    videoPoster: "/api/placeholder/400/300",
    techStack: ["SQL", "MySQL", "Power BI", "KPI Analysis", "Reporting"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/sql-pizza-sales-analytics",
    status: "Live"
  }
];

export const projectsContent = {
  title: "Project Showcase",
  subtitle: "Innovative solutions across Full Stack Development, AI/ML, and Data Analytics"
};

export const projectCategories = [
  { id: "all", label: "All Projects", color: "bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600" },
  { id: "fullstack", label: "Full Stack Development", color: "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-600" },
  { id: "ai", label: "AI / Machine Learning", color: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600" },
  { id: "analytics", label: "Data Analytics", color: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600" }
];
