export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Consulting Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Turn complex environmental requirements into practical action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Environmental regulations, emissions reporting, and MRV
              requirements are becoming increasingly complex. CarbonTech Hub
              helps companies understand what needs to be measured, reported,
              verified, and improved.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/submit"
                className="rounded-full bg-emerald-600 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Request Consulting Support
              </a>

              <a
                href="/about"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="text-sm font-semibold text-emerald-600">
              Common questions
            </p>

            <div className="mt-6 space-y-5">
              {[
                "Which emissions sources should we include?",
                "How should we define company-level emissions?",
                "Which regulations apply to our operations?",
                "What MRV technologies are suitable?",
                "How can emissions data be collected and reported?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              What we support
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From uncertainty to a clear MRV roadmap.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We support companies in clarifying emissions challenges,
              identifying applicable requirements, and selecting practical
              monitoring technologies for industrial decarbonization.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Emissions Definition",
                text: "Clarify emissions boundaries, sources, and reporting scope for your operations.",
              },
              {
                title: "Regulatory Understanding",
                text: "Understand relevant environmental rules, methane requirements, and reporting expectations.",
              },
              {
                title: "Technology Selection",
                text: "Identify suitable MRV, methane monitoring, flare monitoring, and data solutions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-emerald-100" />

                <h3 className="text-xl font-bold">{card.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-300/80 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Start here
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Not sure where to begin?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                If your company needs to respond to environmental regulations,
                define emissions, or explore MRV technologies, CarbonTech Hub
                can help you turn the first vague question into a practical next
                step.
              </p>
            </div>

            <a
              href="/submit"
              className="rounded-full bg-emerald-500 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Contact us
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}