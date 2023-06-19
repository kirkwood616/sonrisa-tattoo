import { Dispatch, SetStateAction } from "react";
import styles from "styles/ui/Nav.module.css";

interface NavProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isMenuActive, setIsMenuActive }: NavProps) {
  function onClickStopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuActive((prev) => !prev);
  }
  return (
    <nav className={isMenuActive ? `${styles.Nav} ${styles.open}` : styles.Nav} onClick={onClickStopPropagation}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
}
