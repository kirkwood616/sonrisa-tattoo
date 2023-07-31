import styles from "styles/components/ui/FooterHeading.module.css";

interface FooterHeadingProps {
  title: string;
}

export default function FooterHeading({ title }: FooterHeadingProps) {
  return <h3 className={styles.FooterHeading}>{title.toUpperCase()}</h3>;
}
