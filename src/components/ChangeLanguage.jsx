import { useTranslation } from 'react-i18next'

import styles from '@/styles/home.module.scss'

const ChangeLanguage = () => {

  const { i18n } = useTranslation([])

  const change = () => {
    if(i18n.language == "es"){
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("es")
    }
  }

  return (
    <>
      <button onClick={change} style={{backgroundImage: `url(./icons/${i18n.language}.png)`}}></button>
    </>
  )
}

export default ChangeLanguage


