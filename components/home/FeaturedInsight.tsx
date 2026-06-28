import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function FeaturedInsight() {
  const featuredPost =
    getAllPosts().find((post) => post.featured) ?? getAllPosts()[0];

  if (!featuredPost) return null;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Featured Insight
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
                {featuredPost.category}
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                {featuredPost.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readingTime} min read</span>
              </div>

              <Link
                href={`/insights/${featuredPost.slug}`}
                className="mt-10 inline-flex w-fit rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Read Article →
              </Link>
            </div>

            <div className="relative min-h-[380px]">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}