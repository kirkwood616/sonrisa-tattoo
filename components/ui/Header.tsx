import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/ui/Header.module.css";
import MenuList from "./MenuList";
import Nav from "./Nav";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <header className={styles.Header}>
      <Link href="/">
        <Image src={"/favicon-32x32.png"} width={32} height={32} alt={"logo"} />
      </Link>
      <Nav isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <MenuList isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </header>
  );
}
