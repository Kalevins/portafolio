import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { MenuContext } from '@/contexts';
import { GrommetIconsGithub, GrommetIconsLinkedinOption, GrommetIconsInstagram } from '@/assets/icons';
import styles from './styles.module.css';

export const Header: FC = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const { t } = useTranslation(["components-header"]);

  const social = [
    {
      id: 1,
      icon: <GrommetIconsGithub />,
      url: 'https://github.com/Kalevins'
    },
    {
      id: 2,
      icon: <GrommetIconsLinkedinOption />,
      url: 'https://www.linkedin.com/in/kalevin/'
    },
    {
      id: 3,
      icon: <GrommetIconsInstagram />,
      url: 'https://www.instagram.com/kalevins/'
    }
  ]

  return  (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/src/assets/logos/logoBlanco.webp" alt="Logo" />
        <div className={styles.texts}>
          <p>Kevin Muñoz Rengifo</p>
          <small>{t("position")}</small>
        </div>
      </div>
      <div className={styles.social}>
        {social.map(({id, icon, url}) => (
          <button
            key={id}
            className={styles.transparent}
            onClick={() => window.open(url, '_blank')}
          >
            {icon}
          </button>
        ))}
      </div>
      <div className={styles.menu} id={isOpen ? styles.active : styles.inactive}>
        <div className={styles.hamburguer} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}