export default function GlobalNetwork() {
  const points = [
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
  ];

  return (
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

          {points.map((point) => (
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
  );
}