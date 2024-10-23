import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

import { Card, TechnologyCircle } from '@/components'
import { Projects } from '@/types'
import { technologies, technologiesOrder } from '@/utils'
import { GrommetIconsGithub, MaterialSymbolsWebAsset } from '@/assets/icons'

import cardImage from '@/assets/images/card4.webp'
import styles from './styles.module.css'

export const Card3 = (): ReactElement => {
  const { t } = useTranslation(["card3"])
  const projects = t("projects") as Projects;

  return (
    <Card
      title={t("sidebar")}
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
              {project.technologies
                .sort((a, b) => technologiesOrder.indexOf(a) - technologiesOrder.indexOf(b))
                .map((technology, index) => (
                  <TechnologyCircle
                    key={index}
                    name={technologies[technology].name}
                    url={technologies[technology].url}
                    icon={technologies[technology].icon}
                    isActive={false}
                  />
                ))
              }
            </div>
            <div className={styles.links}>
              {project?.repositories?.front?.show && project?.repositories?.front?.url && <a href={project.repositories.front.url} target="_blank" rel="noreferrer"><GrommetIconsGithub/></a>}
              {project?.repositories?.back?.show && project?.repositories?.front?.url && <a href={project.repositories.back.url} target="_blank" rel="noreferrer"><GrommetIconsGithub/></a>}
              {project?.website?.show && project?.website?.url && <a href={project.website.url} target="_blank" rel="noreferrer"><MaterialSymbolsWebAsset/></a>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
