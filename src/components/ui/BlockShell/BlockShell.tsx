import type { ElementType, ReactNode } from "react";
import styles from "./BlockShell.module.css";

type BlockShellProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;

  /**
   * Quando true, aplica estilos de hover/focus mais fortes.
   * Use para blocos clicáveis (ex: projeto, links).
   */
  interactive?: boolean;

  /** Controle simples de padding por densidade */
  density?: "sm" | "md" | "lg";

  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export function BlockShell<T extends ElementType = "section">({
  as,
  children,
  interactive = false,
  density = "md",
  className,
  ...rest
}: BlockShellProps<T>) {
  const Component = as ?? "section";

  const classes = [
    styles.shell,
    interactive ? styles.interactive : "",
    styles[`density_${density}`],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}