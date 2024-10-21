import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

import { Card, AnimatedText } from '@/components'
import { Positions } from '@/types'

import cardImage from '@/assets/images/card1.webp'
import styles from './styles.module.css'

export const Card1 = (): ReactElement => {
  const { t } = useTranslation(["pagesApp"])
  const positions = t("card1.title.positions") as Positions;

  return (
    <Card
      title={t("card1.sidebar")}
      imgBackground={cardImage}
    >
      <div className={styles.container}>
        <small>{t("card1.subtitle")}</small>
        <div className={styles.textContainer}>
          <h1><span>{t("card1.title.hello")}</span>{t("card1.title.name")}</h1>
          <div>
            <AnimatedText texts={positions} />
          </div>
        </div>
        <div className={styles.line}/>
      </div>
    </Card>
  )
}
