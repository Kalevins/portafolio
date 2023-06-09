import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useActiveSlide } from '@/contexts';

const Works = () => {

  const { t } = useTranslation(['works'])
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
            t('traductions.0.title.2'),
          ],
          description: [
            {
              text: t('traductions.0.description.0'),
              icon: <></>,
              link: null,
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/works/test.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.1.name'),
          title: [
            t('traductions.1.title.0'),
            t('traductions.1.title.1'),
            t('traductions.1.title.2'),
          ],
          description: [
            {
              text: t('traductions.1.description.0'),
              icon: <></>,
              link: null,
            },
          ],
          buttonText: t('traductions.1.button'),
          buttonLink: "https://lamusitekadeabner.com/",
          repository: null,
          image: "./images/works/LaMusitekaDeAbner.jpeg",
        },
      },
    ])
  }, [t])
}

export default Works