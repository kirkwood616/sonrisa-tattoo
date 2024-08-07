import { PageBanner } from "components/Banners";
import { EMailIcon, FacebookIcon, InstagramIcon, LocationIcon, SocialsIcon } from "components/Icons";
import { MapPin } from "components/Icons/MapPin";
import { InfoSection, InfoSectionList } from "components/Info";
import Head from "next/head";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Sonrisa Tattoo</title>
        <meta name="contact" content="Sonrisa Tattoo | Our contact information." />
      </Head>
      <div className={styles.Contact}>
        <PageBanner title={"Contact"} description={"Our contact information."} />
        <InfoSectionList>
          <InfoSection title="E-Mail" svgComponent={<EMailIcon />}>
            <p>
              <a href="mailto:sonrisatattoo@gmail.com">sonrisatattoo@gmail.com</a>
            </p>
          </InfoSection>

          <InfoSection title="Social Media" svgComponent={<SocialsIcon />}>
            <div className={styles.socials__container}>
              <div className={styles.socials_info}>
                <a href="https://www.instagram.com/sonrisatattoo/" target="_blank">
                  <InstagramIcon classStyle={styles.SocialIcon} fillColor="var(--light-gray-2)" />
                  Instagram
                </a>
              </div>
              <div className={styles.socials_info}>
                <a href="https://www.facebook.com/profile.php?id=100094113892566" target="_blank">
                  <FacebookIcon classStyle={styles.SocialIcon} fillColor="var(--light-gray-2)" />
                </a>
                Facebook
              </div>
            </div>
          </InfoSection>

          <InfoSection title="Location" svgComponent={<LocationIcon />}>
            <p>637 Michigan St. NE</p>
            <p>Suite B</p>
            <p>Grand Rapids, MI 49503</p>
            <MapPin
              classStyle={styles.MapPin}
              linkURL="https://www.google.com/maps/place/Sonrisa+Tattoo/@42.9703935,-85.6536473,18.77z/data=!4m6!3m5!1s0x8819ad88c1e29ce1:0xfc41dab1e2b9139c!8m2!3d42.9703591!4d-85.6530701!16s%2Fg%2F11l6zvmv85?entry=ttu"
            />
          </InfoSection>
        </InfoSectionList>
      </div>
    </>
  );
}
