import AppointmentForm from "@/components/Form/Appointment/AppointmentForm";
import { PageBanner } from "components/Banners";
import { InfoSection } from "components/Info";
import Head from "next/head";

export default function Appointment() {
  return (
    <>
      <Head>
        <title>Appointment | Sonrisa Tattoo</title>
        <meta name="appointment" content="Sonrisa Tattoo | Request an appointment." />
      </Head>
      <div>
        <PageBanner title={"Appointment"} description={"Request an Appointment"} />
        <InfoSection title={"Request Form"}>
          <AppointmentForm />
        </InfoSection>
      </div>
    </>
  );
}
