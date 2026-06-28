import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export default function LatestInsights() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Latest Insights
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Explore carbon technology trends.
            </h2>
          </div>

          <Link
            href="/insights"
            className="hidden text-sm font-semibold text-emerald-700 hover:text-emerald-900 sm:block"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
                  {post.category}
                </span>

                <h3 className="mt-5 text-xl font-bold leading-7">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
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
                  className="mt-6 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}