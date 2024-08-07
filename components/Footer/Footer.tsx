import { FooterHeading } from "components/Headings";
import { FacebookIcon, InstagramIcon, MapPin } from "components/Icons";
import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <section className={styles.info_box}>
        <FooterHeading title={"Location"} />
        <p>637 Michigan St. NE</p>
        <p>Suite B</p>
        <p>Grand Rapids, MI 49503</p>
        <MapPin
          classStyle={styles.MapPin}
          linkURL="https://www.google.com/maps/place/Sonrisa+Tattoo/@42.9703935,-85.6536473,18.77z/data=!4m6!3m5!1s0x8819ad88c1e29ce1:0xfc41dab1e2b9139c!8m2!3d42.9703591!4d-85.6530701!16s%2Fg%2F11l6zvmv85?entry=ttu"
        />
      </section>
      <section className={styles.info_box}>
        <FooterHeading title={"Hours"} />
        <p className={styles.p__info_heading}>Sunday & Monday</p>
        <p>Appointment Only</p>
        <br />
        <p className={styles.p__info_heading}>Tuesday - Saturday</p>
        <p>12:00 PM - 8:00 PM</p>
      </section>
      <section className={styles.info_box}>
        <FooterHeading title={"Contact"} />
        <p>
          <Link href="mailto:sonrisatattoo@gmail.com">sonrisatattoo@gmail.com</Link>
        </p>
      </section>
      <section className={styles.info_box__socials}>
        <InstagramIcon
          classStyle={styles.SocialsIcon}
          fillColor="var(--light-gray-2"
          linkURL="https://www.instagram.com/sonrisatattoo/"
        />
        <FacebookIcon
          classStyle={styles.SocialsIcon}
          fillColor="var(--light-gray-2"
          linkURL="https://www.facebook.com/profile.php?id=100094113892566"
        />
      </section>
    </footer>
  );
}
