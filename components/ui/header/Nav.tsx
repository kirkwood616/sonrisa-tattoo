import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Dispatch, SetStateAction } from "react";
import styles from "styles/components/ui/Nav.module.css";

interface NavProps {
  isNavActive: boolean;
  setIsNavActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isNavActive, setIsNavActive }: NavProps) {
  const { onClickStopPropagation } = useOnClickOutside(isNavActive, setIsNavActive);

  return (
    <nav
      className={isNavActive ? `${styles.Nav} ${styles.open}` : styles.Nav}
      onClick={(e) => onClickStopPropagation(e, setIsNavActive)}
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
