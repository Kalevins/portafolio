import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaSass,
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaNetworkWired,
  FaPython,
  FaFigma,
  FaGoogle,
  FaMicrosoft,
  FaAngular,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCisco,
  SiTensorflow,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
  SiMaterialdesign,
  SiCanva,
  SiMatrix,
  SiLatex,
} from "react-icons/si";
import {
  GiBrickWall,
  GiStoneWall,
  GiMeshNetwork,
} from "react-icons/gi";

import { useActiveSlide } from '@/contexts';

export function Skills() {

  const { t } = useTranslation(['skills'])
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
              text: "HTML",
              icon: <FaHtml5/>,
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              text: "CSS",
              icon: <FaCss3/>,
              link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
              text: "JavaScript",
              icon: <SiJavascript/>,
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              text: "TypeScript",
              icon: <SiTypescript/>,
              link: "https://www.typescriptlang.org/",
            },
            /* {
              text: "PHP",
              icon: <FaPhp/>,
              link: "https://www.php.net/",
            }, */
            {
              text: "Sass",
              icon: <FaSass/>,
              link: "https://sass-lang.com/",
            },
            {
              text: "NodeJS",
              icon: <FaNodeJs/>,
              link: "https://nodejs.org/en/",
            },
            {
              text: "Angular",
              icon: <FaAngular/>,
              link: "https://angular.io/",
            },
            {
              text: "React",
              icon: <FaReact/>,
              link: "https://reactjs.org/",
            },
            {
              text: "NextJS",
              icon: <SiNextdotjs/>,
              link: "https://nextjs.org/",
            },
            {
              text: "Express",
              icon: <SiExpress/>,
              link: "http://expressjs.com/",
            },
            /* {
              text: "MongoDB",
              icon: <SiMongodb/>,
              link: "https://www.mongodb.com/",
            }, */
            {
              text: "MySQL",
              icon: <SiMysql/>,
              link: "https://www.mysql.com/",
            },
            /* {
              text: "Laravel",
              icon: <FaLaravel/>,
              link: "https://laravel.com/",
            }, */
            {
              text: "Bootstrap",
              icon: <FaBootstrap/>,
              link: "https://getbootstrap.com/",
            },
            {
              text: "TailwindCSS",
              icon: <SiTailwindcss/>,
              link: "https://tailwindcss.com/",
            },
            {
              text: "Material Design",
              icon: <SiMaterialdesign/>,
              link: "https://material.io/",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/skills/webDevelopment.png",
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
              text: "Cisco",
              icon: <SiCisco/>,
              link: "https://www.cisco.com/",
            },
            {
              text: "FortiGate",
              icon: <GiBrickWall/>,
              link: "https://www.fortinet.com/products/next-generation-firewall",
            },
            {
              text: "Check Point",
              icon: <GiStoneWall/>,
              link: "https://www.checkpoint.com/",
            },
            {
              text: "Mininet",
              icon: <FaNetworkWired/>,
              link: "http://mininet.org/",
            },
            {
              text: "Packet Tracer",
              icon: <GiMeshNetwork/>,
              link: "https://www.netacad.com/es/courses/packet-tracer",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/skills/networks.png",
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
              text: "Python",
              icon: <FaPython/>,
              link: "https://www.python.org/",
            },
            {
              text: "TensorFlow",
              icon: <SiTensorflow/>,
              link: "https://www.tensorflow.org/",
            },
            {
              text: "Matlab",
              icon: <SiMatrix/>,
              link: "https://www.mathworks.com/products/matlab.html",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/skills/IA.png",
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
              text: "Abode Photoshop",
              icon: <SiAdobephotoshop/>,
              link: "https://www.adobe.com/la/products/photoshop.html",
            },
            {
              text: "Adobe Illustrator",
              icon: <SiAdobeillustrator/>,
              link: "https://www.adobe.com/la/products/illustrator.html",
            },
            {
              text: "Figma",
              icon: <FaFigma/>,
              link: "https://www.figma.com/",
            },
            {
              text: "Canva",
              icon: <SiCanva/>,
              link: "https://www.canva.com/",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/skills/graphicDesign.png",
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
              text: "Microsoft Office",
              icon: <FaMicrosoft/>,
              link: "https://www.office.com/",
            },
            {
              text: "G-Suite",
              icon: <FaGoogle/>,
              link: "https://workspace.google.com/",
            },
            {
              text: "Latex",
              icon: <SiLatex/>,
              link: "https://www.latex-project.org/",
            },
          ],
          buttonText: null,
          buttonLink: null,
          repository: null,
          image: "./images/skills/office.png",
        },
      },
    ])
  }, [t])

  return <></>
}
