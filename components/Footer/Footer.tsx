import { FooterHeading } from "components/Headings";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <section className={styles.info_box}>
        <FooterHeading title={"Location"} />
        <p>5555 Street Ave NW</p>
        <p>Grand Rapids, MI 49504</p>
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
        <p>616-555-5555</p>
        <p>
          <Link href="mailto:sonrisatattoo@gmail.com">sonrisatattoo@gmail.com</Link>
        </p>
      </section>
      <section className={styles.info_box__socials}>
        <Image
          src={"/images/instagram_logo_48px.png"}
          height={48}
          width={48}
          alt={"Instagram icon"}
          className={styles.social_image}
        />
        <Image
          src={"/images/facebook_logo_48px.png"}
          height={48}
          width={48}
          alt={"Facebook icon"}
          className={styles.social_image}
        />
      </section>
    </footer>
  );
}
