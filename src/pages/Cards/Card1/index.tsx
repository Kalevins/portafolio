import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

import { Card, AnimatedText } from '@/components'
import { Positions } from '@/types'

import cardImage from '@/assets/images/card1.webp'
import styles from './styles.module.css'

export const Card1 = (): ReactElement => {
  const { t } = useTranslation(["card1"])
  const positions = t("title.positions") as Positions;

  return (
    <Card
      title={t("sidebar")}
      imgBackground={cardImage}
    >
      <div className={styles.container}>
        <small>{t("subtitle")}</small>
        <div className={styles.textContainer}>
          <h1><span>{t("title.hello")}</span>{t("title.name")}</h1>
          <div>
            <AnimatedText texts={positions} />
          </div>
        </div>
        <div className={styles.line}/>
      </div>
    </Card>
  )
}
