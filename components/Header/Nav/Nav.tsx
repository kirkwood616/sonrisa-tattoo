import { Dispatch, SetStateAction } from "react";
import styles from "./Nav.module.css";

interface NavProps {
  isNavActive: boolean;
  setIsNavActive: Dispatch<SetStateAction<boolean>>;
  stopPropagation: (e: React.MouseEvent<HTMLElement, MouseEvent>, setIsActive: Dispatch<SetStateAction<boolean>>) => void;
}

export function Nav({ isNavActive, setIsNavActive, stopPropagation }: NavProps) {
  return (
    <nav
      className={isNavActive ? `${styles.Nav} ${styles.open}` : styles.Nav}
      onClick={(e) => stopPropagation(e, setIsNavActive)}
    >
      <button className={styles.hamburger_button}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
