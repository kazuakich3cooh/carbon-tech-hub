const solutions = [
  {
    company: "SENSIA",
    category: "Flare Monitoring",
    description:
      "Advanced optical gas imaging and flare combustion efficiency monitoring.",
  },
  {
    company: "TAUROB",
    category: "Robotics",
    description:
      "Autonomous inspection robots for industrial decarbonization assets.",
  },
  {
    company: "GHGSat",
    category: "Satellite MRV",
    description:
      "Satellite-based greenhouse gas emissions monitoring.",
  },
  {
    company: "SeekOps",
    category: "Drone MRV",
    description:
      "Drone-based methane emissions quantification.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-600">
          Solutions
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          Explore Carbon Technologies
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Discover innovative solutions for methane management,
          carbon capture, robotics, digital MRV and industrial
          decarbonization.
        </p>

        <div className="mt-12">
          <input
            placeholder="Search technologies..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-5 text-lg shadow-sm outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {solutions.map((item) => (

            <div
              key={item.company}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                {item.category}
              </p>

              <h2 className="mt-5 text-4xl font-black">
                {item.company}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {item.description}
              </p>

              <button className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
                View Solution →
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}