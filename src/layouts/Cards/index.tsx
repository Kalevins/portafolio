import type { ReactElement } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Cards = ({ children, ref }: Props): ReactElement => {
  return  (
    <div className={styles.cards} ref={ref}>
      {children}
    </div>
  )
}