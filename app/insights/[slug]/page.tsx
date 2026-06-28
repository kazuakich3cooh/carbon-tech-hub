import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
          {post.category}
        </p>

        <h1 className="mt-4 text-5xl font-black">
          {post.title}
        </h1>

        <div className="mt-6 flex gap-6 text-sm text-slate-500">
          <span>{post.date}</span>
          <span>{post.readingTime} min read</span>
          <span>{post.author}</span>
        </div>

        <p className="mt-8 text-xl text-slate-600">
          {post.excerpt}
        </p>

        <div className="relative mt-10 h-[420px] overflow-hidden rounded-3xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <hr className="my-10" />

        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}