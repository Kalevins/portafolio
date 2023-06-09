import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useActiveSlide } from '@/contexts';

const Page404 = () => {

  const { t } = useTranslation(['404'])
  const { changeSlides } = useActiveSlide()

  useEffect(() => {
    changeSlides([
      {
        light: true,
        texts: {
          name: t('traductions.0.name'),
          title: [
            t('traductions.0.title.0'),
          ],
          description: [
            {
              text: t('traductions.0.description.0'),
              icon: <></>,
              link: null,
            }
          ],
          buttonText: t('traductions.0.button'),
          buttonLink: "/",
          repository: null,
          image: "./images/home/skills.png",
        },
      },
    ])
  }, [t])
}

export default Page404