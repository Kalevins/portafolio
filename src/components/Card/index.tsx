import type { ReactElement } from 'react';

import { Sidebar } from '@/components';

import { Props } from './types';
import styles from './styles.module.css';

export const Card = ({ title, imgBackground, children }: Props): ReactElement => {
  return  (
    <section className={styles.card}>
      {imgBackground && (
        <img
          className={styles.background}
          src={imgBackground}
          alt={title}
        />
      )}
      <Sidebar title={title}/>
      {children}
    </section>
  )
}