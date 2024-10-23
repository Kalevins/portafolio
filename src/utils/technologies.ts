import {
  LogosAngularIcon,
  LogosApollostack,
  LogosAuth0Icon,
  LogosAws,
  LogosBitbucket,
  LogosBootstrap,
  LogosChartjs,
  LogosCPlusplus,
  LogosCss3,
  LogosDockerIcon,
  LogosExpress,
  LogosFigma,
  LogosFirebase,
  LogosFramer,
  LogosGitIcon,
  LogosGithubCopilot,
  LogosGithubIcon,
  LogosGithubOctocat,
  LogosGraphql,
  LogosHtml5,
  LogosJavascript,
  LogosJest,
  LogosKarma,
  LogosKubernetes,
  LogosLinuxTux,
  LogosMaterialUi,
  LogosMicrosoftAzure,
  LogosMicrosoftWindowsIcon,
  LogosMswIcon,
  LogosNestjs,
  LogosNextjsIcon,
  LogosNginx,
  LogosNodejsIconAlt,
  LogosOpencv,
  LogosPostmanIcon,
  LogosPrisma,
  LogosPython,
  LogosReact,
  LogosReactRouter,
  LogosRedux,
  LogosSass,
  LogosSonarqube,
  LogosSupabaseIcon,
  LogosTailwindcssIcon,
  LogosTypescriptIcon,
  LogosVercelIcon,
  LogosVitest,
  LogosVitejs,
  LogosZustand,
  SimpleIconsI18next,
  SimpleIconsReacthookform,
  SimpleIconsShadcnui,
  SimpleIconsZap,
  VscodeIconsFileTypeDoxygen,
  VscodeIconsFileTypeStyled,
} from "@/assets/icons"
import { Technologies } from "@/types"

export const technologies: Technologies = {
  Angular: {
    name: "Angular",
    url: "https://angular.io/",
    icon: LogosAngularIcon
  },
  Apollo: {
    name: "Apollo",
    url: "https://www.apollographql.com/",
    icon: LogosApollostack
  },
  Auth0: {
    name: "Auth0",
    url: "https://auth0.com/",
    icon: LogosAuth0Icon
  },
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
  Bitbucket: {
    name: "Bitbucket",
    url: "https://bitbucket.org/",
    icon: LogosBitbucket
  },
  Bootstrap: {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: LogosBootstrap
  },
  ChartJS: {
    name: "Chart.js",
    url: "https://www.chartjs.org/",
    icon: LogosChartjs
  },
  Cplusplus: {
    name: "C++",
    url: "https://isocpp.org/",
    icon: LogosCPlusplus
  },
  CSS: {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: LogosCss3
  },
  Docker: {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: LogosDockerIcon
  },
  Doxygen: {
    name: "Doxygen",
    url: "https://www.doxygen.nl/index.html",
    icon: VscodeIconsFileTypeDoxygen
  },
  Express: {
    name: "Express",
    url: "https://expressjs.com/",
    icon: LogosExpress
  },
  Figma: {
    name: "Figma",
    url: "https://www.figma.com/",
    icon: LogosFigma
  },
  Firebase: {
    name: "Firebase",
    url: "https://firebase.google.com/",
    icon: LogosFirebase
  },
  Framer: {
    name: "Framer Motion",
    url: "https://www.framer.com/",
    icon: LogosFramer
  },
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
  GitHubCopilot: {
    name: "GitHub Copilot",
    url: "https://copilot.github.com/",
    icon: LogosGithubCopilot
  },
  GitHubPages: {
    name: "GitHub Pages",
    url: "https://pages.github.com/",
    icon: LogosGithubOctocat
  },
  GraphQL: {
    name: "GraphQL",
    url: "https://graphql.org/",
    icon: LogosGraphql
  },
  HTML: {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: LogosHtml5
  },
  I18next: {
    name: "i18next",
    url: "https://www.i18next.com/",
    icon: SimpleIconsI18next
  },
  JavaScript: {
    name: "Java Script",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: LogosJavascript
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
  Kubernetes: {
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    icon: LogosKubernetes
  },
  Linux: {
    name: "Linux",
    url: "https://www.linux.org/",
    icon: LogosLinuxTux
  },
  MaterialUi: {
    name: "Material UI",
    url: "https://material-ui.com/",
    icon: LogosMaterialUi
  },
  MSW: {
    name: "MSW",
    url: "https://mswjs.io/",
    icon: LogosMswIcon
  },
  Nestjs: {
    name: "Nest.js",
    url: "https://nestjs.com/",
    icon: LogosNestjs
  },
  Nextjs: {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: LogosNextjsIcon
  },
  Nginx: {
    name: "Nginx",
    url: "https://www.nginx.com/",
    icon: LogosNginx
  },
  Nodejs: {
    name: "Node.js",
    url: "https://nodejs.org/",
    icon: LogosNodejsIconAlt
  },
  OpenCV: {
    name: "OpenCV",
    url: "https://opencv.org/",
    icon: LogosOpencv
  },
  OWASPZAP: {
    name: "OWASP ZAP",
    url: "https://www.zaproxy.org/",
    icon: SimpleIconsZap
  },
  Postman: {
    name: "Postman",
    url: "https://www.postman.com/",
    icon: LogosPostmanIcon
  },
  Prisma: {
    name: "Prisma",
    url: "https://www.prisma.io/",
    icon: LogosPrisma
  },
  Python: {
    name: "Python",
    url: "https://www.python.org/",
    icon: LogosPython
  },
  React: {
    name: "React",
    url: "https://reactjs.org/",
    icon: LogosReact
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
  Redux: {
    name: "Redux",
    url: "https://redux.js.org/",
    icon: LogosRedux
  },
  SASS: {
    name: "SASS",
    url: "https://sass-lang.com/",
    icon: LogosSass
  },
  ShadcnUi: {
    name: "Shadcn UI",
    url: "https://ui.shadcn.com/",
    icon: SimpleIconsShadcnui
  },
  SonarQube: {
    name: "Sonar Qube",
    url: "https://www.sonarqube.org/",
    icon: LogosSonarqube
  },
  StyledComponents: {
    name: "Styled Components",
    url: "https://styled-components.com/",
    icon: VscodeIconsFileTypeStyled
  },
  Supabase: {
    name: "Supabase",
    url: "https://supabase.io/",
    icon: LogosSupabaseIcon
  },
  TailwindCSS: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: LogosTailwindcssIcon
  },
  TypeScript: {
    name: "Type Script",
    url: "https://www.typescriptlang.org/",
    icon: LogosTypescriptIcon
  },
  Vercel: {
    name: "Vercel",
    url: "https://vercel.com/",
    icon: LogosVercelIcon
  },
  Vitest: {
    name: "Vitest",
    url: "https://vitest.dev/",
    icon: LogosVitest
  },
  Vite: {
    name: "Vite",
    url: "https://vitejs.dev/",
    icon: LogosVitejs
  },
  Windows: {
    name: "Windows",
    url: "https://www.microsoft.com/en-us/windows",
    icon: LogosMicrosoftWindowsIcon
  },
  Zustand: {
    name: "Zustand",
    url: "https://zustand.surge.sh/",
    icon: LogosZustand
  }
}

export const technologiesOrder = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Python",
  "Cplusplus",
  // Frameworks
  "Nodejs",
  "React",
  "Angular",
  "Nextjs",
  "Express",
  "Nestjs",
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

