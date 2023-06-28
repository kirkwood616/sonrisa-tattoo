import AftercareInfo from "@/components/ui/AftercareInfo";
import PageTitle from "@/components/ui/PageTitle";
import Head from "next/head";
import styles from "styles/pages/Aftercare.module.css";

export default function Aftercare() {
  return (
    <>
      <Head>
        <title>Aftercare | Sonrisa Tattoo</title>
        <meta name="aftercare" content="Sonrisa Tattoo | Aftercare instructions for your new tattoo." />
      </Head>

      <div className={styles.Aftercare}>
        <PageTitle>AFTERCARE</PageTitle>

        <AftercareInfo title="BANDAGES">
          <ul>
            <li>Remove bandage after 2 hours.</li>
            <li>If the bandage sticks to the tattoo, rinse it with warm water unit it comes loose.</li>
            <li>Do not rebandage your tattoo. Allow it to breathe.</li>
          </ul>
        </AftercareInfo>

        <AftercareInfo title="WASHING">
          <ul>
            <li>Wash your tattoo gently with warm water and a mild soap.</li>
            <li>
              Unscented soap is preferred to avoid irritation. Antibacterial soap can be used, but is typically not
              recommended.
            </li>
            <li>Lather with clean hands then apply soap directly to tattoo.</li>
            <li>Pat dry your tattoo with a fresh paper towel. </li>
            <li>Let your washed tattoo breathe for 10 - 15 minutes before applying topicals.</li>
            <li>Wash your tattoo according to these directions 2-3 times a day for 7-14 days.</li>
          </ul>
        </AftercareInfo>

        <AftercareInfo title="TOPICALS">
          <ul>
            <li>
              After washing your new tattoo and it has fully dried, apply a very thin layer of Aquaphor or A&D ointment 3-4
              times per day, for 3-5 days.
            </li>
            <li>
              After 3-5 days of using ointment, switch to a fragrance free, dye free hand lotion (i.e. Curel Ultra Healing,
              Eucerin, Lubriderm). Apply lotion in a thin layer. If the tattoo feels dry and tight, apply a little more.
            </li>
            <li>Continue with application of lotion until the tattoo is completely healed, typically 30 days.</li>
            <li>
              The sun&apos;s UV rays will fade your tattoo if exposed to excessive direct sunlight. After your tattoo is
              fully healed, it is recommended to apply a sunblock of SPF 50 or higher when your tattoo will be exposed to
              prolonged periods of direct sunlight.
            </li>
          </ul>
        </AftercareInfo>

        <AftercareInfo title="WARNINGS">
          <ul>
            <li>
              DO NOT: Pick or scratch at the tattoo. You could create scarring and dirty fingers may cause an infection.
            </li>
            <li>DO NOT: Go swimming in chlorine or salt water for at least two weeks.</li>
            <li>DO NOT: Go in direct sunlight or apply sun block until the tattoo is completely healed.</li>
            <li>DO NOT: Wear clothing that will be tight and abrasive for a healing tattoo.</li>
            <li>
              Your new tattoo was applied using sterile equipment and procedures. Infections occur outside the studio. It is
              your responsibility to take care of your tattoo. Following these instructions will minimize the risk of any
              complications.
            </li>
            <li>
              Symptoms of an infection are redness, swelling, hot or warm to the touch, red streaks, yellow or green pus. If
              any of these symptoms are present a few days after your tattoo is done, it is recommended you contact your
              doctor.
            </li>
          </ul>
        </AftercareInfo>
      </div>
    </>
  );
}
