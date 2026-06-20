export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="mx-auto max-w-5xl px-6 py-20">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-600">
          Submit
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          List Your Technology
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Join CarbonTech Hub and showcase your carbon technology,
          MRV solution or industrial decarbonization service to a
          global audience.
        </p>

        <div className="mt-14 rounded-3xl bg-white p-10 shadow-sm">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <label className="font-semibold">
                Company
              </label>

              <input
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                Website
              </label>

              <input
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                Category
              </label>

              <input
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                Contact Email
              </label>

              <input
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="font-semibold">
              Technology Description
            </label>

            <textarea
              className="mt-3 min-h-48 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-emerald-500"
            />

          </div>

          <button className="mt-10 rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700">
            Submit Technology →
          </button>

        </div>

      </section>

    </main>
  );
}