import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import type { ReactElement } from 'react'

import { Cards } from '@/layouts'
import { Footer, Header, Scrollbar } from '@/components'
import { MenuContext } from '@/contexts'
import { Card1, Card2, Card3, Card4 } from '@/pages'

import styles from './styles.module.css'

export const App = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [cards, setCards] = useState<number>(0);
  const { scrollYProgress } = useScroll({ container: ref });
  const { selected } = useContext(MenuContext);

  useEffect(() => {
    if (ref.current) {
      setCards(ref.current.children.length);
    }
  }, [ref]);

  useEffect(() => {
    if(new Date().getHours() >= 18 || new Date().getHours() < 6) {
      document.documentElement.style.setProperty('--color-primary', 'rgb(74, 228, 255)');
      document.documentElement.style.setProperty('--color-primary-opacity', 'rgba(74, 228, 255, 0.9)');
    }
  }, []);

  useEffect(() => {
    handleClickScroll(selected);
  }, [selected]);

  const handleClickScroll = useCallback((index: number) => {
    if (ref.current) {
      ref.current.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
    }
  }, []);


  return (
    <main className={styles.main}>
      <Header />
      <Cards ref={ref}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Cards>
      <Scrollbar scrollYProgress={scrollYProgress} cards={cards} handleClickScroll={handleClickScroll}/>
      <Footer />
    </main>
  )
}
