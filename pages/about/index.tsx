import { InstagramIcon } from "@/components/Icons";
import { PageBanner } from "components/Banners";
import { InfoSection, InfoSectionList } from "components/Info";
import Head from "next/head";
import artists from "public/images/ST_artists.jpg";
import storefront from "public/images/ST_storefront.jpg";
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
              Sonrisa Tattoo was founded and opened in 2024 by owner Reuben Garcia. Our studio combines artistic innovation
              with a commitment to quality and hygiene, ensuring you leave with a tattoo you'll love for a lifetime. Our
              talented team of skilled artists specializes in a diverse range of styles, from intricate custom designs to
              classic flash tattoos.
            </p>
            <p>
              At Sonrisa Tattoo, we prioritize your comfort and safety, using top-notch equipment and maintaining a clean,
              welcoming environment. Whether you're a first-timer or a seasoned ink enthusiast, we're here to make your
              tattoo experience smooth, enjoyable, and unforgettable. Come visit us and let your skin become a canvas for
              creativity!
            </p>
          </InfoSection>

          <InfoSection title={"ARTISTS"} image={artists} imageAlt="Picture of the Sonrisa Tattoo Artists">
            <li>
              <h2>REUBEN GARCIA</h2>
              <a href="https://www.instagram.com/rackruin/" target="_blank">
                <InstagramIcon classStyle={styles.SocialIcon} fillColor="var(--accent-color)" />
              </a>
            </li>
            <br />
            <h2>ASHLEY HEINY</h2>
            <a href="https://www.instagram.com/ashleyheiny/" target="_blank">
              <InstagramIcon classStyle={styles.SocialIcon} fillColor="var(--accent-color)" />
            </a>
          </InfoSection>
        </InfoSectionList>
      </div>
    </>
  );
}
