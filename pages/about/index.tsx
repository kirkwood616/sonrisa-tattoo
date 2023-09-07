import { PageBanner } from "components/Banners";
import { InfoSection, InfoSectionList } from "components/Info";
import Head from "next/head";
import storefront from "public/images/stock_storefront.jpeg";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Sonrisa Tattoo</title>
        <meta name="about" content="All about us at Sonrisa Tattoo." />
      </Head>

      <div className={styles.About}>
        <PageBanner title={"About"} description={"All about us at Sonrisa Tattoo."} />

        <InfoSectionList>
          <InfoSection title={"Sonrisa Tattoo"} image={storefront} imageAlt={"Sonrisa Tattoo storefront"}>
            <p>
              Sonrisa Tattoo was founded in 2023 by owner Reuben Garcia. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim
              sit amet venenatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis. Commodo odio aenean sed adipiscing
              diam donec.
            </p>
          </InfoSection>
        </InfoSectionList>
      </div>
    </>
  );
}
