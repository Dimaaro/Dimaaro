import styles from "./about.module.css";
import Image from "next/image"

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/dimaaro.png"
          width={100}
          height={100}
          className={styles.img}
        />
        <h1 className={styles.h1}>
          Hi, ich bin Dima.<span className="text-secondary"> Designer</span> &
          <span className="text-secondary"> Front End Entwickler</span>.
        </h1>
        <p className={styles.p}>
          Seit 2021 arbeite ich als Designer und Front End Entwickler eng mit
          meinen Kunden zusammen, um einfache und interaktive Lösungen für
          komplexe Probleme zu schaffen. Derzeit arbeite ich hauptsächlich mit
          UI/UX Design, ReactJS, NodeJS und anderen Front End-Technologien.
        </p>
        <p className={styles.p}>
          Ich freue mich darauf, Deine Vision zum Leben zu erwecken
        </p>
      </div>
      <div className={styles.item}>
        <h2>Frameworks</h2>
        <div className={styles.skillItems}>
          <div className={styles.skillItem}>
            <Image src="/wordpress.svg" width={20} height={20} />
            <h3 className={styles.h3}>WordPress</h3>
          </div>
          <div className={styles.skillItem}>
            <Image src="/react.svg" width={20} height={20} />
            <h3 className={styles.h3}>ReactJS</h3>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <h2>Technologien & Skills</h2>
        <div className={styles.skillItems}>
          <div className={styles.skillItem}>
            <Image src="/html5.svg" width={20} height={20} />
            <h3 className={styles.h3}>HTML</h3>
          </div>
          <div className={styles.skillItem}>
            <Image src="/css3.svg" width={20} height={20} />
            <h3 className={styles.h3}>CSS</h3>
          </div>
          <div className={styles.skillItem}>
            <Image src="/bootstrap.svg" width={20} height={20} />
            <h3 className={styles.h3}>Bootstrap</h3>
          </div>
          <div className={styles.skillItem}>
            <Image src="/javascript.svg" width={20} height={20} />
            <h3 className={styles.h3}>JavaScript</h3>
          </div>
          <div className={styles.skillItem}>
            <Image src="/nextjs.svg" width={20} height={20} />
            <h3 className={styles.h3}>NextJS</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
