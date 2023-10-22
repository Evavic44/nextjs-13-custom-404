import Link from "next/link";
import styles from "./styles/notFound.module.css";

export default async function NotFound() {
  return (
    <main className={styles.container}>
      <h1>Error 404 😥</h1>
      <p>Oops! This page was not found</p>
      <Link href="/" className={styles.button}>
        Return Home
      </Link>
    </main>
  );
}
