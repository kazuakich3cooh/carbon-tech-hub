export default function HomePage() {
  const insights = [
    {
      category: "Regulation",
      title: "EU Methane Regulation: What Companies Need to Know",
      text: "An overview of methane rules and what they mean for industrial operators.",
    },
    {
      category: "Technology",
      title: "Advances in Methane Detection Technologies",
      text: "How monitoring technologies are improving emissions visibility.",
    },
    {
      category: "MRV",
      title: "Building an Effective MRV Strategy",
      text: "Key components for measurement, reporting, and verification.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.25),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              CarbonTech Hub
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Connecting Carbon Technologies & MRV Solutions
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

      <section className="bg-slate-950 px-6 pb-24 text-white">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-emerald-950/40">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Global Network
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Linking solution providers and industrial operators worldwide.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Europe, North America, Tokyo, and Singapore are emerging as key
              hubs for regulation, innovation, and industrial decarbonization.
            </p>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-slate-950">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(16,185,129,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M150 260 C350 120, 460 210, 520 220"
                stroke="rgba(52,211,153,0.85)"
                strokeWidth="2"
              />
              <path
                d="M520 220 C650 130, 800 160, 870 250"
                stroke="rgba(52,211,153,0.85)"
                strokeWidth="2"
              />
              <path
                d="M520 220 C700 300, 760 360, 790 405"
                stroke="rgba(52,211,153,0.75)"
                strokeWidth="2"
              />
              <path
                d="M150 260 C350 390, 590 410, 790 405"
                stroke="rgba(52,211,153,0.45)"
                strokeWidth="1.5"
              />
            </svg>

            {[
              {
                name: "North America",
                x: "14%",
                y: "50%",
                text: "Innovation and technology providers",
              },
              {
                name: "Europe",
                x: "50%",
                y: "42%",
                text: "Regulation, MRV, and compliance",
              },
              {
                name: "Tokyo",
                x: "84%",
                y: "48%",
                text: "Industrial operators and engineering",
              },
              {
                name: "Singapore",
                x: "76%",
                y: "78%",
                text: "Regional energy and decarbonization hub",
              },
            ].map((point) => (
              <div
                key={point.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.x, top: point.y }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-emerald-400/20 blur-xl" />
                  <div className="relative h-5 w-5 rounded-full border border-emerald-200 bg-emerald-400 shadow-lg shadow-emerald-400/60" />
                </div>

                <div className="mt-4 w-48">
                  <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                    {point.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

            <a
              href="/insights"
              className="hidden text-sm font-semibold text-emerald-700 hover:text-emerald-900 sm:block"
            >
              View all insights →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-44 bg-gradient-to-br from-emerald-100 via-slate-100 to-slate-300" />

                <div className="p-7">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
                    {item.category}
                  </span>

                  <h3 className="mt-5 text-xl font-bold leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

                  <a
                    href="/insights"
                    className="mt-6 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20 rounded-[2rem] border border-emerald-100 bg-white p-10 shadow-xl shadow-slate-200/70">
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
    </main>
  );
}