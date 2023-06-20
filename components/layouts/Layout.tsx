import { ReactNode } from "react";
import styles from "styles/layouts/Layout.module.css";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

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
