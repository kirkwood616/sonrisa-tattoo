import { PageTitle } from "components/Headings";
import Image from "next/image";
import styles from "./PageBanner.module.css";

interface PageBannerProps {
  title: string;
  description: string;
}

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className={styles.PageBanner}>
      <div className={styles.container}>
        <PageTitle>{title.toUpperCase()}</PageTitle>
        <p>{description}</p>
      </div>

      <Image src={"/images/stock_banner_image.png"} fill={true} alt={"banner image"} priority />
    </section>
  );
}
