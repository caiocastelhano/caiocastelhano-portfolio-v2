import type { ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
  "aria-label"?: string;
};

export function Grid({ children, "aria-label": ariaLabel }: GridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid} aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  );
}