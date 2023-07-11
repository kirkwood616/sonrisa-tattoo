import * as Logo from "components/ui/logos";
import Image from "next/image";
import styles from "styles/components/ui/HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <section className={styles.HomeBanner}>
      <div className={styles.container}>
        <Logo.SonrisaFullOutlined />
      </div>
      <Image src={"/stock_banner_image.png"} fill={true} alt={"banner image"} />
    </section>
  );
}
