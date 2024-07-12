import { FC } from 'react';

import { Sidebar } from '@/components';

import { Props } from './types';
import styles from './styles.module.css';

export const Card: FC<Props> = ({ title, imgBackground, children }) => {
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