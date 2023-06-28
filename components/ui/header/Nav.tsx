import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Dispatch, SetStateAction } from "react";
import styles from "styles/components/ui/Nav.module.css";

interface NavProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isMenuActive, setIsMenuActive }: NavProps) {
  const { onClickStopPropagation } = useOnClickOutside();

  return (
    <nav
      className={isMenuActive ? `${styles.Nav} ${styles.open}` : styles.Nav}
      onClick={(e) => onClickStopPropagation(e, setIsMenuActive)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
}
