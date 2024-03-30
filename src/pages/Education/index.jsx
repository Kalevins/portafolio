import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useActiveSlide } from '@/contexts';

export function Education() {

  const { t } = useTranslation(['education'])
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
              link: "http://www.unicauca.edu.co/versionP/",
            },
            {
              text: t('traductions.0.description.1'),
              icon: <></>,
              link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=856064",
            },
            {
              text: t('traductions.0.description.2'),
              icon: <></>,
              link: "https://drive.google.com/file/d/1cMp2_NKsCI1IvX5CfkJk8aSnTahUYtQe/view",
            },
            {
              text: t('traductions.0.description.3'),
              icon: <></>,
              link: "https://drive.google.com/file/d/1bULvoBt-WfVATShjTSB25tXd_FKF2J59/view",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/formal.png",
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
              link: "https://courses.edx.org/certificates/7084536c95c0495aa6b60522a5aaf3aa",
            },
            {
              text: t('traductions.1.description.1'),
              icon: <></>,
              link: "https://courses.edx.org/certificates/a1edb97b958b463aadf0654bb20875db",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/edX.png",
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
              link: "https://platzi.com/p/kevinmu/curso/2218-pensamiento-logico-2020/diploma/detalle/",
            },
            {
              text: t('traductions.2.description.1'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1814-basico-javascript/diploma/detalle/",
            },
            {
              text: t('traductions.2.description.2'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1741-computacion-basica-2019/diploma/detalle/",
            },
            /* {
              text: t('traductions.2.description.3'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1584-portafolios/diploma/detalle/",
            }, */
            {
              text: t('traductions.2.description.4'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1815-ecmascript-6/diploma/detalle/",
            },
            {
              text: t('traductions.2.description.5'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/2157-desarrollo-moderno-codestream/diploma/detalle/",
            },
            /* {
              text: t('traductions.2.description.6'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1945-ingles-principiantes/diploma/detalle/",
            }, */
            {
              text: t('traductions.2.description.7'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/2292-terminal/diploma/detalle/",
            },
            /* {
              text: t('traductions.2.description.8'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/2214-prework-macos/diploma/detalle/",
            }, */
            /* {
              text: t('traductions.2.description.9'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/2042-prework-windows/diploma/detalle/",
            }, */
            {
              text: t('traductions.2.description.10'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1050-programacion-basica/diploma/detalle/",
            },
            {
              text: t('traductions.2.description.11'),
              icon: <></>,
              link: "https://platzi.com/p/kevinmu/curso/1557-git-github/diploma/detalle/",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/platzi.png",
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
              link: "https://www.udemy.com/certificate/UC-aeaca60f-0b04-46eb-a20f-19262bcd6924/",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/udemy.png",
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
              link: "https://www.freecodecamp.org/certification/kevinmu/responsive-web-design",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/freeCodeCamp.png",
        },
      },
      {
        light: true,
        texts: {
          name: t('traductions.5.name'),
          title: [
            t('traductions.5.title.0'),
          ],
          description: [
            {
              text: t('traductions.5.description.0'),
              icon: <></>,
              link: "https://www.credly.com/badges/b09f6821-3fdb-44bf-8b93-c7db5c82b192?source=linked_in_profile",
            },
            {
              text: t('traductions.5.description.1'),
              icon: <></>,
              link: "https://drive.google.com/file/d/1StS8aE4DLI7rkwUQFElOfGQAfmLht_z3/view",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/educations/cisco.png",
        },
      },
    ])
  }, [t])

  return <></>
}
