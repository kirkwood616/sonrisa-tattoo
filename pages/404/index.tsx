import { SonrisaTeeth } from "components/Logos";
import Head from "next/head";
import styles from "./Custom404.module.css";

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
        <SonrisaTeeth />
      </div>
    </>
  );
}
