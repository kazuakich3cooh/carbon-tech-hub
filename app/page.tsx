import Image from "next/image";

const insights = [
  ["EU Methane Regulation", "Latest updates on methane reporting and compliance.", "Regulation"],
  ["Carbon Capture", "Emerging technologies and industrial case studies.", "CCUS"],
  ["MRV Digitalization", "AI, sensors and automated emissions monitoring.", "Digital MRV"],
];

const solutions = [
  ["Flare Monitoring", "SENSIA", "Flare Monitoring Camera", "Combustion efficiency and flare performance monitoring."],
  ["Robotics", "TAUROB", "Autonomous Inspection Robot", "Robotic inspection for fugitive emissions and industrial facilities."],
  ["Post Carbon Capture", "KHI", "Carbon Capture Technology", "Post-combustion carbon capture for industrial decarbonization."],
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
              CarbonTech Hub v0.3
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
        <h2 className="text-3xl font-black">Latest Insights</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {insights.map(([title, text, tag]) => (
            <div key={title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-5 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                {tag}
              </p>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <p className="mt-6 font-semibold text-emerald-600">Read more →</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl font-black">Featured Solutions</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {solutions.map(([category, name, product, description]) => (
            <div key={name} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
                {category}
              </p>
              <h3 className="mt-4 text-3xl font-black text-emerald-600">{name}</h3>
              <p className="mt-3 text-lg font-semibold text-slate-700">{product}</p>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
              <p className="mt-6 font-semibold text-emerald-600">View details →</p>
            </div>
          ))}
        </div>
      </section>

      <section id="submit" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col gap-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">Join CarbonTech Hub</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              List your technology and reach a global audience focused on industrial decarbonization.
            </p>
          </div>

          <a className="rounded-xl bg-emerald-600 px-8 py-4 text-center font-bold text-white hover:bg-emerald-700" href="/submit">
            List Your Technology →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        CarbonTech Hub v0.3
      </footer>
    </main>
  );
}