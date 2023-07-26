import PageBanner from "@/components/ui/banners/PageBanner";
import InfoDiv from "@/components/ui/elements/InfoDiv";
import InfoHeading from "@/components/ui/headings/InfoHeading";
import Head from "next/head";
import styles from "styles/pages/About.module.css";

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
          <div className={styles.image__container}>
            <div className={styles.image}></div>
          </div>
          <article>
            <InfoDiv>
              <InfoHeading title={"Sonrisa Tattoo"} />
              <p>
                Sonrisa Tattoo was founded in 2023 by owner Reuben Garcia. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim
                enim sit amet venenatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis. Commodo odio aenean sed adipiscing
                diam donec.
              </p>
            </InfoDiv>
          </article>
        </section>
      </div>
    </>
  );
}
