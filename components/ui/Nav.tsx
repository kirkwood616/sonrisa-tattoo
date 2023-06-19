import { Dispatch, SetStateAction } from "react";
import styles from "styles/ui/Nav.module.css";

interface NavProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isMenuActive, setIsMenuActive }: NavProps) {
  return (
    <nav
      className={isMenuActive ? `${styles.Nav} ${styles.open}` : styles.Nav}
      onClick={() => setIsMenuActive((prev) => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
}
