import { useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { useMotionValueEvent } from 'framer-motion';

import styles from './styles.module.css';

import { Props } from './types';

export const Scrollbar = ({ scrollYProgress, cards, handleClickScroll }: Props): ReactElement => {
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