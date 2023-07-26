import styles from "styles/components/ui/InfoDiv.module.css";

interface InfoDivProps {
  children: React.ReactNode;
}

export default function InfoDiv({ children }: InfoDivProps) {
  return <div className={styles.InfoDiv}>{children}</div>;
}
