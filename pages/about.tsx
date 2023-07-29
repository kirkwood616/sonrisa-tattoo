import PageBanner from "@/components/ui/banners/PageBanner";
import InfoSection from "@/components/ui/elements/InfoSection";
import InfoSectionList from "@/components/ui/elements/InfoSectionList";
import Head from "next/head";
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
