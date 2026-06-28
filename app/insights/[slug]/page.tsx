import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found | CarbonTech Hub",
    };
  }

 return {
  title: `${post.title} | CarbonTech Hub`,
  description: post.description,

  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://carbon-tech-hub.com/insights/${post.slug}`,
    siteName: "CarbonTech Hub",
    images: [
      {
        url: `https://carbon-tech-hub.com${post.coverImage}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [`https://carbon-tech-hub.com${post.coverImage}`],
  },

  alternates: {
  canonical: `https://carbon-tech-hub.com/insights/${post.slug}`,
  }, 
};
}


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

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Tags
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}