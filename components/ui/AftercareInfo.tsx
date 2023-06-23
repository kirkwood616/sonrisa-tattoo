import styles from "styles/ui/AftercareInfo.module.css";

interface AftercareInfoProps {
  title: string;
  children: React.ReactNode;
}

export default function AftercareInfo({ title, children }: AftercareInfoProps) {
  return (
    <section className={styles.AftercareInfo}>
      <div className={styles.title}>
        <span className={styles.bar_left} />
        <h2>{title.toUpperCase()}</h2>
        <span className={styles.bar_right} />
      </div>
      <div className={styles.info_list}>{children}</div>
    </section>
  );
}
