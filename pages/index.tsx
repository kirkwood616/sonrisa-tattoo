import PageBanner from "@/components/ui/banners/PageBanner";
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
        <PageBanner title={"Sonrisa Tattoo"} description={"Custom Quality Tattoo Shop in Grand Rapids, Michigan"} />
      </section>
    </>
  );
}
