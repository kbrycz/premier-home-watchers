export default function Steps({ steps }) {
  const defaultSteps = [
    { step: "1", title: "Quick Call", desc: "We learn your travel dates, concerns, and property details." },
    { step: "2", title: "Onboarding Checklist", desc: "You share access, alarm codes, key contacts, and any quirks to watch." },
    { step: "3", title: "Set Your Plan", desc: "Choose visit frequency, add storm checks, and any custom tasks." },
    { step: "4", title: "First Visit", desc: "We perform a full check and send a photo report the same day." },
    { step: "5", title: "Alerts & Coordination", desc: "If we spot an issue, you’re notified immediately and we can coordinate vendors." },
    { step: "6", title: "Ongoing Care", desc: "Simple monthly membership with auto‑pay; adjust or pause anytime." },
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


