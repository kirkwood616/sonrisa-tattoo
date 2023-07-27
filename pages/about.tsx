import PageBanner from "@/components/ui/banners/PageBanner";
import InfoDiv from "@/components/ui/elements/InfoDiv";
import InfoHeading from "@/components/ui/headings/InfoHeading";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/About.module.css";
import storefront from "../public/stock_storefront.jpeg";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Sonrisa Tattoo</title>
        <meta name="about" content="All about us at Sonrisa Tattoo." />
      </Head>

      <div className={styles.About}>
        <PageBanner title={"About"} description={"All about us at Sonrisa Tattoo."} />
        <section className={styles.info__section}>
          <div className={styles.info__container}>
            <div className={styles.image__container}>
              <div className={styles.image__wrapper}>
                <Image src={storefront} fill alt="Sonrisa Tattoo Shop storefront" />
              </div>
            </div>
            <article>
              <InfoDiv>
                <InfoHeading title={"Sonrisa Tattoo"} />
                <p>
                  Sonrisa Tattoo was founded in 2023 by owner Reuben Garcia. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque
                  dignissim enim sit amet venenatis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis. Commodo odio aenean sed
                  adipiscing diam donec.
                </p>
              </InfoDiv>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
