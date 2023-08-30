import { InfoHeading } from "@/components/Headings";
import { InfoDiv } from "@/components/Info";
import { PageBanner } from "components/Banners";
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
        <InfoDiv>
          <InfoHeading title={"Phone"} />
          <p>
            <a href="tel:+6165555555">(616) 555-5555</a>
          </p>
        </InfoDiv>
        <InfoDiv>
          <InfoHeading title={"E-Mail"} />
          <p>
            <a href="mailto:sonrisatattoo@gmail.com">sonrisatattoo@gmail.com</a>
          </p>
        </InfoDiv>
        <InfoDiv>
          <InfoHeading title={"Location"} />
          <p>5555 Street Ave NW</p>
          <p>Grand Rapids, MI 49504</p>
          <div className={styles.map}>MAP</div>
        </InfoDiv>
      </div>
    </>
  );
}
