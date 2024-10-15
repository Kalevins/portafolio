import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactElement } from 'react';

import { Props } from './types';

export const AnimatedText = ({ texts }: Props): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.h1
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute" }}
      >
        {texts[currentIndex]}
      </motion.h1>
    </AnimatePresence>
  );
};

export default AnimatedText;
