import styles from "./support.module.css"

export default function Support() {
    return (
        <div className={styles.container}>
            <a href="mailto:support@dimaaro.com" className={styles.a}>support@dimaaro.com</a>
            <div className={styles.line}></div>
        </div>
    )
}