import { useEffect, useRef, useState } from 'react';

// Enhanced intersection observer hook for performance optimization
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true,
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
        
        if (!defaultOptions.triggerOnce) {
          setHasIntersected(entry.isIntersecting);
        }
      },
      defaultOptions
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Hook for lazy loading components
export const useLazyLoad = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold });

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isIntersecting, isLoaded]);

  return { ref, isLoaded };
};

// Hook for staggered animations
export const useStaggeredAnimation = (items = [], delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const timers = items.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(prev => new Set(prev).add(index));
      }, index * delay)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [items.length, delay]);

  return visibleItems;
};
