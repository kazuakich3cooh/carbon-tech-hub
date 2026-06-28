export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2rem] border border-emerald-100 bg-white p-10 shadow-xl shadow-slate-200/70">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Looking for support with emissions, MRV, or environmental
                regulations?
              </h2>

              <p className="mt-4 text-slate-600">
                CarbonTech Hub can help clarify requirements and identify
                practical technology options.
              </p>
            </div>

            <a
              href="/solutions"
              className="rounded-full bg-emerald-600 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Request Consulting Support
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}