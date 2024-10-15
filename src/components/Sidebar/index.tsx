import type { ReactElement } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Sidebar = ({ title }: Props): ReactElement => {
  return  (
    <div className={styles.sidebar}>
      <span>{title}</span>
    </div>
  )
}