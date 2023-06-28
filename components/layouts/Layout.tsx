import { ReactNode } from "react";
import styles from "styles/layouts/Layout.module.css";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
// import Header from "../ui/header/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.Layout}>{children}</main>
      <Footer />
    </>
  );
}
