import { useState, useEffect, useRef } from 'react';

export const useTypingAnimation = (texts, options = {}) => {
  const {
    speed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000,
    loop = true,
    cursor = '|',
    showCursor = true
  } = options;

  const initialText = Array.isArray(texts) ? (texts[0] ?? '') : '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(initialText);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const list = Array.isArray(texts) ? texts : [];
    const fullText = list[currentIndex] ?? '';

    if (!fullText) {
      setCurrentText('');
      return;
    }

    // Finished typing: wait, then start deleting
    if (!isDeleting && currentText === fullText) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    }

    // Finished deleting: advance to next text
    if (isDeleting && currentText === '') {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => {
          if (loop) return (prevIndex + 1) % list.length;
          return Math.min(prevIndex + 1, list.length - 1);
        });
      }, 120);
      return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    }

    const nextText = isDeleting
      ? fullText.slice(0, Math.max(0, currentText.length - 1))
      : fullText.slice(0, currentText.length + 1);

    timeoutRef.current = setTimeout(() => {
      setCurrentText(nextText);
    }, isDeleting ? deleteSpeed : speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration, loop]);

  const displayText = showCursor ? currentText + cursor : currentText;

  return { displayText, currentText, currentIndex, isTyping: !isDeleting };
};

export const useMultiLineTyping = (lines, options = {}) => {
  const {
    speed = 50,
    linePause = 500,
    finalPause = 3000,
    loop = true,
    showCursor = true
  } = options;

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentLine = lines[currentLineIndex];

    const handleTyping = () => {
      if (isPaused) {
        setIsPaused(false);
        if (currentLineIndex === lines.length - 1) {
          if (loop) {
            setCurrentLineIndex(0);
            setCurrentCharIndex(0);
            setIsComplete(false);
          } else {
            setIsComplete(true);
          }
        } else {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
        return;
      }

      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Line complete, pause before next line
        const pauseDuration = currentLineIndex === lines.length - 1 ? finalPause : linePause;
        setIsPaused(true);
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
        }, pauseDuration);
      }
    };

    if (!isComplete) {
      timeoutRef.current = setTimeout(handleTyping, speed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLineIndex, currentCharIndex, isPaused, isComplete, lines, speed, linePause, finalPause, loop]);

  const typedLines = lines.slice(0, currentLineIndex + 1).map((line, index) => {
    if (index < currentLineIndex) {
      return line;
    } else if (index === currentLineIndex) {
      return line.slice(0, currentCharIndex) + (showCursor && !isComplete ? ' ' : '');
    }
    return '';
  });

  return { typedLines, isComplete, currentLineIndex, currentCharIndex };
};
