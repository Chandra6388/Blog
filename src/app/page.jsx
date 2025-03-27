"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Welcome to my app</h1>
      <p className={styles.description}>
        Get started by editing <code>src/app/page.jsx</code>
      </p>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        </div>

      
    </main>
  );
}
