import styles from "styles/components/ui/PageTitle.module.css";

interface PageTitleProps {
  children: string;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <div className={styles.PageTitle}>
      <h1>{children}</h1>
    </div>
  );
}
