import { FC, useRef, useState } from 'react';

import styles from './styles.module.css';
import { useMotionValueEvent } from 'framer-motion';

import { Props } from './types';

export const Scrollbar: FC<Props> = ({ scrollYProgress, cards, handleClickScroll }) => {
  const [isActive, setIsActive] = useState<number>(0)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsActive(Math.round(value * (cards - 1)))
  })

  return  (
    <nav className={styles.scrollNav}>
      {Array.from({ length: cards }).map((_, index) => (
        <button
          key={index}
          ref={el => buttonsRef.current[index] = el}
          id={isActive === index ? styles.active : ''}
          onClick={() => handleClickScroll(index)}
        />
      ))}
    </nav>
  )
}