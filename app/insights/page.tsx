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
          Latest perspectives on MRV, methane management, carbon capture, and
          industrial decarbonization.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="font-bold text-emerald-600">
                  {post.category}
                </span>

                <span className="text-slate-500">
                  {post.readingTime} min read
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-black">
                {post.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-8 font-semibold text-emerald-600">
                Read more →
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}