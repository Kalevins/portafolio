import { FC } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Cards: FC<Props> = ({ children, ref }) => {
  return  (
    <div className={styles.cards} ref={ref}>
      {children}
    </div>
  )
}