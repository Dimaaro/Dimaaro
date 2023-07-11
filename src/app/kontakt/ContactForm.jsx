"use client"
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true);
    
    const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			message: String(event.target.message.value),
		};

    const response = await fetch("api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

    if (response.ok) {
			console.log("Message sent successfully");
      setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.message.value = "";
		}

    if (!response.ok) {
			console.log("Error sending message");
		}
  }



  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.h2}>Kontakt</h2>
      <div className={styles.item}>
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input}
          placeholder="Name"
          autoComplete="off"
          required
        />
        <Image
          src="/name.svg"
          width={37.29}
          height={29.83}
          className={styles.iconName}
        />
      </div>
      <div className={styles.item}>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          placeholder="E-Mail-Adresse"
          autoComplete="off"
          required
        />
        <Image
          src="/email.svg"
          width={37.29}
          height={29.83}
          className={styles.iconEmail}
        />
      </div>
      <div className={styles.item}>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className={styles.input}
          placeholder="Nachricht"
          autoComplete="off"
        ></textarea>
        <Image
          src="/desc.svg"
          width={37.29}
          height={29.83}
          className={styles.iconMessage}
        />
      </div>
      <div className={styles.toggle}>
        <div className={styles.toggleItem}>
          <div className={styles.toggleSwitch}>
            <input className={styles.toggleInput} id="toggle" type="checkbox" required />
            <label className={styles.toggleLabel} htmlFor="toggle"></label>
          </div>
        </div>
        <div className={styles.toggleItem}></div>

        <div className={styles.toggleText}>
          Ich habe die{" "}
          <Link href="/datenschutz" className={styles.elink}>
            Datenschutzverordnung
          </Link>{" "}
          zur Kenntnis genommen. Ich stimme zu, dass meine Daten zur
          Kontaktaufnahme genutzt und auf elektronischem Wege gespeichert
          werden.
        </div>
      </div>
      <button type="submit" className={styles.button}>
        Anfrage stellen
      </button>
    </form>
  );
}
