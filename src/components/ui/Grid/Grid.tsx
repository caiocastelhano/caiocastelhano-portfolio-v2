import type { ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  children: React.ReactNode;
  "aria-label"?: string;
  bleed?: boolean;
};

export function Grid({ children, bleed = false, ...rest }: GridProps) {
  const grid = (
    <div className={styles.grid} {...rest}>
      {children}
    </div>
  );

  if (bleed) return grid;

  return <div className={styles.container}>{grid}</div>;
}