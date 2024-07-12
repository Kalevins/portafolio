import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

export const Footer: FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      name: "ENG",
      code: "en"
    },
    {
      name: "ESP",
      code: "es"
    }
  ]

  return  (
    <footer className={styles.footer}>
      <small>© Kalevin {new Date().getFullYear()}</small>
      <div className={styles.buttonsContainer}>
        {languages.map(({ name, code }) => (
          <button
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className={styles.transparent}
            id={i18n.language === code ? styles.active : ''}
          >
            {name}
          </button>
        ))}
      </div>
    </footer>
  )
}