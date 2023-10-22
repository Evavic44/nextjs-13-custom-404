"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFoundComponent() {
  const path = usePathname();

  return (
    <main className="container">
      <h1>{`"${path}"`} Not Found 📖</h1>
      <p>Oops! We could not find this post.</p>
      <Link href="/blog" className="button">
        Return To Blog
      </Link>
    </main>
  );
}
