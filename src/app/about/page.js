import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Nick & Jenny | Premier Home Watchers",
  description: "Meet Nick and Jenny, Oakland Township residents behind Premier Home Watchers — caring, reliable, and community‑focused.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <PageHero 
        title="About"
        subtitle="Oakland Township residents, caring for our neighbors' homes while they’re away"
      />

      {/* About split section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 items-center md:grid-cols-2">
            {/* Text */}
            <div className="order-2 md:order-1">
              <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Nick & Jenny</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">We’re a husband‑and‑wife team based in Oakland Township. We keep a small service radius so we can respond quickly and give your home the careful, neighbor‑level attention it deserves.</p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">Every visit includes an interior and exterior check and a time‑stamped photo report. If something needs attention, we’ll reach out right away and, with your approval, coordinate vendors or meet contractors on your behalf.</p>
              <div className="mt-6 grid gap-2">
                <div className="flex items-start gap-2 text-gray-800">
                  <svg className="mt-1 h-4 w-4 text-[color:var(--brand-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Photo reports after every visit</span>
                </div>
                <div className="flex items-start gap-2 text-gray-800">
                  <svg className="mt-1 h-4 w-4 text-[color:var(--brand-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Fast alerts and optional vendor coordination</span>
                </div>
                <div className="flex items-start gap-2 text-gray-800">
                  <svg className="mt-1 h-4 w-4 text-[color:var(--brand-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  <span>Flexible membership or pay‑per‑visit pricing</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-white/90 to-white/60 p-2 ring-1 ring-black/10 shadow-xl">
                <Image
                  src="/images/secondary.jpg"
                  alt="Nick and Jenny of Premier Home Watchers"
                  width={820}
                  height={540}
                  className="h-[420px] w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Promise</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Reliable, respectful, and responsive. We keep a small client list so we can be there when you need us.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Photo Reports After Every Visit</h3>
              <p className="text-gray-600">Know what’s happening at home with clear photos and notes from each check.</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Alerts & Coordination</h3>
              <p className="text-gray-600">If we spot an issue, you’ll hear from us right away, and we can coordinate help.</p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Membership</h3>
              <p className="text-gray-600">Weekly or biweekly plans with easy auto‑pay. Pause or adjust anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
