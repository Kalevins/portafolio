import { FC } from "react";

import styles from "./styles.module.css";

export const LoadingScreen: FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.cascade}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}