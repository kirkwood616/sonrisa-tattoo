import Image, { StaticImageData } from "next/image";
import styles from "styles/components/ui/InfoSection.module.css";
import InfoHeading from "../headings/InfoHeading";
import InfoDiv from "./InfoDiv";

interface InfoSectionProps {
  title: string;
  svgComponent?: React.ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  children: React.ReactNode;
}

export default function InfoSection({ title, svgComponent, image, imageAlt, children }: InfoSectionProps) {
  return (
    <section className={styles.InfoSection}>
      <div className={styles.info__container}>
        <div className={styles.image__container}>
          <div className={styles.image__wrapper}>
            {svgComponent && svgComponent}
            {image && imageAlt && <Image src={image} fill alt={imageAlt} />}
          </div>
        </div>
        <article>
          <InfoDiv>
            <InfoHeading title={title} />
            {children}
          </InfoDiv>
        </article>
      </div>
    </section>
  );
}
