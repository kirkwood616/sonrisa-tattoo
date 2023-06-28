import styles from "@/styles/ui/pages/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonrisa Tattoo</title>
        <meta name="description" content="Official website of Sonrisa Tattoo." />
      </Head>
      <section className={styles.Home}>
        <h1>SONRISA TATTOO</h1>
      </section>
    </>
  );
}
