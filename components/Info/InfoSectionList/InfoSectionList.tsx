import styles from "./InfoSectionList.module.css";

interface InfoSectionListProps {
  children: React.ReactNode;
}

export function InfoSectionList({ children }: InfoSectionListProps) {
  return <div className={styles.InfoSectionList}>{children}</div>;
}
