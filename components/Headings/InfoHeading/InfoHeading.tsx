import styles from "./InfoHeading.module.css";

interface InfoHeadingProps {
  title: string;
}

export function InfoHeading({ title }: InfoHeadingProps) {
  return (
    <div className={styles.InfoHeading}>
      <h2>{title.toUpperCase()}</h2>
    </div>
  );
}
