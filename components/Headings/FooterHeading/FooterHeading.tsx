import styles from "./FooterHeading.module.css";

interface FooterHeadingProps {
  title: string;
}

export function FooterHeading({ title }: FooterHeadingProps) {
  return <h3 className={styles.FooterHeading}>{title.toUpperCase()}</h3>;
}
