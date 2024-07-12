import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Props } from './types';

export const AnimatedText: FC<Props> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar el texto cada 2 segundos (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    // Limpiar el intervalo al desmontar el componente
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
