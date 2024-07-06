import { FC } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Sidebar: FC<Props> = ({ title }) => {
  return  (
    <div className={styles.sidebar}>
      <span>{title}</span>
    </div>
  )
}