import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";

import portfolio from "./data.js";

export default function Portfolio() {
  console.log(portfolio[1]);

  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Projekte</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <Link href="#">
            <div className={styles.imgContainer}>
              <Image
                src="/existenzstand.svg"
                fill={true}
                className={styles.img}
              />
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.icon}>
                <Image src="/link.svg" width={8.7} height={8.7} />
              </div>
              <div className={styles.link}>ExistenStand</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
