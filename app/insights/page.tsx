export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">
          Insights
        </p>
        <h1 className="mt-6 text-5xl font-black">Carbon Technology Insights</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Latest perspectives on MRV, methane management, carbon capture, and industrial decarbonization.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "EU Methane Regulation",
            "Carbon Capture Technologies",
            "Digital MRV Systems",
            "Flare Monitoring",
            "Satellite Methane Detection",
            "AI for Emissions Monitoring",
          ].map((title) => (
            <article key={title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-bold text-emerald-600">Insight</p>
              <h2 className="mt-4 text-2xl font-black">{title}</h2>
              <p className="mt-4 text-slate-600">
                A practical overview of trends, technologies, and regulatory drivers.
              </p>
              <p className="mt-6 font-semibold text-emerald-600">Read more →</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}