import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

import { Card, TechnologyCircle } from '@/components'
import { Projects } from '@/types'
import { technologies } from '@/utils'
import { GrommetIconsGithub, MaterialSymbolsWebAsset } from '@/assets/icons'

import cardImage from '@/assets/images/card4.webp'
import styles from './styles.module.css'

export const Card3 = (): ReactElement => {
  const { t } = useTranslation(["pagesApp"])
  const projects = t("card3.projects") as Projects;

  return (
    <Card
      title={t("card3.sidebar")}
      imgBackground={cardImage}
    >
      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.content}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.technologies}>
              {project.technologies.map((technology, index) => (
                <TechnologyCircle
                  key={index}
                  name={technologies[technology].name}
                  url={technologies[technology].url}
                  icon={technologies[technology].icon}
                  isActive={false}
                />
              ))}
            </div>
            <div className={styles.links}>
              {project?.repositories?.front && <a href={project.repositories.front} target="_blank" rel="noreferrer"><GrommetIconsGithub/></a>}
              {project?.repositories?.back && <a href={project.repositories.back} target="_blank" rel="noreferrer"><GrommetIconsGithub/></a>}
              {project?.url && <a href={project.url} target="_blank" rel="noreferrer"><MaterialSymbolsWebAsset/></a>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}