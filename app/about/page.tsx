export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-600">
          About
        </p>
        <h1 className="mt-6 text-5xl font-black">About CarbonTech Hub</h1>

        <p className="mt-8 text-xl leading-9 text-slate-700">
          CarbonTech Hub is a platform designed to connect carbon technologies,
          MRV solutions, and industrial decarbonization initiatives.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Mission", "Make carbon technologies easier to discover and compare."],
            ["Focus", "MRV, methane, carbon capture, robotics, satellite, and AI."],
            ["Vision", "Build a global knowledge hub for industrial decarbonization."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black text-emerald-600">{title}</h2>
              <p className="mt-4 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}