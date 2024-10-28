import { forwardRef } from 'react';
import type { ReactElement, Ref } from 'react';

import { Props } from './types';
import styles from './styles.module.css';

export const Cards = forwardRef(({ children }: Props, ref: Ref<HTMLDivElement>): ReactElement => {
  return  (
    <div className={styles.cards} ref={ref}>
      {children}
    </div>
  )
})