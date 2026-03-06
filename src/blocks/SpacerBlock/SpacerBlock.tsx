import styles from "./SpacerBlock.module.css";

type SpacerVariant = "a" | "b" | "c";

type Props = {
  variant: SpacerVariant;
};

export function SpacerBlock({ variant }: Props) {
  const variantClass = styles[`spacer${variant.toUpperCase()}`];

  return (
    <div
      className={`${styles.spacer} ${variantClass}`}
      aria-hidden="true"
    />
  );
}