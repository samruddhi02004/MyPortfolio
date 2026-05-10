import { motion, AnimatePresence } from 'framer-motion';
import { Code, Sparkles, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  const loadingSteps = [
    'Loading components',
    'Fetching data',
    'Optimizing experience',
    'Almost ready'
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  useEffect(() => {
    const textIndex = Math.min(Math.floor((progress / 100) * loadingSteps.length), loadingSteps.length - 1);
    setLoadingText(loadingSteps[textIndex]);
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>

          {/* Loading Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Icon */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="h-12 w-12 text-white" />
                </motion.div>
                
                {/* Orbiting dots */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
                    style={{ transformOrigin: '0 0' }}
                    animate={{
                      rotate: 360,
                      translateX: 60,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 1,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Samruddhi Gaikwad
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Software Engineer & Data Scientist
            </motion.p>

            {/* Loading Progress */}
            <motion.div
              className="w-full max-w-md mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{loadingText}</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Sparkles */}
            <motion.div
              className="absolute top-10 right-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 left-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-purple-600" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Simple loading spinner for smaller components
export const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <motion.div
        className={`${sizeClasses[size]} text-primary`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      {text && (
        <span className="text-sm text-muted-foreground">{text}</span>
      )}
    </div>
  );
};

// Skeleton loader for content
export const SkeletonLoader = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-muted rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            width: i === lines - 1 ? '60%' : '100%',
          }}
        />
      ))}
    </div>
  );
};
