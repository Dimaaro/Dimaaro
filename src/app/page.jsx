import About from "@/components/About/About";
import styles from "./page.module.css";
import Portfolio from "@/components/Portfolio/Portfolio";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.projekte}>
        <Portfolio />
      </div>
    </main>
  );
}
