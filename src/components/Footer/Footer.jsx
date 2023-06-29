"use client";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const date = new Date().getFullYear();

  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.item}>
        <Link
          href="/impressum"
          className={
            pathname === "/impressum" ? styles.a + " " + styles.active : styles.a
          }
        >
          Impressum
        </Link>
        <Link
          href="/datenschutz"
          className={
            pathname === "/datenschutz" ? styles.a + " " + styles.active : styles.a
          }
        >
          Datenschutz
        </Link>
      </div>
      <div className={styles.item}>
        Dimaaro © {date} | All rights reserved. Made by Dimaaro
      </div>
    </footer>
  );
}
