import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Impressum() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.h1}>Impressum</h1>
        <div className={styles.item}>
          <h2 className={styles.h2}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p className={styles.p}>
            Dimitrij Rogotnev
            <br />
            Albert-Schweitzer-Stra&szlig;e 43
            <br />
            59077 Hamm
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.h2}>Kontakt</h2>
          <p className={styles.p}>
            Telefon: +49 157 375 721 15
            <br />
            E-Mail: support@dimaaro.com
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.h2}>EU-Streitschlichtung</h2>
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.h2}>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p className={styles.p}>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
      <div className={styles.items}>
        <Footer />
      </div>
    </div>
  );
}
