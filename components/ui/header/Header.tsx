import useMediaEvents from "@/hooks/useMediaEvents";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "styles/components/ui/Header.module.css";
import MenuList from "./MenuList";
import Nav from "./Nav";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const { ref, onClickStopPropagation } = useMediaEvents(isNavActive, setIsNavActive, "(min-width: 1024px)", true);

  return (
    <header className={styles.Header} ref={ref} onClick={() => isNavActive && setIsNavActive((prev) => !prev)}>
      <Link href="/">
        <Image src={"/favicon-32x32.png"} width={32} height={32} alt={"logo"} />
      </Link>
      <Nav isNavActive={isNavActive} setIsNavActive={setIsNavActive} stopPropagation={onClickStopPropagation} />
      <MenuList isNavActive={isNavActive} />
    </header>
  );
}
