"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.h1}>
          <Link href="/" className={styles.logo}>
            DIMAARO
          </Link>
        </h1>
      </div>
      <div className={styles.item}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.social}>
          <a href="https://github.com/dimaaro" target="_blank">
            <Image src="/github.svg" width={20} height={20} />
          </a>
          <a href="https://www.instagram.com/dimaaro" target="_blank">
            <Image src="/instagram.svg" width={20} height={20} />
          </a>
          <a href="https://de.linkedin.com/in/dimaaro" target="_blank">
            <Image src="/linkedin.svg" width={20} height={20} />
          </a>
          <a href="https://www.xing.com/profile/dimitrij_rogotnev" target="_blank">
            <Image src="/xing.svg" width={20} height={20} />
          </a>
          <div className={styles.line}></div>
        </div>
      </div>
    </header>
  );
}
