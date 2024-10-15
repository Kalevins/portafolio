import type { ReactElement } from "react";

import styles from "./styles.module.css";

export const LoadingScreen = (): ReactElement => {
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