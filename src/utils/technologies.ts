import {
  // Languages
  LogosJavascript,
  LogosTypescriptIcon,
  LogosPython,
  LogosCPlusplus,
  // Frameworks
  LogosReact,
  LogosAngularIcon,
  LogosNextjsIcon,
  LogosNodejsIconAlt,
  // Frontend
  LogosHtml5,
  LogosCss3,
  LogosSass,
  VscodeIconsFileTypeStyled,
  LogosTailwindcssIcon,
  LogosMaterialUi,
  LogosBootstrap,
  SimpleIconsShadcnui,
  // Libraries
  LogosVitejs,
  LogosRedux,
  LogosZustand,
  LogosChartjs,
  LogosFramer,
  SimpleIconsI18next,
  SimpleIconsReacthookform,
  LogosReactRouter,
  LogosOpencv,
  VscodeIconsFileTypeDoxygen,
  // Testing
  LogosVitest,
  LogosJest,
  LogosKarma,
  LogosMswIcon,
  LogosPostmanIcon,
  // Backend
  LogosExpress,
  LogosNestjs,
  LogosFirebase,
  LogosSupabaseIcon,
  LogosAuth0Icon,
  LogosPrisma,
  LogosGraphql,
  LogosApollostack,
  // QA
  SimpleIconsZap,
  LogosSonarqube,
  // Version Control
  LogosGitIcon,
  LogosGithubIcon,
  LogosBitbucket,
  LogosGithubCopilot,
  // Cloud
  LogosAws,
  LogosMicrosoftAzure,
  LogosVercelIcon,
  LogosGithubOctocat,
  LogosDockerIcon,
  LogosKubernetes,
  LogosNginx,
  // Operating Systems
  LogosMicrosoftWindowsIcon,
  LogosLinuxTux,
  // Design
  LogosFigma,
} from "@/assets/icons"
import { Technologies } from "@/types"

export const technologies: Technologies = {
  // Languages
  JavaScript: {
    name: "Java Script",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: LogosJavascript
  },
  TypeScript: {
    name: "Type Script",
    url: "https://www.typescriptlang.org/",
    icon: LogosTypescriptIcon
  },
  Python: {
    name: "Python",
    url: "https://www.python.org/",
    icon: LogosPython
  },
  Cplusplus: {
    name: "C++",
    url: "https://isocpp.org/",
    icon: LogosCPlusplus
  },
  // Frameworks
  React: {
    name: "React",
    url: "https://reactjs.org/",
    icon: LogosReact
  },
  Angular: {
    name: "Angular",
    url: "https://angular.io/",
    icon: LogosAngularIcon
  },
  Nextjs: {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: LogosNextjsIcon
  },
  Nodejs: {
    name: "Node.js",
    url: "https://nodejs.org/",
    icon: LogosNodejsIconAlt
  },
  // Frontend
  HTML: {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: LogosHtml5
  },
  CSS: {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: LogosCss3
  },
  SASS: {
    name: "SASS",
    url: "https://sass-lang.com/",
    icon: LogosSass
  },
  StyledComponents: {
    name: "Styled Components",
    url: "https://styled-components.com/",
    icon: VscodeIconsFileTypeStyled
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: LogosTailwindcssIcon
  },
  MaterialUi: {
    name: "Material UI",
    url: "https://material-ui.com/",
    icon: LogosMaterialUi
  },
  Bootstrap: {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: LogosBootstrap
  },
  ShadcnUi: {
    name: "Shadcn UI",
    url: "https://ui.shadcn.com/",
    icon: SimpleIconsShadcnui
  },
  // Libraries
  Vite: {
    name: "Vite",
    url: "https://vitejs.dev/",
    icon: LogosVitejs
  },
  Redux: {
    name: "Redux",
    url: "https://redux.js.org/",
    icon: LogosRedux
  },
  Zustand: {
    name: "Zustand",
    url: "https://zustand.surge.sh/",
    icon: LogosZustand
  },
  ChartJS: {
    name: "Chart.js",
    url: "https://www.chartjs.org/",
    icon: LogosChartjs
  },
  Framer: {
    name: "Framer Motion",
    url: "https://www.framer.com/",
    icon: LogosFramer
  },
  I18next: {
    name: "i18next",
    url: "https://www.i18next.com/",
    icon: SimpleIconsI18next
  },
  ReactHookForm: {
    name: "React Hook Form",
    url: "https://react-hook-form.com/",
    icon: SimpleIconsReacthookform
  },
  ReactRouter: {
    name: "React Router",
    url: "https://reactrouter.com/",
    icon: LogosReactRouter
  },
  OpenCV: {
    name: "OpenCV",
    url: "https://opencv.org/",
    icon: LogosOpencv
  },
  Doxygen: {
    name: "Doxygen",
    url: "https://www.doxygen.nl/index.html",
    icon: VscodeIconsFileTypeDoxygen
  },
  // Testing
  Vitest: {
    name: "Vitest",
    url: "https://vitest.dev/",
    icon: LogosVitest
  },
  Jest: {
    name: "Jest",
    url: "https://jestjs.io/",
    icon: LogosJest
  },
  Karma: {
    name: "Karma",
    url: "https://karma-runner.github.io/",
    icon: LogosKarma
  },
  MSW: {
    name: "MSW",
    url: "https://mswjs.io/",
    icon: LogosMswIcon
  },
  Postman: {
    name: "Postman",
    url: "https://www.postman.com/",
    icon: LogosPostmanIcon
  },
  // Backend
  Express: {
    name: "Express",
    url: "https://expressjs.com/",
    icon: LogosExpress
  },
  Nestjs: {
    name: "Nest.js",
    url: "https://nestjs.com/",
    icon: LogosNestjs
  },
  Firebase: {
    name: "Firebase",
    url: "https://firebase.google.com/",
    icon: LogosFirebase
  },
  Supabase: {
    name: "Supabase",
    url: "https://supabase.io/",
    icon: LogosSupabaseIcon
  },
  Auth0: {
    name: "Auth0",
    url: "https://auth0.com/",
    icon: LogosAuth0Icon
  },
  Prisma: {
    name: "Prisma",
    url: "https://www.prisma.io/",
    icon: LogosPrisma
  },
  GraphQL: {
    name: "GraphQL",
    url: "https://graphql.org/",
    icon: LogosGraphql
  },
  Apollo: {
    name: "Apollo",
    url: "https://www.apollographql.com/",
    icon: LogosApollostack
  },
  // QA
  OWASPZAP: {
    name: "OWASP ZAP",
    url: "https://www.zaproxy.org/",
    icon: SimpleIconsZap
  },
  SonarQube: {
    name: "Sonar Qube",
    url: "https://www.sonarqube.org/",
    icon: LogosSonarqube
  },
  // Version Control
  Git: {
    name: "Git",
    url: "https://git-scm.com/",
    icon: LogosGitIcon
  },
  GitHub: {
    name: "GitHub",
    url: "https://github.com/",
    icon: LogosGithubIcon
  },
  Bitbucket: {
    name: "Bitbucket",
    url: "https://bitbucket.org/",
    icon: LogosBitbucket
  },
  GitHubCopilot: {
    name: "GitHub Copilot",
    url: "https://copilot.github.com/",
    icon: LogosGithubCopilot
  },
  // Cloud
  AWS: {
    name: "AWS",
    url: "https://aws.amazon.com/",
    icon: LogosAws
  },
  Azure: {
    name: "Microsoft Azure",
    url: "https://azure.microsoft.com/",
    icon: LogosMicrosoftAzure
  },
  Vercel: {
    name: "Vercel",
    url: "https://vercel.com/",
    icon: LogosVercelIcon
  },
  GitHubPages: {
    name: "GitHub Pages",
    url: "https://pages.github.com/",
    icon: LogosGithubOctocat
  },
  Docker: {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: LogosDockerIcon
  },
  Kubernetes: {
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    icon: LogosKubernetes
  },
  Nginx: {
    name: "Nginx",
    url: "https://www.nginx.com/",
    icon: LogosNginx
  },
  // Operating Systems
  Windows: {
    name: "Windows",
    url: "https://www.microsoft.com/en-us/windows",
    icon: LogosMicrosoftWindowsIcon
  },
  Linux: {
    name: "Linux",
    url: "https://www.linux.org/",
    icon: LogosLinuxTux
  },
  // Design
  Figma: {
    name: "Figma",
    url: "https://www.figma.com/",
    icon: LogosFigma
  }
}

export const technologiesOrder = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "Cplusplus",
  // Frameworks
  "React",
  "Angular",
  "Nextjs",
  "Nodejs",
  // Frontend
  "HTML",
  "CSS",
  "SASS",
  "StyledComponents",
  "TailwindCSS",
  "MaterialUi",
  "Bootstrap",
  "ShadcnUi",
  // Libraries
  "Vite",
  "Redux",
  "Zustand",
  "ChartJS",
  "Framer",
  "I18next",
  "ReactHookForm",
  "ReactRouter",
  "OpenCV",
  "Doxygen",
  // Testing
  "Vitest",
  "Jest",
  "Karma",
  "MSW",
  "Postman",
  // Backend
  "Express",
  "Nestjs",
  "Firebase",
  "Supabase",
  "Auth0",
  "Prisma",
  "GraphQL",
  "Apollo",
  // QA
  "OWASPZAP",
  "SonarQube",
  // Version Control
  "Git",
  "GitHub",
  "Bitbucket",
  "GitHubCopilot",
  // Cloud
  "AWS",
  "Azure",
  "Vercel",
  "GitHubPages",
  "Docker",
  "Kubernetes",
  "Nginx",
  // Operating Systems
  "Windows",
  "Linux",
  // Design
  "Figma",
]

