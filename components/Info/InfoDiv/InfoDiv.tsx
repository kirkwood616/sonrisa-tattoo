import styles from "./InfoDiv.module.css";

interface InfoDivProps {
  children: React.ReactNode;
}

export function InfoDiv({ children }: InfoDivProps) {
  return <div className={styles.InfoDiv}>{children}</div>;
}
