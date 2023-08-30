import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.MainLayout}>{children}</main>
      <Footer />
    </>
  );
}
