export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.25),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            CarbonTech Hub
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Connecting Carbon Technologies &amp; MRV Solutions
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            A platform for carbon technologies, MRV solutions, emissions
            monitoring, and industrial decarbonization.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/submit"
              className="rounded-full bg-emerald-500 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Apply for Listing
            </a>

            <a
              href="/solutions"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Request Consulting Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}