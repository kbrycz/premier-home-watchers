export default function Steps({ steps }) {
  const defaultSteps = [
    { step: "1", title: "Quick Call", desc: "We discuss your project, goals, and timeline." },
    { step: "2", title: "Site Visit & Measurements", desc: "Chris visits your property, measures, and talks through inspiration, layout, and options." },
    { step: "3", title: "Design & Quote", desc: "You receive a clear quote with a proposed start date." },
    { step: "4", title: "Schedule", desc: "We lock in the date and review simple prep steps." },
    { step: "5", title: "Build & Install", desc: "Framing, secure hardware cloth, weather‑resistant finishes, healthy ventilation." },
    { step: "6", title: "Final Touches & Walkthrough", desc: "Nesting boxes, perches, clean‑out access, and a final walkthrough." },
  ];

  const stepsToRender = steps && steps.length ? steps : defaultSteps;

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-3">How It Works</p>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Simple, Clear Process</h3>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            From initial call to final walkthrough, we keep things straightforward and transparent.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stepsToRender.map((s) => (
            <div key={s.step} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full [background:var(--btn-primary-gradient)] text-white font-bold">
                {s.step}
              </div>
              <div className="text-lg font-bold text-gray-900">{s.title}</div>
              <p className="mt-1 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


