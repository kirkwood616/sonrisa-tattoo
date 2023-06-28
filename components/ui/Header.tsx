import useLockScroll from "@/hooks/useLockScroll";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/ui/components/Header.module.css";
import MenuList from "./MenuList";
import Nav from "./Nav";

export default function Header() {
  const { ref, isActive, setIsActive } = useOnClickOutside();
  useLockScroll(isActive);

  return (
    <header className={styles.Header} ref={ref} onClick={() => isActive && setIsActive((prev) => !prev)}>
      <Link href="/">
        <Image src={"/favicon-32x32.png"} width={32} height={32} alt={"logo"} />
      </Link>
      <Nav isMenuActive={isActive} setIsMenuActive={setIsActive} />
      <MenuList isMenuActive={isActive} setIsMenuActive={setIsActive} />
    </header>
  );
}
