import { useNavigate } from 'react-router-dom'

import { TypingEffect } from '@/libraries/TypingEffect'

import styles from './styles.module.scss'

export function Card({ activeSlide, texts, light, id }) {

  let navigate = useNavigate();

  const handleClick = (value) => {
    if(!value) return

    if(value.includes("http") || value.includes("mailto")) {
      open(value)
      return
    }
    navigate(value)
  }

  return (
    <div className={`${styles.box} ${styles[`box${id}`]}`} id={activeSlide==id ? styles.active : styles.inactive}>
      <div className={styles.bg} id={activeSlide==id ? styles.active : styles.inactive}></div>
      <div className={styles.details}>
        <div className={styles.titles} id={light ? styles.light : null}>
          {(texts.title).map((text, index) => {
            return (
              <TypingEffect key={index} text={text} activate={activeSlide} />
            )
          })}
        </div>
        <div className={styles.descriptions} id={light ? styles.light : null}>
          {(texts.description).map(({text, icon, link}, index) => {
            return (
              <div key={index} className={styles.description} onClick={() => handleClick(link)} id={link ? styles.pointer : null}>
                {icon}
                <p>{text}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.buttons}>
          <button className={!texts?.buttonText ? styles.none : null} onClick={() => handleClick(texts.buttonLink)}>{texts.buttonText}</button>
          <button className={!texts?.repository ? styles.none : null} onClick={() => handleClick(texts.buttonLink)}>{texts.buttonText}</button>
        </div>
      </div>
      <div className={styles.illustration}>
        <div className={styles.inner}>
          <img src={texts.image}/>
        </div>
      </div>
    </div>
  )
}
