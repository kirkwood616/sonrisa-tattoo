import HomeBanner from "@/components/ui/banners/HomeBanner";
import styles from "@/styles/pages/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonrisa Tattoo</title>
        <meta name="description" content="Official website of Sonrisa Tattoo. Located in Grand Rapids, Michigan" />
      </Head>
      <section className={styles.Home}>
        <HomeBanner />
      </section>
    </>
  );
}
