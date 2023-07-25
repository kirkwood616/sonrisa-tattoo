import Image from "next/image";
import styles from "styles/components/ui/PageBanner.module.css";
import PageTitle from "../headings/PageTitle";

interface PageBannerProps {
  title: string;
  description: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className={styles.PageBanner}>
      <div className={styles.container}>
        <PageTitle>{title.toUpperCase()}</PageTitle>
        <p>{description}</p>
      </div>

      <Image src={"/stock_banner_image.png"} fill={true} alt={"banner image"} priority />
    </section>
  );
}
