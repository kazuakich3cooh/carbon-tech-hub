export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          CarbonTech Hub
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Connecting Carbon Technologies, MRV Solutions, and Industrial Decarbonization.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          A practical knowledge hub for methane management, carbon capture,
          flare monitoring, and industrial emissions measurement.
        </p>

        <div className="mt-10 flex gap-4">
          <a className="rounded-full bg-emerald-600 px-6 py-3 text-white" href="#technologies">
            Explore Technologies
          </a>
          <a className="rounded-full border border-slate-300 px-6 py-3" href="#contact">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}