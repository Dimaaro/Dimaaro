import styles from "./notfound.module.css"

export default function notFound() {
  return (
    <div className={styles.container}>
      <div className={styles.p404}>
        <h1>404</h1>
      </div>
      <div className={styles.error}>
        Seite wurde nicht gefunden.
      </div>
    </div>
  )
}


