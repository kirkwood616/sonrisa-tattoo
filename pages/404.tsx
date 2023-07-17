import * as Logos from "components/ui/logos/";
import Head from "next/head";
import styles from "styles/pages/Custom404.module.css";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
        <meta name="404" content="404 | Page Not Found" />
      </Head>
      <div className={styles.Custom404}>
        <div className={styles.container}>
          <h1>404</h1>
          <div className={styles.bar}></div>
          <h2>PAGE NOT FOUND</h2>
        </div>
        <Logos.SonrisaTeeth />
      </div>
    </>
  );
}
