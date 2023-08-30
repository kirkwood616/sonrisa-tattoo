import styles from "./PageTitle.module.css";

interface PageTitleProps {
  children: string;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className={styles.PageTitle}>
      <h1>{children}</h1>
    </div>
  );
}
