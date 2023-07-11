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
      <div className={styles.logo}>
        <Link href="/">
          <Image src={"/android-chrome-192x192.png"} width={54} height={54} alt={"logo"} />
        </Link>
      </div>
      <Nav isNavActive={isNavActive} setIsNavActive={setIsNavActive} stopPropagation={onClickStopPropagation} />
      <MenuList isNavActive={isNavActive} />
    </header>
  );
}
