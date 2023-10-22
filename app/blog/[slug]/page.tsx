import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
  if (params.slug.length > 1) {
    notFound();
  }

  return (
    <div className="container">
      <h1>Post Slug: {params.slug} 📖</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        dicta.
      </p>
      <Link href="/blog" className="button">
        Return To Blog
      </Link>
    </div>
  );
}
