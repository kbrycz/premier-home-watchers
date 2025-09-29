import AnimatedLogo from "@/components/AnimatedLogo";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Premier Home Watchers — Facebook Ad",
  description: "Quick overview for ad traffic: what we do and how to get in touch.",
};

export default function FacebookAdPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-gray-900">
      {/* Hero */}
      <section className="relative w-full py-16 sm:py-20 pb-6">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <AnimatedLogo className="w-[140px] h-[140px]" width={140} height={140} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl md:leading-tight">
            Trusted Home Watching in Oakland Township
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Photo reports after every visit, fast alerts if needed, and flexible plans or pay‑per‑visit.
          </p>
        </div>
      </section>

      {/* Four concise cards */}
      <section className="w-full py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">1. Photo Reports</div>
              <h3 className="text-xl font-bold">See What We See</h3>
              <p className="mt-2 text-gray-600">Time‑stamped photos and notes after every visit so you know your home is okay.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">2. Fast Alerts</div>
              <h3 className="text-xl font-bold">Immediate Notification</h3>
              <p className="mt-2 text-gray-600">If something needs attention, we call or text you right away and can coordinate vendors.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">3. Flexible Plans</div>
              <h3 className="text-xl font-bold">Membership or Per‑Visit</h3>
              <p className="mt-2 text-gray-600">Weekly, biweekly, or ad‑hoc visits. Transparent pricing with no hidden fees.</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">4. Local & Caring</div>
              <h3 className="text-xl font-bold">Oakland Twp Residents</h3>
              <p className="mt-2 text-gray-600">Small service radius so we treat your home like our own and respond quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}


