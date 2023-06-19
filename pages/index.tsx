import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonrisa Tattoo</title>
        <meta name="description" content="Official website of Sonrisa Tattoo." />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scaleable=yes" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>SONRISA TATTOO</h1>
      </main>
    </>
  );
}
