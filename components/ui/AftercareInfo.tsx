import styles from "styles/components/ui/AftercareInfo.module.css";
import InfoHeading from "./headings/InfoHeading";

interface AftercareInfoProps {
  title: string;
  children: React.ReactNode;
}

export default function AftercareInfo({ title, children }: AftercareInfoProps) {
  return (
    <section className={styles.AftercareInfo}>
      <InfoHeading title={title} />
      <div className={styles.info_list}>{children}</div>
    </section>
  );
}
