import { HomeBanner } from "components/Banners";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "./Index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonrisa Tattoo</title>
        <meta name="description" content="Official website of Sonrisa Tattoo. Located in Grand Rapids, Michigan" />
      </Head>
      <section className={styles.Index}>
        <HomeBanner />
      </section>
    </>
  );
}
