import type { ReactElement } from 'react'

import { Props } from './types'
import styles from './styles.module.css'

export const TechnologyCircle = ({ name, url, icon, isActive }: Props): ReactElement => {
  return (
    <div
      className={styles.technology}
      id={isActive ? styles.active : ''}
      onClick={() => window.open(url, '_blank')}
    >
      {icon({ style: { width: '40px', height: '40px' } })}
      {name && <p>{name}</p>}
    </div>
  )
}
