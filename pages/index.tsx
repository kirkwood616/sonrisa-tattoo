import { HomeBanner } from "components/Banners";
import { InfoSection, InfoSectionList } from "components/Info";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import storefront from "public/images/ST_storefront.jpg";
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

        <InfoSectionList>
          <InfoSection title={"GET A TATTOO"} image={storefront} imageAlt="Sonrisa Tattoo storefront picture">
            <h4>We Are Open!</h4>
            <h5>Available for Appointments & Walk-In's</h5>
            <Link href={"/contact"}>CONTACT US</Link>
            <br />
            <br />
          </InfoSection>
        </InfoSectionList>
      </section>
    </>
  );
}
