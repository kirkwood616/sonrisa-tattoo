import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styles from "styles/components/ui/MenuList.module.css";

interface MenuListProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function MenuList({ isMenuActive, setIsMenuActive }: MenuListProps) {
  return (
    <>
      <menu className={isMenuActive ? styles.MenuList__active : styles.MenuList__inactive}>
        <Link href={"/"}>
          <li>HOME</li>
        </Link>
        <Link href={"#"}>
          <li>ABOUT</li>
        </Link>
        <Link href={"#"}>
          <li>WORK</li>
        </Link>
        <Link href={"aftercare"}>
          <li>AFTERCARE</li>
        </Link>
        <Link href={"#"}>
          <li>CONTACT</li>
        </Link>
      </menu>
      <div className={isMenuActive ? styles.underlay__active : styles.underlay__inactive}></div>
    </>
  );
}
