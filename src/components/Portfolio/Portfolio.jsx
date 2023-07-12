import Image from "next/image";
import styles from "./portfolio.module.css";

import data from "./data.js";
import Footer from "../Footer/Footer";

export default function Portfolio() {
  return (
    <section className={styles.PortfolioContainer}>
      <h2 className={styles.PortfolioH2}>Projekte</h2>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <a href={item.url} target="_blank">
              <div className={styles.imgContainer}>
                <Image src={item.image} fill sizes="(max-width: 1200px) 100vw" className={styles.img} alt={item.desc} />
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.icon}>
                  <Image src="/link.svg" width={8.7} height={8.7} alt="Dimaaro Projekt Link Icon" />
                </div>
                <div className={styles.link}>{item.name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  );
}
