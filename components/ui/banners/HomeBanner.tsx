import * as Logo from "components/ui/logos";
import Image from "next/image";
import styles from "styles/components/ui/HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <section className={styles.HomeBanner}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <Logo.SonrisaFullOutlined />
        </div>
        <div className={styles.bar}></div>
        <div className={styles.text__container}>
          <p>Custom Quality Tattoo Shop in Grand Rapids, Michigan.</p>
        </div>
      </div>
      <Image src={"/stock_banner_image.png"} fill={true} alt={"banner image"} priority />
    </section>
  );
}
