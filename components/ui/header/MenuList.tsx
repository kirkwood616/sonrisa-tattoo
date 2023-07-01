import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/components/ui/MenuList.module.css";

interface MenuListProps {
  isNavActive: boolean;
}

export default function MenuList({ isNavActive }: MenuListProps) {
  const router = useRouter();

  return (
    <>
      <menu className={isNavActive ? styles.MenuList__active : styles.MenuList}>
        <Link href={"/"}>
          <li className={router.pathname === "/" ? styles.active_page : ""}>HOME</li>
        </Link>
        <Link href={"/about"}>
          <li className={router.pathname === "/about" ? styles.active_page : ""}>ABOUT</li>
        </Link>
        <Link href={"/work"}>
          <li className={router.pathname === "/work" ? styles.active_page : ""}>WORK</li>
        </Link>
        <Link href={"/aftercare"}>
          <li className={router.pathname === "/aftercare" ? styles.active_page : ""}>AFTERCARE</li>
        </Link>
        <Link href={"/contact"}>
          <li className={router.pathname === "/contact" ? styles.active_page : ""}>CONTACT</li>
        </Link>
      </menu>
      <div className={isNavActive ? styles.underlay__active : styles.underlay}></div>
    </>
  );
}
