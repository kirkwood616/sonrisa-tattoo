import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MenuList.module.css";

interface MenuListProps {
  isNavActive: boolean;
}

export function MenuList({ isNavActive }: MenuListProps) {
  const router = useRouter();

  return (
    <>
      <menu className={isNavActive ? styles.MenuList__active : styles.MenuList}>
        <Link href={"/"}>
          <li className={router.pathname === "/" ? styles.active_page : styles.menu_item}>HOME</li>
        </Link>
        <Link href={"/about"}>
          <li className={router.pathname === "/about" ? styles.active_page : styles.menu_item}>ABOUT</li>
        </Link>
        <Link href={"/aftercare"}>
          <li className={router.pathname === "/aftercare" ? styles.active_page : styles.menu_item}>AFTERCARE</li>
        </Link>
        <Link href={"/contact"}>
          <li className={router.pathname === "/contact" ? styles.active_page : styles.menu_item}>CONTACT</li>
        </Link>
      </menu>
      <div className={isNavActive ? styles.underlay__active : styles.underlay}></div>
    </>
  );
}
