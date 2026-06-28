import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">
          404
        </p>

        <h1 className="mt-6 text-5xl font-black text-slate-900">
          Article Not Found
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Sorry, the article you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/insights"
          className="mt-10 inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          ← Back to Insights
        </Link>
      </div>
    </main>
  );
}