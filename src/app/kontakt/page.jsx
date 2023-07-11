import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import ContactForm from "./ContactForm";

export default function Kontakt() {
  return (
    <main className={styles.container}>
      <div className={styles.projektanfrage}>
        <h1 className={styles.h1}>Projektanfrage</h1>
        <h2 className={styles.span}>
          Noch heute einen Erstgespräch vereinbaren - ich bin gespannt darauf,
          gemeinsam mit dir daran zu arbeiten und Dein Vorhaben erfolgreich
          umzusetzen.
        </h2>
        <p className={styles.p}>
          Hierzu erstelle einfach eine Projektanfrage und erzähle mir einige
          Details zu deinem Projekt. Gemeinsam werden wir Lösungen für deine
          Anliegen erarbeiten und deinem Unternehmen dabei helfen, sich auf das
          nächste Level zu entwickeln.
        </p>
        <p className={styles.p}>
          Ich freue mich darauf, dich kennenzulernen und mehr über dein Projekt
          zu erfahren.
        </p>
        <h2 className={styles.h2}>Erreichbarkeit</h2>
        <div className={styles.dataContainer}>
          <div className={styles.dataRow}>
            <div className={styles.dataCol}>
              <div className={styles.dataA}>Montag - Donnerstag</div>
              <div className={styles.dataB}>09:00 – 17:00 Uhr</div>
            </div>
            <div className={styles.dataCol}>
              <div className={styles.dataA}>Freitag</div>
              <div className={styles.dataB}>09:00 – 13:00 Uhr</div>
            </div>
          </div>
          <div className={styles.dataRow}>
            <div className={styles.dataCol}>
              <div className={styles.dataA}>E-Mail</div>
              <div className={styles.dataB}>
                <a href="mailto:support@dimaaro.com">support@dimaaro.com</a>
              </div>
            </div>
            <div className={styles.dataCol}>
              <div className={styles.dataA + " " + styles.socialNone}>
                Social
              </div>
              <div className={styles.dataB}>
                <div className={styles.icons}>
                  <a href="https://github.com/dimaaro" target="_blank">
                    <Image src="/github.svg" width={20} height={20} />
                  </a>
                  <a href="https://www.instagram.com/dimaaro" target="_blank">
                    <Image src="/instagram.svg" width={20} height={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/dimaaro" target="_blank">
                    <Image src="/linkedin.svg" width={20} height={20} />
                  </a>
                  <a href="https://www.xing.com/profile/dimitrij_rogotnev" target="_blank">
                    <Image src="/xing.svg" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <ContactForm />
          <Footer />
        </div>
      </div>
    </main>
  );
}
