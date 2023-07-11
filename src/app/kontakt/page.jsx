import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

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
          <form className={styles.form}>
            <h2 className={styles.h2}>Kontakt</h2>
            <div className={styles.item}>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.input}
                placeholder="Name"
              />
              <Image
                src="/name.svg"
                width={37.29}
                height={29.83}
                className={styles.iconName}
              />
            </div>
            <div className={styles.item}>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder="E-Mail-Adresse"
              />
              <Image
                src="/email.svg"
                width={37.29}
                height={29.83}
                className={styles.iconEmail}
              />
            </div>
            <div className={styles.item}>
              <textarea
                name="nachricht"
                id="nachricht"
                cols="30"
                rows="10"
                className={styles.input}
                placeholder="Nachricht"
              ></textarea>
              <Image
                src="/desc.svg"
                width={37.29}
                height={29.83}
                className={styles.iconMessage}
              />
            </div>
            <div className={styles.toggle}>
              <div className={styles.toggleItem}>
                <div className={styles.toggleSwitch}>
                  <input
                    className={styles.toggleInput}
                    id="toggle"
                    type="checkbox"
                  />
                  <label className={styles.toggleLabel} htmlFor="toggle"></label>
                </div>
              </div>
              <div className={styles.toggleItem}></div>

              <div className={styles.toggleText}>
                Ich habe die{" "}
                <Link href="/datenschutz" className={styles.elink}>
                  Datenschutzverordnung
                </Link>{" "}
                zur Kenntnis genommen. Ich stimme zu, dass meine Daten zur
                Kontaktaufnahme genutzt und auf elektronischem Wege gespeichert
                werden.
              </div>
            </div>
            <button className={styles.button}>Anfrage stellen</button>
          </form>
          <Footer />
        </div>
      </div>
    </main>
  );
}
