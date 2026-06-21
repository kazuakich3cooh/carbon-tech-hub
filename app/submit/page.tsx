export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              For Solution Providers
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Showcase your solution to the future of industrial
              decarbonization.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CarbonTech Hub helps technology providers bring their MRV,
              methane, flare monitoring, robotics, sensing, analytics, and
              decarbonization solutions closer to industrial companies looking
              for practical ways to measure, manage, and reduce emissions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contact@carbon-tech-hub.com"
                className="rounded-full bg-emerald-600 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Apply for Listing
              </a>

              <a
                href="/solutions"
                className="rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                Explore Consulting Support
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Accelerate Your Impact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Help industry discover technologies that can make emissions
              visible, measurable, and manageable.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              The transition to lower-emission operations requires innovative
              technologies. CarbonTech Hub is building a focused platform where
              industrial operators can discover practical solutions for
              emissions monitoring, MRV, methane management, robotics, sensing,
              and industrial decarbonization.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              If your technology can help organizations measure, understand, or
              reduce emissions, we would like to hear from you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Technology",
                  value: "Providers",
                },
                {
                  label: "Industrial",
                  value: "Focus",
                },
                {
                  label: "MRV &",
                  value: "Monitoring",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Why be featured?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Put your solution in front of companies searching for practical
              carbon technologies.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many industrial companies know they need better emissions data,
              but they do not yet know which technologies exist. CarbonTech Hub
              is designed to connect those companies with relevant solution
              providers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Increase Visibility",
                text: "Show your technology to companies exploring MRV, methane, flare, sensing, and decarbonization solutions.",
              },
              {
                title: "Reach the Right Audience",
                text: "Connect with industrial operators, project teams, consultants, and decision makers looking for real technologies.",
              },
              {
                title: "Communicate Your Value",
                text: "Explain what your solution does, where it fits, and what emissions challenge it can help solve.",
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
                Get Featured
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Ready to introduce your solution?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Send us your company name, website, technology category, target
                industry, and a short description of your solution. We will
                review it for future listing opportunities on CarbonTech Hub.
              </p>
            </div>

            <a
              href="mailto:contact@carbon-tech-hub.com"
              className="rounded-full bg-emerald-500 px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Apply for Listing
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}