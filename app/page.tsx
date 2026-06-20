import Image from "next/image";

const latestInsights = [
  {
    title: "EU Methane Regulation",
    text: "Latest updates on methane reporting and compliance.",
  },
  {
    title: "Carbon Capture",
    text: "Emerging technologies and industrial case studies.",
  },
  {
    title: "MRV Digitalization",
    text: "AI, sensors and automated emissions monitoring.",
  },
];

const featuredSolutions = [
  {
    company: "SENSIA",
    category: "Flare Monitoring",
    description: "Flare combustion efficiency monitoring and optical gas imaging.",
  },
  {
    company: "TAUROB",
    category: "Robotics",
    description: "Autonomous industrial inspection robots.",
  },
  {
    company: "GHGSat",
    category: "Satellite MRV",
    description: "Satellite-based greenhouse gas emissions monitoring.",
  },
  {
    company: "SeekOps",
    category: "Drone MRV",
    description: "Drone-based methane emissions quantification.",
  },
  {
    company: "Kairos Aerospace",
    category: "Methane Detection",
    description: "Aerial methane detection and analytics.",
  },
  {
    company: "Bridger Photonics",
    category: "LiDAR",
    description: "Airborne LiDAR methane detection technology.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative min-h-[620px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Clean industry and nature landscape"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />
        <div className="absolute inset-0 bg-emerald-950/5" />

        <section className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">
              CarbonTech Hub
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
              Connecting Carbon Technologies & MRV Solutions
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
              Discover technologies accelerating methane management, carbon capture,
              flare monitoring, and industrial decarbonization.
            </p>
          </div>
        </section>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black">Latest Insights</h2>
          <a
            href="/insights"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            View all →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {latestInsights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                🌿
              </div>

              <h3 className="text-xl font-bold">{insight.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {insight.text}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                Read more →
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black">Featured Solutions</h2>
          <a
            href="/solutions"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            View all →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredSolutions.map((solution) => (
            <div
              key={solution.company}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
                {solution.category}
              </p>

              <h3 className="mt-4 text-2xl font-black">
                {solution.company}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {solution.description}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                View details →
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="submit" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">Join CarbonTech Hub</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              List your technology and reach a global audience focused on
              industrial decarbonization.
            </p>
          </div>

          <a
            className="rounded-xl bg-emerald-600 px-8 py-4 text-center font-bold text-white hover:bg-emerald-700"
            href="/submit"
          >
            List Your Technology →
          </a>
        </div>
      </section>
    </main>
  );
}