import type { ReactNode } from "react";

type GridItemProps = {
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowSpan: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export function GridItem({ colSpan, rowSpan, children }: GridItemProps) {
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
}