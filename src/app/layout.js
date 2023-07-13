import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header/Header";
import styles from "./layout.module.css"
import Support from "@/components/Support/Support";
import Navbar from "@/components/Navbar/Navbar";

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dimaaro",
  description: "Hi, ich bin Dimaaro. Designer & Front End Entwickler. Seit 2021 arbeite ich als Designer und Front End Entwickler eng mit meinen Kunden zusammen, um einfache und interaktive Lösungen für komplexe Probleme zu schaffen. ",
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={robotoCondensed.className}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Header />
          </header>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <main className={styles.children}>
            {children}
          </main>
          <div className={styles.support}>
            <Support />
          </div>
        </div>
        <Script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
