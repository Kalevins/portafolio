import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Cards } from '@/layouts'
import { Footer, Header, Scrollbar, Card, AnimatedText, Timeline } from '@/components'
import { Experience, Project, Technology } from '@/types'
import { groupExperiencesByDate, technologies } from '@/utils'
import { GrommetIconsGithub, MaterialSymbolsWebAsset } from '@/assets/icons'
import { MenuContext } from '@/contexts'

import card1Image from '@/assets/images/card1.webp'
//import card2Image from '@/assets/images/card2.webp'
import card3Image from '@/assets/images/card3.webp'
import card4Image from '@/assets/images/card4.webp'
import card5Image from '@/assets/images/card5.webp'
import styles from './styles.module.css'

export const App = () => {
  const { t } = useTranslation(["pages-app"])
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const { selected } = useContext(MenuContext);
  const [experienceActive, setExperienceActive] = useState<Experience>({
    position: "",
    company: "",
    dateInit: "",
    dateEnd: "",
    description: [],
    technologies: [],
    level: 0
  });
  const [technologyActive, setTechnologyActive] = useState<Technology>({
    name: "",
    url: "",
    icon: () => <></>
  });
  const cards = 4;
  const positions = t("card1.title.positions")
  const experiences = groupExperiencesByDate(t("card2.experience") as unknown as Experience[])
  const projects = t("card3.projects") as unknown as Project[];

  useEffect(() => {
    setTechnologyActive(technologies[Object.keys(technologies)[Math.floor(Math.random() * Object.keys(technologies).length)]]);
  }, []);

  useEffect(() => {
    if(new Date().getHours() >= 18 || new Date().getHours() < 6) {
      document.documentElement.style.setProperty('--color-primary', 'rgb(74, 228, 255)');
      document.documentElement.style.setProperty('--color-primary-opacity', 'rgba(74, 228, 255, 0.9)');
    }
  }, []);

  useEffect(() => {
    handleClickScroll(selected);
  }, [selected]);

  const handleExperienceActive = useCallback((index: number) => {
    setExperienceActive(experiences[index]);
  }, [experiences]);

  const handleClickScroll = useCallback((index: number) => {
    if (ref.current) {
      ref.current.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
    }
  }, []);


  return (
    <main className={styles.main}>
      <Header />
      <Cards ref={ref}>
        <Card
          title={t("card1.sidebar")}
          imgBackground={card1Image}
        >
          <div className={styles.container} id={styles.card1}>
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
        <Card
          title={t("card2.sidebar")}
          imgBackground={card3Image}
        >
          <div className={styles.container} id={styles.card2}>
            <Timeline experiences={experiences} handleExperienceActive={handleExperienceActive} />
            <motion.div
              key={experienceActive.company}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1
                }
              }}
              className={styles.descriptionContainer}
            >
              <div className={styles.content}>
                <h3>{`${experienceActive.position} - ${experienceActive.company}`}</h3>
                <ul className={styles.description}>
                  {experienceActive.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.technologies}>
                {experienceActive.technologies.map((technology, index) => (
                  <div
                    key={index}
                    className={styles.technology}
                    onClick={() => window.open(technologies[technology]?.url, '_blank')}
                  >
                    {technologies[technology]?.icon({style: {width: '40px', height: '40px'}})}
                    <p>{technologies[technology]?.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Card>
        <Card
          title={t("card3.sidebar")}
          imgBackground={card4Image}
        >
          <div className={styles.container} id={styles.card3}>
            {projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <div className={styles.content}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className={styles.technologies}>
                  {project.technologies.map((technology, index) => (
                    <div
                      key={index}
                      className={styles.technology}
                      onClick={() => window.open(technologies[technology]?.url, '_blank')}
                    >
                      {technologies[technology]?.icon({style: {width: '40px', height: '40px'}})}
                      <p>{technologies[technology]?.name}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.links}>
                  {project?.repository && <a href={project.repository} target="_blank" rel="noreferrer"><GrommetIconsGithub/></a>}
                  {project?.url && <a href={project.url} target="_blank" rel="noreferrer"><MaterialSymbolsWebAsset/></a>}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title={t("card4.sidebar")}
          imgBackground={card5Image}
        >
          <div className={styles.container} id={styles.card4}>
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
                  className={styles.technology}
                  id={technologyActive.name === technology.name ? styles.active : ""}
                  onClick={() => window.open(technology.url, '_blank')}
                  onMouseEnter={() => setTechnologyActive(technology)}
                >
                  {technology?.icon({style: {width: '40px', height: '40px'}})}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Cards>
      <Scrollbar scrollYProgress={scrollYProgress} cards={cards} handleClickScroll={handleClickScroll}/>
      <Footer />
    </main>
  )
}
