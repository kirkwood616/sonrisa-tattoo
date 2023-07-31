import Image from "next/image";
import Link from "next/link";
import styles from "styles/components/ui/Footer.module.css";
import FooterHeading from "../headings/FooterHeading";

export default function Footer() {
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
          src={"/instagram_logo_48px.png"}
          height={48}
          width={48}
          alt={"Instagram icon"}
          className={styles.social_image}
        />
        <Image
          src={"/facebook_logo_48px.png"}
          height={48}
          width={48}
          alt={"Facebook icon"}
          className={styles.social_image}
        />
      </section>
    </footer>
  );
}
