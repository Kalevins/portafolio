import type { ReactElement } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Cards = ({ children, innerRef }: Props): ReactElement => {
  return  (
    <div className={styles.cards} ref={innerRef}>
      {children}
    </div>
  )
}