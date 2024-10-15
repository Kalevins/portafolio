import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';

import { MenuContext } from '@/contexts';
import { GrommetIconsGithub, GrommetIconsLinkedinOption, GrommetIconsInstagram } from '@/assets/icons';

import logo from '@/assets/logos/logoBlanco.webp';
import styles from './styles.module.css';

const variantsNav = {
  open: {
    width: '300px',
    transition: {
      stiffness: 400,
      restDelta: 2
    }
  },
  closed: {
    width: '0px',
    transition: {
      stiffness: 400,
      damping: 40,
      delay: 0.5
    }
  }
};

const variantsUl = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 1000
      }
    }
  }
};

export const Header = (): ReactElement => {
  const { isOpen, selected, toggleMenu, selectMenu } = useContext(MenuContext);
  const { t } = useTranslation(["componentsHeader"]);

  const itemsMenu = t("menu") as unknown as string[];

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
        <img src={logo} alt="Logo" />
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
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variantsNav}
        >
          <motion.ul
            variants={variantsUl}
          >
            {itemsMenu.map((item, index) => (
              <motion.li
                key={item}
                variants={variantsLi}
              >
                <h3
                  className={selected === index ? styles.selected : ''}
                  onClick={() => {
                    selectMenu(index);
                    toggleMenu();
                  }}
                >
                  {item}
                </h3>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </header>
  )
}