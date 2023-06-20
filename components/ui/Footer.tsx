import Image from "next/image";
import Link from "next/link";
import styles from "styles/ui/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.info_box}>
        <h2>LOCATION</h2>
        <p>5555 Street Ave NW</p>
        <p>Grand Rapids, MI 49504</p>
        <p></p>
      </div>
      <div className={styles.info_box}>
        <h2>HOURS</h2>
        <p className={styles.p__info_heading}>Sunday & Monday</p>
        <p>Appointment Only</p>
        <p className={styles.p__info_heading}>Tuesday - Saturday</p>
        <p>12:00 PM - 8:00 PM</p>
      </div>
      <div className={styles.info_box}>
        <h2>CONTACT</h2>
        <p>616-555-5555</p>
        <Link href="mailto:sonrisatattoo@gmail.com">
          <p>sonrisatattoo@gmail.com</p>
        </Link>
      </div>
      <div className={styles.info_box__socials}>
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
      </div>
    </footer>
  );
}
