"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Kontakt",
      url: "/kontakt",
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li className={styles.li}>
            <Link
              key={link.id}
              href={link.url}
              className={
                pathname === link.url
                  ? styles.a + " " + styles.active
                  : styles.a
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
        <div className={styles.img}>
          <Image src="/dimaaro.png" width={22} height={22} />
        </div>
      </ul>
    </nav>
  );
}
