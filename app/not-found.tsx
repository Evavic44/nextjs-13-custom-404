import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="container">
      <h1>Error 404 😥</h1>
      <p>Oops! This page was not found</p>
      <Link href="/" className="button">
        Return Home
      </Link>
    </main>
  );
}
