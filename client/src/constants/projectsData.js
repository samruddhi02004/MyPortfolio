export const projects = [
  {
    id: 1,
    title: "Data Analytics Dashboard",
    description: "Built comprehensive sales analytics dashboard processing 10K+ daily transactions. Implemented real-time data visualization using React.js and Power BI, reducing reporting time by 75%. Developed SQL queries for complex data aggregation and created interactive filtering system for 50+ business metrics.",
    image: "/api/placeholder/400/300",
    technologies: ["React.js", "Power BI", "Python", "SQL"],
    features: ["Real-time analytics", "Interactive charts", "Data filtering", "Export functionality"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Data Analytics",
    highlights: ["Processed 10K+ daily transactions", "Reduced reporting time by 75%", "50+ business metrics tracked"]
  },
  {
    id: 2,
    title: "Machine Learning Predictor",
    description: "Developed customer churn prediction model achieving 85% accuracy using Python and Scikit-learn. Implemented feature engineering pipeline processing 100K+ customer records, deployed model via Flask API, and created automated evaluation system with precision, recall, and F1-score metrics.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: ["Feature engineering", "Model evaluation", "Data preprocessing", "Visualization"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Machine Learning",
    highlights: ["85% prediction accuracy", "100K+ records processed", "Automated ML pipeline"]
  },
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
    highlights: ["95+ Lighthouse score", "CI/CD pipeline", "Mobile-first design"]
  },
  {
    id: 4,
    title: "Sales Forecasting System",
    description: "Created time series forecasting system using TensorFlow to predict sales trends with 90% accuracy. Implemented ARIMA and LSTM models, automated data preprocessing pipeline, and generated monthly forecasts reducing inventory costs by 30%.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "TensorFlow", "Matplotlib", "Jupyter"],
    features: ["Time series analysis", "Trend prediction", "Data visualization", "Model training"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Data Analytics",
    highlights: ["90% forecasting accuracy", "30% inventory cost reduction", "ARIMA & LSTM models"]
  },
  {
    id: 5,
    title: "Fake Job Posting Detector",
    category: "Artificial Intelligence",
    description: "Developed machine learning classification system to identify fraudulent job postings with 92% accuracy. Implemented natural language processing, feature engineering, and sentiment analysis using Python, Scikit-learn, and NLTK. Created Flask web API for real-time prediction and deployed model with comprehensive testing framework.",
    image: "/projects/fake-job-detector.png",
    techStack: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/fake-job-detector",
    featured: true,
    keywords: ["Machine Learning", "NLP", "Classification", "Fraud Detection", "Python", "Scikit-learn", "Flask", "Feature Engineering"],
    tags: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask", "NLP", "Machine Learning"],
    status: "Live",
    highlights: ["92% detection accuracy", "Real-time API deployment", "NLP feature engineering"]
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
  {
    id: 10,
    title: "Environmental Data Insight Dashboard",
    category: "Data Analytics",
    description: "Engineered real-time environmental monitoring dashboard for air quality and pollution analysis. Implemented data pipeline with Apache Airflow, created interactive visualizations with Tableau, managed time-series data with PostgreSQL, and deployed containerized application with Docker. Processed sensor data and generated environmental insights.",
    image: "/projects/environmental-dashboard.png",
    techStack: ["Python", "Tableau", "PostgreSQL", "Apache Airflow", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/samruddhi02004/environmental-dashboard",
    featured: true,
    keywords: ["Environmental Analytics", "Tableau", "PostgreSQL", "Apache Airflow", "Docker", "Python", "Real-time Data", "IoT", "Data Pipeline"],
    tags: ["Python", "Tableau", "PostgreSQL", "Apache Airflow", "Docker", "IoT"],
    status: "Live",
    highlights: ["Real-time monitoring", "IoT sensor integration", "Containerized deployment"]
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
