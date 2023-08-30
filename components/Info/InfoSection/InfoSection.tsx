import { InfoHeading } from "components/Headings";
import { InfoDiv } from "components/Info";
import Image, { StaticImageData } from "next/image";
import styles from "./InfoSection.module.css";

interface InfoSectionProps {
  title: string;
  svgComponent?: React.ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  children: React.ReactNode;
}

export function InfoSection({ title, svgComponent, image, imageAlt, children }: InfoSectionProps) {
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
