import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <span className={styles.label}>
          ☕ Kopi<b>Nusantara</b>
        </span>

        <div className={styles.identitas}>
          <h1 className={styles.nama}>Marcello Kwandinata</h1>
          <p className={styles.nim}>535250089</p>
        </div>

        <a href="/kopi-nusantara/index.html" className={styles.tombol}>
          Next Page
        </a>
      </div>
    </main>
  );
}