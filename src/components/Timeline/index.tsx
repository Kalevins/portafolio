import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { stringDate } from '@/utils';

import { Props } from './types';
import styles from './styles.module.css';

export const Timeline: FC<Props> = ({ experiences, handleExperienceActive }) => {
  const { t, i18n } = useTranslation('components-timeline');
  const [isActive, setIsActive] = useState<number>(0);

  useEffect(() => {
    handleExperienceActive(isActive);
  }, [isActive, i18n.language]);

  return (
    <div className={styles.timeline}>
      {experiences.map((experience, index) => (
        <div key={index} className={styles.experienceContainer}>
          <div className={`${styles.line} ${styles[`level${experience.level}`]}`} id={experiences[index - 1]?.level !== experience.level ? styles.first : experiences[index + 1]?.level !== experience.level ? styles.last : ''}/>
          <div
            className={styles.experience}
            id={isActive === index ? styles.active : ''}
            onMouseEnter={() => setIsActive(index)}
          >
            <h3>{experience.position}</h3>
            <h4>{experience.company}</h4>
            <p>{stringDate(experience.dateInit, i18n.language)} - {experience.dateEnd ? stringDate(experience.dateEnd, i18n.language) : t('present')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
