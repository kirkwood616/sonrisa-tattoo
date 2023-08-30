import { PageBanner } from "components/Banners";
import Head from "next/head";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Sonrisa Tattoo</title>
        <meta name="work" content="Sonrisa Tattoo | Gallery of our tattoo work." />
      </Head>
      <div className="Work">
        <PageBanner title={"Work"} description={"Gallery of our tattoo work."} />
      </div>
    </>
  );
}
