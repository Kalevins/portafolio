import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  SiGmail,
} from "react-icons/si";

import { useActiveSlide } from '@/contexts';

export function Home() {

  const { t } = useTranslation(['home'])
  const { changeSlides } = useActiveSlide()

  useEffect(() => {
    changeSlides([
      {
        light: true,
        texts: {
          name: t('traductions.0.name'),
          title: [
            t('traductions.0.title.0'),
            t('traductions.0.title.1'),
          ],
          description: [
            {
              text: t('traductions.0.description.0'),
              icon: <></>,
              link: null,
            },
            {
              text: t('traductions.0.description.1'),
              icon: <></>,
              link: null,
            }
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./icons/logoNegro.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.1.name'),
          title: [
            t('traductions.1.title.0'),
          ],
          description: [
            {
              text: t('traductions.1.description.0'),
              icon: <></>,
              link: null,
            },
          ],
          buttonText: t('traductions.1.button'),
          buttonLink: "/Works",
          repository: null,
          image: "./images/home/work.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.2.name'),
          title: [
            t('traductions.2.title.0'),
          ],
          description: [
            {
              text: t('traductions.2.description.0'),
              icon: <></>,
              link: null,
            },
          ],
          buttonText: t('traductions.2.button'),
          buttonLink: "/Skills",
          repository: null,
          image: "./images/home/skills.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.3.name'),
          title: [
            t('traductions.3.title.0'),
          ],
          description: [
            {
              text: t('traductions.3.description.0'),
              icon: <></>,
              link: null,
            },
          ],
          buttonText: t('traductions.3.button'),
          buttonLink: "/Education",
          repository: null,
          image: "./images/home/education.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.4.name'),
          title: [
            t('traductions.4.title.0'),
          ],
          description: [
            {
              text: t('traductions.4.description.0'),
              icon: <></>,
              link: null,
            },
            {
              text: "kevinmunoz01@hotmail.com",
              icon: <SiGmail/>,
              link: "mailto:kevinmunoz01@hotmail.com",
            },
            {
              text: "Kevin Munoz Rengifo",
              icon: <FaLinkedin/>,
              link: "https://www.linkedin.com/in/kevin-mu%C3%B1oz-rengifo-4178501b0/",
            },
            {
              text: "Kevinmuz55",
              icon: <FaGithub/>,
              link: "https://github.com/kevinmuz55",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/home/contact.png",
        },
      },
    ])
  }, [t])

  return <></>
}
