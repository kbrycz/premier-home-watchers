import AnimatedLogo from "@/components/AnimatedLogo";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Chicken Coop Special | Bullfrog Builders",
  description: "Custom chicken coops built for safety, comfort, and easy maintenance. Get a fast quote today.",
};

export default function ChickenCoopAdPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-gray-900">
      {/* Hero - logo + headline */}
      <section className="relative w-full py-20 sm:py-24 pb-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <AnimatedLogo className="w-[160px] h-[160px]" width={160} height={160} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl md:leading-tight">
            Custom Chicken Coops That Keep Your Flock Happy
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Safe, easy-to-clean, and built for Michigan weather — designed around your yard and your flock.
          </p>
        </div>
      </section>

      {/* Feature image under headline */}
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/coop.jpeg"
              alt="Custom chicken coop build"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three quick cards */}
      <section className="w-full py-16 pb-2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">Pricing</div>
              <h3 className="text-xl font-bold">Transparent & Fair</h3>
              <p className="mt-2 text-gray-600">
                Clear quotes with material + labor pricing. No hidden fees. Options for runs, nesting boxes, and finishes.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">Process</div>
              <h3 className="text-xl font-bold">Simple & Straightforward</h3>
              <p className="mt-2 text-gray-600">
                We handle everything from the initial call to final walkthrough. Clear communication and quality work every step of the way.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-2 text-sm font-semibold text-[color:var(--brand-primary)]">Why Us</div>
              <h3 className="text-xl font-bold">Experience With Chickens</h3>
              <p className="mt-2 text-gray-600">
                Built by a former Binder Park Zoo keeper who's raised chickens for years. We understand what makes a great coop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}


