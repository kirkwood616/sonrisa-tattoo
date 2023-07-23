import styles from "styles/components/ui/InfoHeading.module.css";

interface InfoHeadingProps {
  title: string;
}

export default function InfoHeading({ title }: InfoHeadingProps) {
  return (
    <div className={styles.InfoHeading}>
      <h2>{title.toUpperCase()}</h2>
    </div>
  );
}
