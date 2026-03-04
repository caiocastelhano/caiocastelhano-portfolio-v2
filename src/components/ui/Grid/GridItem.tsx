import type { ReactNode } from "react";

type GridItemProps = {
  /** Quantas colunas o item ocupa */
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Quantas “linhas base” o item ocupa */
  rowSpan: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export function GridItem({ colSpan, rowSpan, children }: GridItemProps) {
  return (
    <div
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
}