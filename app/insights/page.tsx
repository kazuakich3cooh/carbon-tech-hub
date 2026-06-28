import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">
          Insights
        </p>

        <h1 className="mt-6 text-5xl font-black">
          Carbon Technology Insights
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Latest perspectives on MRV, methane management, carbon capture,
          and industrial decarbonization.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
                    {post.category}
                  </span>

                  <span className="text-sm text-slate-500">
                    {post.readingTime} min read
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black leading-tight">
                  {post.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-8 inline-flex font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}