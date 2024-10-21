import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

import { Card, TechnologyCircle } from '@/components'
import { Technology } from '@/types'
import { technologies } from '@/utils'

import cardImage from '@/assets/images/card5.webp'
import styles from './styles.module.css'

export const Card4 = (): ReactElement => {
  const { t } = useTranslation(["pagesApp"])

  const [technologyActive, setTechnologyActive] = useState<Technology>({
    name: "",
    url: "",
    icon: () => <></>
  });

  useEffect(() => {
    setTechnologyActive(technologies[Object.keys(technologies)[Math.floor(Math.random() * Object.keys(technologies).length)]]);
  }, []);

  return (
    <Card
      title={t("card4.sidebar")}
      imgBackground={cardImage}
    >
      <div className={styles.container}>
        <motion.div
          key={technologyActive.name}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1
            }
          }}
          className={styles.choiceTechnology}
        >
          <h1>{technologyActive.name}</h1>
          {technologyActive.icon({})}
        </motion.div>
        <div className={styles.technologies}>
          {Object.values(technologies).map((technology, index) => (
            <div
              key={index}
              onMouseEnter={() => setTechnologyActive(technology)}
            >
              <TechnologyCircle
                name={""}
                url={technology.url}
                icon={technology.icon}
                isActive={technology.name === technologyActive.name}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
