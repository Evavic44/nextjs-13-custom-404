"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/notFound.module.css";

export default function NotFoundComponent() {
  const path = usePathname();

  return (
    <main className={styles.container}>
      <h1>{`"${path}"`} Not Found 📖</h1>
      <p>Oops! We could not find this post.</p>
      <Link href="/blog" className={styles.button}>
        Return To Blog
      </Link>
    </main>
  );
}
