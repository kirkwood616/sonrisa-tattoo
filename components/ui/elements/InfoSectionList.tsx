import styles from "styles/components/ui/InfoSectionList.module.css";

interface InfoSectionListProps {
  children: React.ReactNode;
}

export default function InfoSectionList({ children }: InfoSectionListProps) {
  return <div className={styles.InfoSectionList}>{children}</div>;
}
