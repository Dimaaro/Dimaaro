import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";

import data from "./data.js";

export default function Portfolio() {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Projekte</h2>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <Link href={item.url}>
              <div className={styles.imgContainer}>
                <Image
                  src={item.image}
                  fill={true}
                  className={styles.img}
                />
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.icon}>
                  <Image src="/link.svg" width={8.7} height={8.7} />
                </div>
                <div className={styles.link}>{ item.name }</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
