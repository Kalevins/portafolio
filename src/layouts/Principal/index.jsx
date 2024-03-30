import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';

import { ChangeLanguage } from '@/components/ChangeLanguage'
import { Footer } from '@/components/Footer';
import { Card } from '@/components/Card';
import { useActiveSlide } from '@/contexts';

import styles from "./styles.module.scss"

export function Principal() {

  let navigate = useNavigate();
  const { activeSlide, slides, backActiveSlide, nextActiveSlide } = useActiveSlide()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.change}>
          <FaHome onClick={() => navigate("/")} id={styles.home} />
          <ChangeLanguage />
        </div>
        <div className={styles.slider} style={{width: `${Object.keys(slides).length * 100}%`, transform: `translateX(${(-activeSlide) * (100 / Object.keys(slides).length)}%)`}}>
          {slides.map(({texts, light}, index) => (
            <Card key={index} activeSlide={activeSlide} texts={texts} light={light} id={index} />
          ))}
        </div>
        <div className={styles.prev} id={slides[activeSlide]?.light ? styles.light : null} onClick={backActiveSlide}/>
        <div className={styles.next} id={slides[activeSlide]?.light ? styles.light : null} onClick={nextActiveSlide}/>
        <Footer />
        <Outlet />
      </div>
      <video autoPlay muted loop={true} id={styles.video}>
        <source src="./images/fondo.mp4" type="video/mp4" />
      </video>
    </>
  )
}
