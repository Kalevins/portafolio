import { useState, useEffect } from "react";

import styles from "@/styles/home.module.scss";

export const TypingEffect = ({text, activate}) => {

  const [typing, setTyping] = useState("");
  const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    if (index == text.length) {
      setIsReady(true);
      setIndex(0);
      setTyping("");
    } else {
      setIsReady(false);
    }
  }, [activate]);

  useEffect(() => {
    if (index < text.length) {
      if (isReady) {
        setTimeout(() => {
          setTyping(typing + text[index]);
          setIndex(index + 1);
        }, 100);
      } else {
        setIsReady(true);
        setIndex(0);
        setTyping("");
      }
    } else {
      setIsReady(true);
    }
  }, [index]);

  return (
    <span className={styles.text}>{text}</span>
  )
}