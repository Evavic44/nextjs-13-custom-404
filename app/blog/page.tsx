import Link from "next/link";

export default function Blog() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <div>
        <Link href="/blog/a">Post A</Link>
        <Link href="/blog/b">Post B</Link>
        <Link href="/blog/cc">Post C</Link>
      </div>
    </div>
  );
}
