import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styles from "styles/ui/MenuList.module.css";

interface MenuListProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function MenuList({ isMenuActive, setIsMenuActive }: MenuListProps) {
  return (
    <>
      <menu className={isMenuActive ? styles.MenuList__active : styles.MenuList__inactive}>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"#"}>ABOUT</Link>
        </li>
        <li>
          <Link href={"#"}>WORK</Link>
        </li>
        <li>
          <Link href={"aftercare"}>AFTERCARE</Link>
        </li>
        <li>
          <Link href={"#"}>CONTACT</Link>
        </li>
      </menu>
      <div className={isMenuActive ? styles.underlay__active : styles.underlay__inactive}></div>
    </>
  );
}
