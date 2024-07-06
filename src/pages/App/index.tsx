import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Cards } from '@/layouts'
import { Footer, Header, Scrollbar, Card, AnimatedText } from '@/components'

import card1Image from '@/assets/images/card1.webp'
import styles from './styles.module.css'

export const App = () => {
  const { t } = useTranslation(["pages-app"])
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const cards = 5;
  const positions = t("card1.title.positions")
  const experiences = t("card2.experience")

  console.log('experiences', experiences)

  const handleClickScroll = (index: number) => {
    if (ref.current) {
      ref.current.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      <Cards ref={ref}>
        <Card
          title={t("card1.sidebar")}
          imgBackground={card1Image}
        >
          <div className={styles.container} id={styles.card1}>
            <small>{t("card1.subtitle")}</small>
            <div className={styles.textContainer}>
              <h1><span>{t("card1.title.hello")}</span>{t("card1.title.name")}</h1>
              <div>
                <AnimatedText texts={positions} />
              </div>
            </div>
            <div className={styles.line}/>
          </div>
        </Card>
        <Card
          title={t("card2.sidebar")}
          imgBackground=""
        >
          <div className={styles.container} id={styles.card2}>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <small>small</small>
            <ul>
              <li>li</li>
            </ul>
            <ol>
              <li>li</li>
            </ol>
            <a href="#">a</a>
            <label>label</label>
            <span>span</span>
            <code>code</code>
            <pre>pre</pre>
            <input type="text" />
            <button>button</button>
          </div>
        </Card>
        <Card
          title={t("card3.sidebar")}
          imgBackground=""
        >
          <div className={styles.container} id={styles.card3}>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <small>small</small>
            <ul>
              <li>li</li>
            </ul>
            <ol>
              <li>li</li>
            </ol>
            <a href="#">a</a>
            <label>label</label>
            <span>span</span>
            <code>code</code>
            <pre>pre</pre>
            <input type="text" />
            <button>button</button>
          </div>
        </Card>
        <Card
          title={t("card4.sidebar")}
          imgBackground=""
        >
          <div className={styles.container} id={styles.card4}>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <small>small</small>
            <ul>
              <li>li</li>
            </ul>
            <ol>
              <li>li</li>
            </ol>
            <a href="#">a</a>
            <label>label</label>
            <span>span</span>
            <code>code</code>
            <pre>pre</pre>
            <input type="text" />
            <button>button</button>
          </div>
        </Card>
        <Card
          title={t("card5.sidebar")}
          imgBackground=""
        >
          <div className={styles.container} id={styles.card5}>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            <small>small</small>
            <ul>
              <li>li</li>
            </ul>
            <ol>
              <li>li</li>
            </ol>
            <a href="#">a</a>
            <label>label</label>
            <span>span</span>
            <code>code</code>
            <pre>pre</pre>
            <input type="text" />
            <button>button</button>
          </div>
        </Card>
      </Cards>
      <Scrollbar scrollYProgress={scrollYProgress} cards={cards} handleClickScroll={handleClickScroll}/>
      <Footer />
    </main>
  )
}
