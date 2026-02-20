import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";

import { Card, Timeline, TechnologyCircle } from "@/components";
import { Experience, Experiences } from "@/types";
import {
  groupExperiencesByDate,
  technologies,
  technologiesOrder,
} from "@/utils";

import cardImage from "@/assets/images/card3.webp";
import styles from "./styles.module.css";

export const Card2 = (): ReactElement => {
  const { t } = useTranslation(["card2"]);
  const [experienceActive, setExperienceActive] = useState<Experience>({
    position: "",
    company: "",
    dateInit: "",
    dateEnd: "",
    website: {
      url: "",
      show: false,
    },
    description: [],
    technologies: [],
    level: 0,
  });
  const experiences = groupExperiencesByDate(t("experience") as Experiences);

  const handleExperienceActive = useCallback(
    (index: number) => {
      setExperienceActive(experiences[index]);
    },
    [experiences],
  );

  return (
    <Card title={t("sidebar")} imgBackground={cardImage}>
      <div className={styles.container}>
        <Timeline
          experiences={experiences}
          handleExperienceActive={handleExperienceActive}
        />
        <motion.div
          key={experienceActive.company}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
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
            {experienceActive.technologies
              .sort(
                (a, b) =>
                  technologiesOrder.indexOf(a) - technologiesOrder.indexOf(b),
              )
              .map((technology, index) => (
                <TechnologyCircle
                  key={index}
                  name={technologies[technology].name}
                  url={technologies[technology].url}
                  icon={technologies[technology].icon}
                  isActive={false}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </Card>
  );
};
