import { useTranslation } from 'react-i18next';
import { useContext, type ReactElement } from 'react';

import { MenuContext } from '@/contexts';

import styles from './styles.module.css';

export const Footer = (): ReactElement => {
  const { i18n } = useTranslation();
  const { isOpen } = useContext(MenuContext);

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
            className={`${styles.transparent} ${isOpen ? styles.open : styles.closed}`}
            id={i18n.language === code ? styles.active : ''}
          >
            {name}
          </button>
        ))}
      </div>
    </footer>
  )
}